"use client";
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          Built for researchers, students, and technical teams
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-yellow-300 drop-shadow-[0_0_24px_rgba(250,204,21,0.45)] md:text-7xl">
          DocumentQuery AI
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl">
          Search, summarize, and cite research papers with AI-powered precision.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
          Help users explore papers, extract key findings, compare documents, and get grounded answers with source-backed citations.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <RouteButton
            href={isAuthenticated ? "/app" : "/auth/signup"}
            className="rounded-2xl bg-gradient-to-r from-yellow-300 to-blue-400 px-8 py-4 text-lg font-semibold text-slate-950 shadow-xl shadow-yellow-500/15 transition hover:scale-[1.03]"
          >
            Get Started
          </RouteButton>

          <RouteButton
            href={isAuthenticated ? "/upload" : "/auth/signin"}
            className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition hover:bg-white/10"
          >
            Upload Papers
          </RouteButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3"
      >
        {[
          "Ask questions across uploaded papers",
          "Generate summaries with cited evidence",
          "Speed up literature review and analysis",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 backdrop-blur-md"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </section>
  );
}