import * as React from "react";

type AppShellProps = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};

export function AppShell({ sidebar, children }: AppShellProps) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-6">{sidebar}</aside>
          <section>{children}</section>
        </div>
      </div>
    </main>
  );
}