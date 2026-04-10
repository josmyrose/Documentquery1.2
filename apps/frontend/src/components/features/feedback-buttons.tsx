"use client";

import { useState } from "react";
import { submitFeedback } from "@/lib/api";

type FeedbackButtonsProps = {
  question: string;
  answer: string;
  documentId?: number;
};

export function FeedbackButtons({
  question,
  answer,
  documentId,
}: FeedbackButtonsProps) {
  const [status, setStatus] = useState("");
  const [showCorrection, setShowCorrection] = useState(false);
  const [correction, setCorrection] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleHelpful() {
    try {
      setIsSubmitting(true);
      await submitFeedback({
        question,
        answer,
        rating: "up",
        document_id: documentId,
      });
      setStatus("Feedback submitted.");
    } catch {
      setStatus("Failed to submit feedback.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleCorrection() {
    if (!showCorrection) {
      setShowCorrection(true);
      return;
    }

    try {
      setIsSubmitting(true);
      await submitFeedback({
        question,
        answer,
        rating: "down",
        correction: correction || undefined,
        document_id: documentId,
      });
      setStatus("Correction saved.");
      setCorrection("");
      setShowCorrection(false);
    } catch {
      setStatus("Failed to submit correction.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mt-4 space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={handleHelpful}
          disabled={isSubmitting}
          className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:opacity-50"
        >
          Helpful
        </button>

        <button
          type="button"
          onClick={handleCorrection}
          disabled={isSubmitting}
          className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:opacity-50"
        >
          Needs correction
        </button>
      </div>

      {showCorrection && (
        <div className="space-y-2">
          <textarea
            value={correction}
            onChange={(e) => setCorrection(e.target.value)}
            placeholder="Add a correction or explain what is wrong..."
            className="min-h-[100px] w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={handleCorrection}
            disabled={isSubmitting}
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 disabled:opacity-50"
          >
            Submit correction
          </button>
        </div>
      )}

      {status && <p className="text-xs text-slate-500">{status}</p>}
    </div>
  );
}