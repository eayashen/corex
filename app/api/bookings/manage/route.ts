import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db/mongodb";
import { Booking } from "@/models/Booking";
import { Setting } from "@/models/Setting";
import { isRescheduleAllowed, formatDisplayDate, format12Hour } from "@/lib/utils/date";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const mobile = searchParams.get("mobile")?.trim().replace(/[\s-]/g, "");
    const email = searchParams.get("email")?.trim().toLowerCase();
    const bookingId = searchParams.get("bookingId")?.trim().toUpperCase();

    if (!mobile && !email && !bookingId) {
      return NextResponse.json(
        { success: false, error: "Please provide your mobile number, email, or Booking ID to find your bookings." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const query: any = {};
    const conditions: any[] = [];

    if (bookingId) {
      conditions.push({ bookingId: new RegExp(`^${bookingId}$`, "i") });
    }
    if (mobile) {
      // Search matching mobile number (accounting for leading 880 or +880)
      const pure11 = mobile.slice(-11);
      conditions.push({ mobile: new RegExp(`${pure11}$`) });
    }
    if (email) {
      conditions.push({ email: email.toLowerCase() });
    }

    if (conditions.length === 1) {
      Object.assign(query, conditions[0]);
    } else {
      query.$or = conditions;
    }

    const settings = await Setting.findOne().lean();
    const cutoffHours = settings?.scheduleChangeHoursLimit || 48;

    const bookings = await Booking.find(query).sort({ createdAt: -1 }).lean();

    const formattedBookings = bookings.map((b) => {
      const rescheduleCheck = isRescheduleAllowed(b.date, b.startTime, cutoffHours);
      const isEligibleToReschedule =
        (b.status === "PENDING" || b.status === "CONFIRMED") && rescheduleCheck.allowed;

      return {
        bookingId: b.bookingId,
        customerName: b.customerName,
        mobile: b.mobile,
        email: b.email,
        date: b.date,
        displayDate: formatDisplayDate(b.date),
        slotId: b.slotId,
        slotType: b.slotType,
        startTime: b.startTime,
        endTime: b.endTime,
        timeRange: `${format12Hour(b.startTime)} – ${format12Hour(b.endTime)}`,
        regularPrice: b.regularPrice,
        discountedPrice: b.discountedPrice,
        finalPrice: b.finalPrice,
        paymentAmount: b.paymentAmount,
        dueAmount: b.finalPrice - b.paymentAmount,
        status: b.status,
        createdAt: b.createdAt,
        isEligibleToReschedule,
        hoursRemainingBeforeMatch: rescheduleCheck.hoursRemaining,
        cutoffHours,
        scheduleChangeHistory: b.scheduleChangeHistory || [],
      };
    });

    return NextResponse.json({
      success: true,
      count: formattedBookings.length,
      bookings: formattedBookings,
    });
  } catch (error: any) {
    console.error("Manage booking lookup error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to search bookings." },
      { status: 500 }
    );
  }
}
