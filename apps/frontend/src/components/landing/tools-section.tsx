"use client";

import { motion } from "framer-motion";
import { productTools } from "@/lib/constants/landing";

export function ToolsSection() {
  return (
    <section id="tools" className="relative z-10 px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-yellow-300/20 bg-white/[0.04] p-8 shadow-[0_0_80px_rgba(59,130,246,0.08)] backdrop-blur-md md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-200 drop-shadow-[0_0_18px_rgba(250,204,21,0.18)] md:text-5xl">
            Explore Our AI-Powered Research Tools
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Transform document-heavy research work with focused AI tools built for faster exploration, summarization, and citation-backed analysis.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productTools.map((tool, index) => {
            const Icon = tool.icon;
            const progressWidths = ["w-4/5", "w-3/4", "w-5/6", "w-[72%]", "w-[78%]"];

            return (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="rounded-[1.75rem] border border-yellow-300/20 bg-slate-800/60 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300/90 to-blue-400/90 text-slate-950 shadow-lg shadow-yellow-300/10">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-semibold text-white">{tool.title}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-300">
                  {tool.description}
                </p>

                <div className="mt-6 h-2.5 w-full rounded-full bg-white/10">
                  <div className={`h-2.5 rounded-full bg-gradient-to-r from-yellow-300 to-blue-400 ${progressWidths[index % progressWidths.length]}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}