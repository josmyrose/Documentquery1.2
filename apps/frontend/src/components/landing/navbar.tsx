import Link from "next/link";
import { FileText } from "lucide-react";
import { navLinks } from "@/lib/constants/landing";
import { MobileMenu } from "./mobile-menu";

type NavbarProps = {
  isAuthenticated?: boolean;
};

export function Navbar({ isAuthenticated = false }: NavbarProps) {
  const primaryHref = isAuthenticated ? "/app" : "/auth/signup";
  const secondaryHref = isAuthenticated ? "/app" : "/auth/signin";

  return (
    <header className="relative z-20 border-b border-white/10 bg-slate-950/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-wide">
          <FileText className="h-5 w-5 text-yellow-300" />
          <span>DocumentQuery AI</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={secondaryHref}
            className="rounded-full border border-yellow-300/25 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
          >
            {isAuthenticated ? "Workspace" : "Sign In"}
          </Link>
          <Link
            href={primaryHref}
            className="rounded-full bg-gradient-to-r from-yellow-300 to-blue-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-400/10 transition hover:scale-[1.02]"
          >
            {isAuthenticated ? "Open App" : "Sign Up"}
          </Link>
        </div>

        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
}