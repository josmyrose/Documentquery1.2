import type { Citation } from "@/types";

type CitationListProps = {
  citations: Citation[];
};

export function CitationList({ citations }: CitationListProps) {
  if (!citations.length) return null;

  return (
    <div className="mt-5 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        Citations
      </p>

      {citations.map((citation, index) => (
        <div
          key={`${citation.filename}-${citation.page}-${index}`}
          className="rounded-2xl border border-slate-200 bg-white p-4"
        >
          <div className="mb-2 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-slate-900">{citation.filename}</p>
            <p className="text-xs text-slate-500">
              {citation.page ? `Page ${citation.page}` : "Page N/A"}
            </p>
          </div>
          <p className="text-sm leading-6 text-slate-600">{citation.snippet}</p>
        </div>
      ))}
    </div>
  );
}