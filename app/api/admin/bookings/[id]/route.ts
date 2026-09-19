import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db/mongodb";
import { Booking } from "@/models/Booking";
import { Slot } from "@/models/Slot";
import { getAdminFromRequestHeaders } from "@/lib/auth/jwt";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = getAdminFromRequestHeaders(request);
    if (!admin) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    await connectToDatabase();

    const booking = await Booking.findById(id).lean();
    if (!booking) {
      return NextResponse.json({ success: false, error: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, booking });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: "Failed to fetch booking details" }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = getAdminFromRequestHeaders(request);
    if (!admin) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { action, declineReason, adminNote, newDate, newSlotId, paymentAmount, transactionId } = body;

    await connectToDatabase();

    const booking = await Booking.findById(id);
    if (!booking) {
      return NextResponse.json({ success: false, error: "Booking not found" }, { status: 404 });
    }

    const timestamp = new Date();

    if (action === "APPROVE") {
      if (booking.status !== "PENDING") {
        return NextResponse.json(
          { success: false, error: `Cannot approve a booking that is currently ${booking.status}` },
          { status: 400 }
        );
      }
      booking.status = "CONFIRMED";
      booking.auditLog.push({
        action: "Approved by ADMIN",
        actor: "ADMIN",
        timestamp,
        details: `Approved by ${admin.name} (${admin.email})`,
      });
    } else if (action === "DECLINE") {
      if (booking.status !== "PENDING") {
        return NextResponse.json(
          { success: false, error: `Cannot decline a booking that is currently ${booking.status}` },
          { status: 400 }
        );
      }
      booking.status = "DECLINED";
      booking.declineReason = declineReason || "Declined by Admin";
      booking.auditLog.push({
        action: "Declined by ADMIN",
        actor: "ADMIN",
        timestamp,
        details: declineReason ? `Reason: ${declineReason}` : "No specific reason provided",
      });
    } else if (action === "CANCEL") {
      booking.status = "CANCELLED";
      if (adminNote) {
        booking.adminNote = adminNote;
      }
      booking.auditLog.push({
        action: "Cancelled by ADMIN",
        actor: "ADMIN",
        timestamp,
        details: adminNote ? `Note: ${adminNote}` : `Cancelled by ${admin.name}`,
      });
    } else if (action === "RESCHEDULE") {
      // Admin is NOT restricted by 48-hour rule
      if (!newDate || !newSlotId) {
        return NextResponse.json(
          { success: false, error: "New date and slot are required for rescheduling." },
          { status: 400 }
        );
      }

      const newSlot = await Slot.findOne({ slotId: newSlotId });
      if (!newSlot) {
        return NextResponse.json({ success: false, error: "New slot not found" }, { status: 404 });
      }

      // Check slot availability on target date
      const conflict = await Booking.findOne({
        _id: { $ne: booking._id },
        date: newDate,
        slotId: newSlotId,
        status: { $in: ["PENDING", "CONFIRMED"] },
      });

      if (conflict) {
        return NextResponse.json(
          { success: false, error: `Slot is already booked/pending on ${newDate}.` },
          { status: 409 }
        );
      }

      const oldDate = booking.date;
      const oldSlot = booking.slotId;
      const oldStartTime = booking.startTime;
      const oldEndTime = booking.endTime;

      booking.scheduleChangeHistory.push({
        oldDate,
        oldSlot,
        oldStartTime,
        oldEndTime,
        newDate,
        newSlot: newSlotId,
        newStartTime: newSlot.startTime,
        newEndTime: newSlot.endTime,
        changedBy: "ADMIN",
        timestamp,
        reason: adminNote || `Rescheduled by Admin (${admin.name})`,
      });

      booking.auditLog.push({
        action: "Schedule changed by ADMIN",
        actor: "ADMIN",
        timestamp,
        details: `Moved from ${oldDate} (${oldStartTime}-${oldEndTime}) to ${newDate} (${newSlot.startTime}-${newSlot.endTime})`,
      });

      booking.date = newDate;
      booking.slotId = newSlotId;
      booking.slotType = newSlot.slotType;
      booking.startTime = newSlot.startTime;
      booking.endTime = newSlot.endTime;
      booking.regularPrice = newSlot.regularPrice;
      booking.discountedPrice = newSlot.discountedPrice;
      booking.finalPrice = newSlot.discountedPrice;
    } else if (action === "UPDATE_PAYMENT") {
      if (paymentAmount !== undefined) {
        booking.paymentAmount = Number(paymentAmount);
      }
      if (transactionId !== undefined) {
        booking.transactionId = transactionId.trim();
      }
      if (adminNote !== undefined) {
        booking.adminNote = adminNote;
      }
      booking.auditLog.push({
        action: "Payment details updated by ADMIN",
        actor: "ADMIN",
        timestamp,
        details: `Updated payment: ৳${booking.paymentAmount}, Trx: ${booking.transactionId || "N/A"}`,
      });
    } else {
      return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
    }

    await booking.save();

    return NextResponse.json({
      success: true,
      message: `Booking successfully updated (${action})`,
      booking,
    });
  } catch (error: any) {
    console.error("Admin booking update error:", error);
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: "The selected target slot is already booked on that date." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update booking" },
      { status: 500 }
    );
  }
}
