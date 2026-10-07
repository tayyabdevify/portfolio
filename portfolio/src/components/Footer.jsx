import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Me", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
];

const services = [
  { label: "Web Development", to: "/services" },
  { label: "UI/UX Design", to: "/services" },
  { label: "React Apps", to: "/services" },
  { label: "Consulting", to: "/services" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: "f" },
  { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
  { label: "GitHub", href: "https://github.com", icon: "gh" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-dark text-gray-300">
      {/* Top accent line */}
      <div className="h-1 w-full bg-brand" />

      {/* CTA Banner */}
      <div className="wrap">
        <div className="relative -mt-0 overflow-hidden rounded-brand bg-neutral-800 px-8 py-10 md:px-12 md:py-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Have a project in mind?
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Let's build something great together. Get a free quote today.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 rounded-brand bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-hover"
            >
              Start a Project →
            </Link>
          </div>

          {/* Decorative blob */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand opacity-10" />
        </div>
      </div>

      {/* Main footer */}
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand — wider column */}
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-brand bg-brand text-2xl font-black text-white">
              T
            </span>
            <span className="text-lg font-bold uppercase tracking-wide text-white">
              My Brand
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
            Crafting modern, fast, and user-friendly digital experiences that
            help brands grow online.
          </p>

          {/* Socials */}
          <div className="mt-7 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 text-sm font-bold text-gray-300 transition-all hover:border-brand hover:bg-brand hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-gray-400 transition-colors hover:text-brand"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
            Services
          </h3>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.label}>
                <Link
                  to={s.to}
                  className="text-sm text-gray-400 transition-colors hover:text-brand"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-brand">✉</span>
              <a
                href="mailto:hello@mybrand.com"
                className="transition-colors hover:text-brand"
              >
                hello@mybrand.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-brand">☎</span>
              <a
                href="tel:+923001234567"
                className="transition-colors hover:text-brand"
              >
                +92 300 1234567
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-brand">📍</span>
              <span>Karachi, Pakistan</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-gray-500 sm:flex-row">
          <p>
            © {year} <span className="text-gray-300">My Brand</span>. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-brand">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-brand">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}