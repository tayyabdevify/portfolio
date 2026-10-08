// Skills.jsx — My Skills Section
import React from "react";

const skills = [
  { name: "React.js", percent: 100 },
  { name: "Tailwind CSS", percent: 100 },
  { name: "JavaScript", percent: 95 },
  { name: "HTML & CSS", percent: 100 },
  { name: "GSAP Animation", percent: 90 },
  { name: "Responsive Design", percent: 100 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-[#0a0e1a] 
                 py-16 sm:py-20 lg:py-28"
    >
      {/* Background pattern — optional */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Heading — CENTER */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            My Experience
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">

          {/* LEFT — Text + Button */}
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Every Day is a New Challenge
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-5">
              I am a passionate Front End Developer with expertise in React.js
              and Tailwind CSS. I build modern, responsive web applications
              with clean code and smooth user experiences.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              My focus is on creating pixel-perfect designs that work seamlessly
              across all devices — from mobile to desktop. I love turning
              complex ideas into simple, beautiful interfaces.
            </p>

            {/* Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center 
                         border-2 border-white text-white 
                         px-6 py-3 sm:px-8 sm:py-3.5 
                         text-xs sm:text-sm font-bold uppercase tracking-wider
                         transition-all duration-300 
                         hover:bg-white hover:text-[#0a0e1a]"
            >
              Contact Me
            </a>
          </div>

          {/* RIGHT — Skill Bars */}
          <div className="space-y-7 sm:space-y-8">
            {skills.map((skill, i) => (
              <div key={i}>
                {/* Skill Name + Percent */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {skill.name}
                  </span>

                  {/* Percent Tooltip */}
                  <div className="relative">
                    <div
                      className="border-2 border-white px-2.5 py-1 
                                 text-xs sm:text-sm font-bold text-white 
                                 bg-[#0a0e1a]"
                    >
                      {skill.percent}%
                    </div>
                    {/* Tooltip Tail */}
                    <span
                      className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 
                                 h-0 w-0 
                                 border-l-[6px] border-t-[6px] 
                                 border-l-transparent border-t-white"
                    />
                    <span
                      className="absolute -bottom-[4px] left-1/2 -translate-x-1/2 
                                 h-0 w-0 
                                 border-l-[4px] border-t-[4px] 
                                 border-l-transparent border-t-[#0a0e1a]"
                    />
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative w-full h-[3px] bg-white/15">
                  <div
                    className="absolute top-0 left-0 h-full bg-[#ff6b4a] 
                               transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}