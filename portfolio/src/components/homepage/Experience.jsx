// Experience.jsx — Work History Timeline
import React from "react";

const experiences = [
  {
    year: "2023 - Present",
    role: "Front End Developer",
    company: "Devify Solutions",
    location: "Peshawar, Pakistan",
    description:
      "Building modern web applications with React.js and Tailwind CSS. Leading front-end development for multiple client projects.",
    tags: ["React.js", "Tailwind CSS", "GSAP"],
  },
  {
    year: "2022 - 2023",
    role: "Junior Front End Developer",
    company: "Tech Innovators",
    location: "Remote",
    description:
      "Developed responsive websites and landing pages. Collaborated with designers to create pixel-perfect UIs.",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    year: "2021 - 2022",
    role: "Web Development Intern",
    company: "StartUp Hub",
    location: "Peshawar, Pakistan",
    description:
      "Learned modern web development practices. Assisted senior developers with front-end tasks.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-[#0a0e1a] 
                 py-16 sm:py-20 lg:py-28"
    >
      <div className="wrap">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <p className="text-[#ff6b4a] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${
                  i % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Dot on timeline */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#ff6b4a] ring-4 ring-[#0a0e1a] z-10" />

                {/* Card 1 */}
                <div className={`${i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12"}`}>
                  <span className="inline-block text-[#ff6b4a] font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">
                    {exp.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {exp.company} · {exp.location}
                  </p>
                </div>

                {/* Card 2 */}
                <div className={`${i % 2 === 0 ? "lg:pl-12" : "lg:text-right lg:pr-12"} mt-4 lg:mt-0`}>
                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 sm:p-6">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}>
                      {exp.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-[10px] sm:text-xs font-semibold 
                                     px-2.5 py-1 rounded-full 
                                     bg-[#ff6b4a]/10 text-[#ff6b4a] 
                                     border border-[#ff6b4a]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}