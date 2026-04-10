"use client";

import { useState } from "react";
import { askQuestion } from "@/lib/api";
import { MessageList } from "@/components/features/message-list";
import type { Message, UploadResponse } from "@/types";

type ChatInterfaceProps = {
  documents: UploadResponse[];
};

export function ChatInterface({ documents }: ChatInterfaceProps) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAsking, setIsAsking] = useState(false);
  const [error, setError] = useState("");

  const documentIds = documents.map((doc) => doc.document_id);

  async function handleAsk(event: React.FormEvent) {
    event.preventDefault();

    if (!question.trim()) return;
    if (!documentIds.length) {
      setError("Upload at least one document before asking a question.");
      return;
    }

    setError("");
    const currentQuestion = question.trim();

    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "user",
        content: currentQuestion,
      },
    ]);

    setQuestion("");
    setIsAsking(true);

    try {
      const result = await askQuestion(currentQuestion, documentIds);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: result.answer,
          citations: result.citations,
          confidence: result.confidence,
        },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get answer");
    } finally {
      setIsAsking(false);
    }
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">Ask your documents</h2>
        <p className="mt-2 text-sm text-slate-500">
          Run citation-backed questions against the uploaded workspace documents.
        </p>
      </div>

      <form onSubmit={handleAsk} className="space-y-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask something about the uploaded documents..."
          className="min-h-[140px] w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            Active documents: {documents.length}
          </p>

          <button
            type="submit"
            disabled={isAsking}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 disabled:opacity-50"
          >
            {isAsking ? "Generating..." : "Ask question"}
          </button>
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        )}
      </form>

      <div className="mt-8">
        <MessageList messages={messages} />
      </div>
    </section>
  );
}