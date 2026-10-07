import { Link } from "react-router-dom";

const services = [
  {
    title: "HTML & CSS",
    desc: "Semantic, accessible markup with modern CSS layouts — Flexbox, Grid, and responsive design that works on every device.",
    to: "/services/html-css",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "JavaScript",
    desc: "Clean, modern ES6+ JavaScript — DOM manipulation, async/await, APIs, and interactive user experiences that feel smooth.",
    to: "/services/javascript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <path d="M3 3h18v18H3z" />
        <path d="M10 10v5a2 2 0 0 1-2 2" />
        <path d="M17 10h-3v3h2.5a1.5 1.5 0 0 1 0 3H14" />
      </svg>
    ),
  },
  {
    title: "React.js",
    desc: "Component-driven single-page applications with hooks, context, and clean state management — fast and maintainable.",
    to: "/services/react",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    title: "Next.js",
    desc: "Server-side rendering, static generation, and SEO-friendly web apps with the full power of the React ecosystem.",
    to: "/services/nextjs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 16V8l8 8V8" />
      </svg>
    ),
  },
  {
    title: "Tailwind CSS",
    desc: "Utility-first styling for fast, consistent UI builds — custom design systems, responsive layouts, and zero unused CSS.",
    to: "/services/tailwind",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <path d="M3 12c1.5-4 4-6 7.5-6 3 0 4 2 6.5 2 1.5 0 2.5-.5 3.5-2-1.5 4-4 6-7.5 6-3 0-4-2-6.5-2-1.5 0-2.5.5-3.5 2z" />
        <path d="M3 18c1.5-4 4-6 7.5-6 3 0 4 2 6.5 2 1.5 0 2.5-.5 3.5-2-1.5 4-4 6-7.5 6-3 0-4-2-6.5-2-1.5 0-2.5.5-3.5 2z" />
      </svg>
    ),
  },
  {
    title: "Bootstrap",
    desc: "Rapid, responsive UI development with Bootstrap — grids, components, and mobile-first design out of the box.",
    to: "/services/bootstrap",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 8h4a2 2 0 0 1 0 4H8z" />
        <path d="M8 12h4.5a2 2 0 0 1 0 4H8z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0e1a] py-24">
      <div className="wrap">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-white sm:text-5xl">
          My Services
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-brand" />

        {/* Services grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, to, icon }) => (
            <Link
              key={title}
              to={to}
              className="group block bg-[#161b2b] p-8 transition-colors hover:bg-[#1a2035]"
            >
              {/* Icon */}
              <div className="text-brand">{icon}</div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {desc}
              </p>

              {/* Read more line */}
              <div className="mt-6 flex items-center gap-3">
                <span className="h-[2px] w-6 bg-brand transition-all group-hover:w-10" />
                <span className="text-xs font-bold uppercase tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}