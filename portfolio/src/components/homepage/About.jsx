// About.jsx
import React from "react";
import aboutImg from "../../assets/herosection.png";

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0a0e1a] 
                 py-16 sm:py-20 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Heading — CENTER */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            About Me
          </h2>
        </div>

        {/* Grid — items-start for top alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">

          {/* LEFT — Image (Upar + Badi) */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={aboutImg}
              alt="Tayyab Ahmad"
              className="w-auto object-contain
                         max-h-[500px] sm:max-h-[600px] lg:max-h-[700px]"
            />
          </div>

          {/* RIGHT — Content */}
          <div className="lg:pt-4">
            {/* Hi There Bubble */}
            <div className="relative inline-block mb-8">
              <div className="border-[3px] border-white px-6 py-3 sm:px-8 sm:py-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  Hi There
                </h3>
              </div>
              <span className="absolute -bottom-[14px] left-6 h-0 w-0 border-l-[14px] border-t-[14px] border-l-transparent border-t-white" />
              <span className="absolute -bottom-[10px] left-[27px] h-0 w-0 border-l-[10px] border-t-[10px] border-l-transparent border-t-[#0a0e1a]" />
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              I am a passionate Front End Developer with expertise in building modern,
              responsive web applications. I focus on clean code, smooth animations,
              and great user experiences that help businesses grow.
            </p>

            {/* Info Card */}
            <div className="bg-white/[0.03] border border-white/10 rounded-lg p-5 sm:p-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <p className="text-[#ff6b4a] font-bold text-sm sm:text-base mb-1">Name:</p>
                <p className="text-white text-sm sm:text-base">Tayyab Ahmad</p>
              </div>
              <div>
                <p className="text-[#ff6b4a] font-bold text-sm sm:text-base mb-1">Email:</p>
                <p className="text-white text-sm sm:text-base break-all">tayyabdevify@gmail.com</p>
              </div>
              <div>
                <p className="text-[#ff6b4a] font-bold text-sm sm:text-base mb-1">Phone:</p>
                <p className="text-white text-sm sm:text-base">0307 5627940</p>
              </div>
              <div>
                <p className="text-[#ff6b4a] font-bold text-sm sm:text-base mb-1">Twitter:</p>
                <p className="text-white text-sm sm:text-base">tayyabdevify</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#ff6b4a] text-white px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#ff5533]"
              >
                Contact Me
                <ArrowRightIcon />
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#0a0e1a]"
              >
                <DownloadIcon />
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}