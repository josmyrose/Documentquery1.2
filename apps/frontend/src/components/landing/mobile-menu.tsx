"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  navLinks: NavLink[];
};

export function MobileMenu({ navLinks }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
        className="rounded-xl border border-white/10 bg-white/5 p-2 text-white"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open ? (
        <div className="absolute left-4 right-4 top-16 rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}