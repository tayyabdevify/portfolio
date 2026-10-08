// Portfolio.jsx — Gradient Cards (No Images)
import React from "react";

const projects = [
  { title: "Pehaz Brand", category: "Branding", gradient: "from-amber-600 to-orange-700" },
  { title: "Purity Water", category: "Product Design", gradient: "from-cyan-500 to-blue-600" },
  { title: "Moro Coffee", category: "Packaging", gradient: "from-gray-700 to-gray-900" },
  { title: "B&O Speaker", category: "UI Design", gradient: "from-slate-400 to-slate-600" },
  { title: "Wolf Logo", category: "Logo Design", gradient: "from-zinc-500 to-zinc-700" },
  { title: "Modern Table", category: "3D Design", gradient: "from-amber-700 to-yellow-600" },
  { title: "Green Teal", category: "Color Palette", gradient: "from-teal-500 to-emerald-600" },
  { title: "Deer Art", category: "Illustration", gradient: "from-stone-500 to-stone-700" },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden bg-[#0a0e1a] 
                 py-16 sm:py-20 lg:py-28"
    >
      <div className="wrap mx-auto">

        {/* Heading */}
        <div className="mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Portfolio
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href="#"
              className={`group block aspect-square rounded-2xl 
                         bg-gradient-to-br ${project.gradient}
                         p-4 sm:p-6 
                         flex flex-col justify-between
                         transition-all duration-300 
                         hover:scale-[1.03] hover:shadow-2xl`}
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70">
                {project.category}
              </span>
              <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                {project.title}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}