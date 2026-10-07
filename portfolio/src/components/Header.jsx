import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Me", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

const desktopBase =
  "relative flex items-center px-4 text-[15px] font-bold uppercase tracking-wide " +
  "transition-colors xl:px-5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand";

const desktopIdle = "text-gray-500 hover:bg-neutral-50 hover:text-dark";

const desktopActive =
  "bg-neutral-100 text-dark " +
  "before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:bg-brand before:content-[''] " +
  "after:absolute after:left-4 after:top-full after:content-[''] " +
  "after:border-t-[10px] after:border-t-brand after:border-r-[10px] after:border-r-transparent";

const mobileBase =
  "block border-l-4 px-6 py-3.5 text-base font-bold uppercase tracking-wide transition-colors";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 font-sans">
      {/* Top strip */}
      <div
        className={`hidden overflow-hidden bg-dark text-xs text-gray-300 transition-all duration-300 md:block ${
          scrolled ? "max-h-0" : "max-h-10"
        }`}
      />

      {/* Main bar */}
      <div
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-header" : "border-b border-gray-200"
        }`}
      >
        <div
          className={`wrap flex items-stretch justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link to="/" aria-label="Home" className="flex items-center">
            <span className="grid h-10 w-10 place-items-center rounded-brand bg-brand text-2xl font-black text-white">
              T
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden items-stretch lg:flex">
            {links.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `${desktopBase} ${isActive ? desktopActive : desktopIdle}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center lg:flex">
            <Link
              to="/contact"
              className="rounded-brand bg-brand px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-hover"
            >
              Get in Touch
            </Link>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col items-center justify-center gap-1.5 p-2 lg:hidden"
          >
            <span className={`h-0.5 w-6 bg-dark transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-dark transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-dark transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full overflow-hidden bg-white shadow-lg transition-all duration-300 lg:hidden ${
          open ? "visible max-h-[32rem] border-t border-gray-200" : "invisible max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="wrap py-2">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `${mobileBase} ${
                  isActive
                    ? "border-brand bg-neutral-100 text-dark"
                    : "border-transparent text-gray-500 hover:bg-neutral-50 hover:text-dark"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="wrap pb-5 pt-2">
          <Link
            to="/contact"
            className="block rounded-brand bg-brand py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}