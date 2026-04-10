"use client";

import { useRef, useState } from "react";
import { uploadDocument } from "@/lib/api";
import type { UploadResponse } from "@/types";

type UploadPanelProps = {
  onUploadSuccess: (doc: UploadResponse) => void;
  dark?: boolean;
};

export function UploadPanel({ onUploadSuccess, dark = false }: UploadPanelProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const [uploadedName, setUploadedName] = useState("");

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setError("");
    setIsUploading(true);

    try {
      const result = await uploadDocument(file);
      setUploadedName(result.filename);
      onUploadSuccess(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setIsUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <section
      className={
        dark
          ? "rounded-3xl border border-slate-800 bg-slate-900/80 p-5"
          : "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
      }
    >
      <div className="mb-4">
        <h2 className={dark ? "text-lg font-semibold text-white" : "text-lg font-semibold text-slate-900"}>
          Upload files
        </h2>
        <p className={dark ? "mt-1 text-sm text-slate-400" : "mt-1 text-sm text-slate-500"}>
          Add PDF, DOCX, or TXT documents to the workspace.
        </p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.docx,.txt"
        onChange={handleFileChange}
        className="hidden"
      />

      <div
        className={
          dark
            ? "rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 p-4"
            : "rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4"
        }
      >
        <p className={dark ? "text-sm text-slate-400" : "text-sm text-slate-600"}>
          Upload a document to enable summarization, semantic search, and citation-backed responses.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={isUploading}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {isUploading ? "Uploading..." : "Upload file"}
          </button>

          <span className={dark ? "text-sm text-slate-400" : "text-sm text-slate-500"}>
            {uploadedName || "No file selected"}
          </span>
        </div>
      </div>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      {uploadedName && !isUploading && (
        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          Uploaded successfully: <span className="font-medium">{uploadedName}</span>
        </div>
      )}
    </section>
  );
}