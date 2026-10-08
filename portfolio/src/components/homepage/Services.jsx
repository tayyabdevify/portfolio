// Services.jsx — What I Do
import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites built with React.js and Tailwind CSS. Fast, SEO-friendly, and pixel-perfect.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, user-friendly interfaces designed in Figma. Focused on usability, accessibility, and modern aesthetics.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    title: "Responsive Design",
    description:
      "Mobile-first layouts that look great on every device — from small phones to large desktop screens.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "GSAP Animations",
    description:
      "Smooth, professional animations with GSAP — scroll effects, transitions, and micro-interactions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20" />
        <path d="m4.93 4.93 14.14 14.14M19.07 4.93 4.93 19.07" />
      </svg>
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "Lightning-fast websites with optimized images, lazy loading, and clean code that scores high on Lighthouse.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </svg>
    ),
  },
  {
    title: "SEO Friendly",
    description:
      "Semantic HTML, proper meta tags, and fast load times — so your site ranks well on Google.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#0a0e1a] 
                 py-16 sm:py-20 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Heading — CENTER */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <p className="text-[#ff6b4a] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-6 sm:p-7 lg:p-8 
                         bg-white/[0.03] border border-white/10 rounded-2xl
                         transition-all duration-300 
                         hover:bg-white/[0.06] hover:border-[#ff6b4a]/30 
                         hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl 
                           bg-[#ff6b4a]/10 text-[#ff6b4a] 
                           flex items-center justify-center 
                           mb-5 sm:mb-6
                           transition-all duration-300 
                           group-hover:bg-[#ff6b4a] group-hover:text-white"
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Number — decorative */}
              <span
                className="absolute top-5 right-6 
                           text-5xl sm:text-6xl font-bold 
                           text-white/[0.03] 
                           group-hover:text-[#ff6b4a]/10 
                           transition-colors duration-300"
              >
                0{i + 1}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}