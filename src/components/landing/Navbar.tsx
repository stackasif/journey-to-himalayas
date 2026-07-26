import { useEffect, useState } from "react";
import { Menu, X, Mountain } from "lucide-react";

const links = [
  { href: "#packages", label: "Packages" },
  { href: "#fleet", label: "Fleet" },
  { href: "#journey", label: "Journey" },
  { href: "#testimonials", label: "Stories" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
              scrolled ? "glass-strong shadow-card" : ""
            }`}
          >
            <a href="#top" className="flex items-center gap-2.5 min-w-0">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-primary shadow-glow">
                <Mountain className="h-5 w-5 text-white" strokeWidth={2.4} />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold tracking-tight text-foreground truncate">
                  Himavan Journeys
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Nepal Road Trips
                </div>
              </div>
            </a>
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="#lead-magnet"
                className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium gradient-primary text-white shadow-glow hover:scale-[1.03] transition-transform"
              >
                Free Guide
              </a>
              <button
                onClick={() => setOpen((o) => !o)}
                className="lg:hidden grid h-10 w-10 place-items-center rounded-xl glass"
                aria-label="Toggle menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed inset-x-0 top-20 z-40 mx-4 rounded-2xl glass-strong p-6 lg:hidden animate-fade-up">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
      <div className="fixed left-0 top-0 z-[60] h-0.5 gradient-primary transition-all"
        style={{ width: `${progress}%` }}
      />
    </>
  );
}
