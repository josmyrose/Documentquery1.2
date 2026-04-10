import type { UploadResponse } from "@/types";

type DocumentListProps = {
  documents: UploadResponse[];
  dark?: boolean;
};

export function DocumentList({ documents, dark = false }: DocumentListProps) {
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
          Workspace documents
        </h2>
        <p className={dark ? "mt-1 text-sm text-slate-400" : "mt-1 text-sm text-slate-500"}>
          Files indexed and available for querying.
        </p>
      </div>

      {documents.length === 0 ? (
        <div
          className={
            dark
              ? "rounded-2xl border border-dashed border-slate-700 bg-slate-950/50 p-4 text-sm text-slate-400"
              : "rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm text-slate-500"
          }
        >
          No documents uploaded yet.
        </div>
      ) : (
        <ul className="space-y-3">
          {documents.map((doc) => (
            <li
              key={doc.document_id}
              className={
                dark
                  ? "rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
                  : "rounded-2xl border border-slate-200 bg-slate-50 p-4"
              }
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className={dark ? "truncate text-sm font-medium text-white" : "truncate text-sm font-medium text-slate-900"}>
                    {doc.filename}
                  </p>
                  <p className={dark ? "mt-1 text-xs text-slate-400" : "mt-1 text-xs text-slate-500"}>
                    Document ID: {doc.document_id}
                  </p>
                </div>

                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  Ready
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}