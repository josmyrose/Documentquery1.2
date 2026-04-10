"use client";

import { useState } from "react";
import { UploadPanel } from "@/components/features/upload-panel";
import { DocumentList } from "@/components/features/document-list";
import { ChatInterface } from "@/components/features/chat-interface";
import type { UploadResponse } from "@/types";
import { APP_NAME } from "@/config/app";
<h1 className="text-xl font-semibold">{APP_NAME}</h1>
export default function HomePage() {
  const [documents, setDocuments] = useState<UploadResponse[]>([]);

  function handleUploadSuccess(doc: UploadResponse) {
    setDocuments((prev) => {
      const exists = prev.some((item) => item.document_id === doc.document_id);
      if (exists) return prev;
      return [...prev, doc];
    });
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-slate-800 bg-slate-950 text-white">
          <div className="flex h-full flex-col px-6 py-8">
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold">
                  DQ
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">DocuQuery AI</h1>
                  <p className="text-sm text-slate-400">
                    Document intelligence workspace
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <UploadPanel onUploadSuccess={handleUploadSuccess} dark />
              <DocumentList documents={documents} dark />
            </div>
          </div>
        </aside>

        <section className="px-6 py-8 lg:px-10">
          <div className="mx-auto max-w-5xl space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    Workspace
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Upload files, ask questions, and get grounded answers with citations.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                    {documents.length} document{documents.length === 1 ? "" : "s"} loaded
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                    System ready
                  </span>
                </div>
              </div>
            </div>

            <ChatInterface documents={documents} />
          </div>
        </section>
      </div>
    </main>
  );
}