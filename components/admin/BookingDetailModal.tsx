"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileImage,
  RefreshCw,
  CalendarDays,
  Shield,
  User,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  History,
  Loader2,
  Trash2,
} from "lucide-react";
import { formatDisplayDate, format12Hour } from "@/lib/utils/date";
import { SlotAvailability } from "../user/SchedulePicker";

interface BookingDetailModalProps {
  booking: any;
  onClose: () => void;
  onUpdate: () => void;
}

export const BookingDetailModal: React.FC<BookingDetailModalProps> = ({
  booking,
  onClose,
  onUpdate,
}) => {
  const [actionLoading, setActionLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Decline Dialog State
  const [showDeclinePrompt, setShowDeclinePrompt] = useState(false);
  const [declineReason, setDeclineReason] = useState("");

  // Cancel Dialog State
  const [showCancelPrompt, setShowCancelPrompt] = useState(false);
  const [cancelReason, setCancelReason] = useState("");

  // Admin Reschedule State (No 48h rule for Admin!)
  const [showReschedulePrompt, setShowReschedulePrompt] = useState(false);
  const [newRescheduleDate, setNewRescheduleDate] = useState(booking.date);
  const [rescheduleSlots, setRescheduleSlots] = useState<SlotAvailability[]>([]);
  const [selectedRescheduleSlotId, setSelectedRescheduleSlotId] = useState("");

  // Screenshot viewer toggle
  const [showFullScreenshot, setShowFullScreenshot] = useState(false);

  const fetchRescheduleSlots = async (date: string) => {
    try {
      const res = await fetch(`/api/availability?date=${date}`);
      const data = await res.json();
      if (data.success) {
        setRescheduleSlots(data.slots || []);
      }
    } catch (err) {
      console.error("Failed to fetch slots for admin reschedule:", err);
    }
  };

  const handleAction = async (action: string, payload: any = {}) => {
    setActionLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch(`/api/admin/bookings/${booking._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, ...payload }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || `Failed to perform ${action}`);
      }

      onUpdate();
      onClose();
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to execute action.");
    } finally {
      setActionLoading(false);
    }
  };

  const dueAmount = booking.finalPrice - (booking.paymentAmount || 0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stadium-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-stadium-900 border border-stadium-700/80 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-stadium-850 to-stadium-900 border-b border-stadium-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-pitch-950 text-pitch-400 border border-pitch-500/30">
              #{booking.bookingId}
            </span>
            <div>
              <h3 className="font-display font-extrabold text-base sm:text-lg text-white">
                Booking Details
              </h3>
              <p className="text-[11px] text-stadium-400">
                Created on {new Date(booking.createdAt).toLocaleString()} by{" "}
                <strong className="text-white">{booking.createdBy}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-stadium-800 text-stadium-400 hover:text-white hover:bg-stadium-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[82vh] overflow-y-auto">
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-800 text-red-200 text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Top Status & Quick Action Bar */}
          <div className="p-4 rounded-xl bg-stadium-850 border border-stadium-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-stadium-400">Current Status</p>
              <div className="mt-1">
                {booking.status === "PENDING" && (
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                    PENDING APPROVAL
                  </span>
                )}
                {booking.status === "CONFIRMED" && (
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    CONFIRMED
                  </span>
                )}
                {booking.status === "DECLINED" && (
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-red-500/20 text-red-300 border border-red-500/30 inline-flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-red-400" />
                    DECLINED
                  </span>
                )}
                {booking.status === "CANCELLED" && (
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-stadium-700 text-stadium-300 border border-stadium-600 inline-flex items-center gap-1.5">
                    CANCELLED
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons for Pending or Active */}
            <div className="flex flex-wrap items-center gap-2">
              {booking.status === "PENDING" && (
                <>
                  <button
                    disabled={actionLoading}
                    onClick={() => handleAction("APPROVE")}
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Approve</span>
                  </button>

                  <button
                    disabled={actionLoading}
                    onClick={() => setShowDeclinePrompt(true)}
                    className="px-4 py-2 rounded-lg bg-red-700/60 hover:bg-red-700 text-red-100 text-xs font-bold border border-red-500/40 flex items-center gap-1.5 transition-all"
                  >
                    <XCircle className="w-4 h-4" />
                    <span>Decline</span>
                  </button>
                </>
              )}

              <button
                onClick={() => {
                  setShowReschedulePrompt(true);
                  fetchRescheduleSlots(booking.date);
                }}
                className="px-3.5 py-2 rounded-lg bg-stadium-800 hover:bg-stadium-750 text-pitch-300 text-xs font-bold border border-stadium-700 flex items-center gap-1.5 transition-all"
              >
                <CalendarDays className="w-4 h-4 text-pitch-400" />
                <span>Change Schedule</span>
              </button>

              {booking.status !== "CANCELLED" && booking.status !== "DECLINED" && (
                <button
                  disabled={actionLoading}
                  onClick={() => setShowCancelPrompt(true)}
                  className="px-3 py-2 rounded-lg bg-stadium-800 hover:bg-red-900/40 text-stadium-300 hover:text-red-300 text-xs font-medium border border-stadium-700 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Decline Reason Prompt Form */}
          {showDeclinePrompt && (
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-700/60 space-y-3">
              <h4 className="font-bold text-xs text-red-300 uppercase tracking-wider">
                Decline Booking Reason (Optional)
              </h4>
              <input
                type="text"
                placeholder="e.g. Invalid payment screenshot, unreceived bKash transaction..."
                value={declineReason}
                onChange={(e) => setDeclineReason(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-stadium-900 border border-stadium-700 text-xs text-white placeholder-stadium-500 focus:outline-none focus:border-red-500"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowDeclinePrompt(false)}
                  className="px-3 py-1.5 rounded-lg bg-stadium-800 text-xs text-stadium-300"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => handleAction("DECLINE", { declineReason })}
                  className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs"
                >
                  Confirm Decline
                </button>
              </div>
            </div>
          )}

          {/* Cancel Prompt Form */}
          {showCancelPrompt && (
            <div className="p-4 rounded-xl bg-stadium-850 border border-stadium-700 space-y-3">
              <h4 className="font-bold text-xs text-stadium-300 uppercase tracking-wider">
                Cancel Booking Note
              </h4>
              <input
                type="text"
                placeholder="Reason for cancellation..."
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-stadium-900 border border-stadium-700 text-xs text-white placeholder-stadium-500 focus:outline-none focus:border-pitch-500"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCancelPrompt(false)}
                  className="px-3 py-1.5 rounded-lg bg-stadium-800 text-xs text-stadium-300"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => handleAction("CANCEL", { adminNote: cancelReason })}
                  className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs"
                >
                  Confirm Cancel
                </button>
              </div>
            </div>
          )}

          {/* Admin Reschedule Prompt (Bypasses 48h limit) */}
          {showReschedulePrompt && (
            <div className="p-4 rounded-xl bg-stadium-850 border-2 border-pitch-500/40 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stadium-700">
                <h4 className="font-display font-bold text-xs text-pitch-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  Admin Schedule Override (No 48h Restriction)
                </h4>
                <button
                  onClick={() => setShowReschedulePrompt(false)}
                  className="text-xs text-stadium-400 hover:text-white"
                >
                  Cancel
                </button>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stadium-300 mb-1">
                  Choose New Date:
                </label>
                <input
                  type="date"
                  value={newRescheduleDate}
                  onChange={(e) => {
                    setNewRescheduleDate(e.target.value);
                    fetchRescheduleSlots(e.target.value);
                  }}
                  className="px-3 py-2 rounded-lg bg-stadium-900 border border-stadium-700 text-white text-xs focus:outline-none focus:border-pitch-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stadium-300 mb-1">
                  Select Available Slot:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-40 overflow-y-auto">
                  {rescheduleSlots
                    .filter((s) => s.status === "AVAILABLE")
                    .map((s) => (
                      <button
                        key={s.slotId}
                        type="button"
                        onClick={() => setSelectedRescheduleSlotId(s.slotId)}
                        className={`p-2 rounded-lg border text-left text-xs transition-all ${
                          selectedRescheduleSlotId === s.slotId
                            ? "bg-pitch-500 text-stadium-950 font-bold border-pitch-400"
                            : "bg-stadium-900 hover:bg-stadium-800 border-stadium-700 text-stadium-200"
                        }`}
                      >
                        <p>{s.label}</p>
                        <p className={`text-[10px] ${selectedRescheduleSlotId === s.slotId ? "text-stadium-950" : "text-pitch-400"}`}>
                          ৳{s.discountedPrice.toLocaleString()} ({s.slotType})
                        </p>
                      </button>
                    ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReschedulePrompt(false)}
                  className="px-3 py-1.5 rounded-lg bg-stadium-800 text-xs text-stadium-300"
                >
                  Close
                </button>
                <button
                  type="button"
                  disabled={!selectedRescheduleSlotId || actionLoading}
                  onClick={() =>
                    handleAction("RESCHEDULE", {
                      newDate: newRescheduleDate,
                      newSlotId: selectedRescheduleSlotId,
                    })
                  }
                  className="px-4 py-1.5 rounded-lg bg-pitch-500 hover:bg-pitch-400 text-stadium-950 font-bold text-xs"
                >
                  Save Schedule Change
                </button>
              </div>
            </div>
          )}

          {/* Customer & Match Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Customer Information Card */}
            <div className="p-4 rounded-xl bg-stadium-850 border border-stadium-700 space-y-2.5">
              <h4 className="font-bold text-xs text-white uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-stadium-800">
                <User className="w-3.5 h-3.5 text-pitch-400" />
                Customer Information
              </h4>
              <div className="text-xs space-y-1.5">
                <p className="flex justify-between">
                  <span className="text-stadium-400">Name:</span>
                  <strong className="text-white">{booking.customerName}</strong>
                </p>
                <p className="flex justify-between">
                  <span className="text-stadium-400">Mobile:</span>
                  <a href={`tel:${booking.mobile}`} className="text-pitch-300 font-mono hover:underline">
                    {booking.mobile}
                  </a>
                </p>
                {booking.email && (
                  <p className="flex justify-between">
                    <span className="text-stadium-400">Email:</span>
                    <a href={`mailto:${booking.email}`} className="text-blue-300 hover:underline truncate max-w-[160px]">
                      {booking.email}
                    </a>
                  </p>
                )}
                {booking.address && (
                  <p className="flex justify-between">
                    <span className="text-stadium-400">Area:</span>
                    <span className="text-stadium-200">{booking.address}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Match Slot Details Card */}
            <div className="p-4 rounded-xl bg-stadium-850 border border-stadium-700 space-y-2.5">
              <h4 className="font-bold text-xs text-white uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-stadium-800">
                <Calendar className="w-3.5 h-3.5 text-pitch-400" />
                Match Slot Details
              </h4>
              <div className="text-xs space-y-1.5">
                <p className="flex justify-between">
                  <span className="text-stadium-400">Date:</span>
                  <strong className="text-white">{formatDisplayDate(booking.date)}</strong>
                </p>
                <p className="flex justify-between">
                  <span className="text-stadium-400">Time:</span>
                  <strong className="text-pitch-300">
                    {format12Hour(booking.startTime)} – {format12Hour(booking.endTime)}
                  </strong>
                </p>
                <p className="flex justify-between">
                  <span className="text-stadium-400">Type:</span>
                  <span className="uppercase font-bold text-stadium-200">{booking.slotType} Slot</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-stadium-400">Slot ID:</span>
                  <span className="font-mono text-stadium-300">{booking.slotId}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Payment & bKash Screenshot Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Payment Summary */}
            <div className="p-4 rounded-xl bg-stadium-850 border border-stadium-700 space-y-2.5">
              <h4 className="font-bold text-xs text-white uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-stadium-800">
                <DollarSign className="w-3.5 h-3.5 text-gold-400" />
                Payment Breakdown
              </h4>
              <div className="text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-stadium-400">Total Slot Fee:</span>
                  <strong className="text-white">৳{booking.finalPrice?.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-stadium-400">Advance Paid:</span>
                  <strong className="text-emerald-400">৳{booking.paymentAmount?.toLocaleString() || "0"}</strong>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="text-stadium-400">Due at Turf:</span>
                  <strong className="text-white text-sm">৳{dueAmount.toLocaleString()}</strong>
                </div>
                {booking.transactionId && (
                  <div className="pt-2 border-t border-stadium-800 flex justify-between">
                    <span className="text-stadium-400">bKash TrxID:</span>
                    <span className="font-mono font-bold text-pitch-300">{booking.transactionId}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Payment Screenshot Box */}
            <div className="p-4 rounded-xl bg-stadium-850 border border-stadium-700 space-y-2.5">
              <h4 className="font-bold text-xs text-white uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-stadium-800">
                <FileImage className="w-3.5 h-3.5 text-pink-400" />
                Payment Screenshot
              </h4>

              {booking.paymentScreenshot ? (
                <div className="space-y-2">
                  <div
                    onClick={() => setShowFullScreenshot(true)}
                    className="relative w-full h-28 rounded-lg overflow-hidden bg-stadium-950 border border-stadium-700 cursor-pointer group hover:border-pitch-500 transition-colors"
                  >
                    <img
                      src={booking.paymentScreenshot}
                      alt="bKash Payment Screenshot"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-stadium-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs font-bold text-white transition-opacity">
                      Click to View Full Image
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowFullScreenshot(true)}
                    className="text-[11px] text-pitch-400 hover:underline font-semibold"
                  >
                    🔍 Zoom Payment Screenshot
                  </button>
                </div>
              ) : (
                <p className="text-xs text-stadium-500 py-4">No payment screenshot attached.</p>
              )}
            </div>
          </div>

          {/* Audit Trail & History */}
          <div className="p-4 rounded-xl bg-stadium-850 border border-stadium-700 space-y-3">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider flex items-center gap-1.5">
              <History className="w-3.5 h-3.5 text-pitch-400" />
              Activity History & Audit Trail
            </h4>

            <div className="space-y-2 text-xs">
              {booking.auditLog && booking.auditLog.length > 0 ? (
                booking.auditLog.map((log: any, index: number) => (
                  <div
                    key={index}
                    className="p-2.5 rounded-lg bg-stadium-900 border border-stadium-800 flex items-start justify-between gap-2"
                  >
                    <div>
                      <p className="font-semibold text-stadium-200">{log.action}</p>
                      {log.details && <p className="text-[11px] text-stadium-400 mt-0.5">{log.details}</p>}
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-stadium-800 text-pitch-400">
                        {log.actor}
                      </span>
                      <p className="text-[10px] text-stadium-500 mt-1">
                        {new Date(log.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-[11px] text-stadium-500">No activity logged.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full Screenshot Lightbox Modal */}
      {showFullScreenshot && booking.paymentScreenshot && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setShowFullScreenshot(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={booking.paymentScreenshot}
              alt="bKash Full Screenshot"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-stadium-700"
            />
            <button
              onClick={() => setShowFullScreenshot(false)}
              className="absolute -top-4 -right-4 p-2 rounded-full bg-stadium-800 text-white hover:bg-stadium-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
