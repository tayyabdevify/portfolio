import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About Me", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact", id: "contact" },
];

const desktopBase =
  "relative flex items-center px-4 text-[15px] font-bold uppercase tracking-wide " +
  "transition-colors xl:px-5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand cursor-pointer";

const desktopIdle = "text-gray-500 hover:bg-neutral-50 hover:text-dark";

const desktopActive =
  "bg-neutral-100 text-dark " +
  "before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:bg-brand before:content-[''] " +
  "after:absolute after:left-4 after:top-full after:content-[''] " +
  "after:border-t-[10px] after:border-t-brand after:border-r-[10px] after:border-r-transparent";

const mobileBase =
  "block border-l-4 px-6 py-3.5 text-base font-bold uppercase tracking-wide transition-colors cursor-pointer";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { pathname } = useLocation();

  // Scroll detection
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = links.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(links[i].id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile on route change
  useEffect(() => setOpen(false), [pathname]);

  // Escape key
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

  // ✅ Smooth scroll handler
  const handleScroll = (e, id) => {
    e.preventDefault();
    setOpen(false);

    // Agar home page pe nahi hain, to home pe jao phir scroll karo
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
            aria-label="Home"
            className="flex items-center cursor-pointer"
          >
            <span className="grid h-10 w-10 place-items-center rounded-brand bg-brand text-2xl font-black text-white">
              T
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden items-stretch lg:flex">
            {links.map(({ label, id }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleScroll(e, id)}
                  className={`${desktopBase} ${
                    isActive ? desktopActive : desktopIdle
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden items-center lg:flex">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="rounded-brand bg-brand px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-hover cursor-pointer"
            >
              Get in Touch
            </a>
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
            <span
              className={`h-0.5 w-6 bg-dark transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-dark transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-dark transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
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
          {links.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleScroll(e, id)}
                className={`${mobileBase} ${
                  isActive
                    ? "border-brand bg-neutral-100 text-dark"
                    : "border-transparent text-gray-500 hover:bg-neutral-50 hover:text-dark"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>
        <div className="wrap pb-5 pt-2">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="block rounded-brand bg-brand py-3 text-center text-sm font-bold uppercase tracking-wide text-white cursor-pointer"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}