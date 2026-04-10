import { previewDocuments } from "@/lib/constants/landing";

export function WorkspacePreview() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">See the research workspace</h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            This preview helps users understand the real product: uploaded documents on the left, answers in the center, and citations on the right.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 shadow-2xl shadow-black/30 backdrop-blur-md">
          <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Documents</p>
              <div className="mt-4 space-y-3">
                {previewDocuments.map((doc) => (
                  <div key={doc} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                    {doc}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/80 p-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">User Question</p>
                <p className="mt-2 text-sm text-slate-200">
                  Compare the key findings and limitations across these uploaded research papers.
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-yellow-300/20 bg-yellow-300/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-yellow-200/70">AI Answer</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  The papers report strong gains under controlled evaluation, but several studies note limited generalization, smaller datasets, and incomplete real-world validation.
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-blue-300/20 bg-blue-400/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200/80">Citations</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-300">
                  <li>• Survey Paper — Results section, page 4</li>
                  <li>• Benchmark Study — Limitations section, page 8</li>
                  <li>• Review Paper — Discussion section, page 11</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}