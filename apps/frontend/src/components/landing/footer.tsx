import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-sm text-slate-400 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© 2026 DocumentQuery AI. Built for research-focused document intelligence.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}