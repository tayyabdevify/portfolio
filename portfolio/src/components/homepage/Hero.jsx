import { Link } from "react-router-dom";
import heroImg from "../../assets/herosection.png";

const socials = [
  { label: "Facebook", to: "https://facebook.com", icon: "f" },
  { label: "Twitter", to: "https://twitter.com", icon: "t" },
  { label: "Pinterest", to: "https://pinterest.com", icon: "p" },
  { label: "Dribbble", to: "https://dribbble.com", icon: "d" },
  { label: "Instagram", to: "https://instagram.com", icon: "i" },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "30+", label: "Projects Done" },
  { value: "25+", label: "Happy Clients" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#0a0e1a]
                 min-h-[85vh] sm:min-h-[88vh] lg:min-h-[90vh]"
    >
      <div className="wrap relative flex min-h-[85vh] sm:min-h-[88vh] lg:min-h-[90vh] 
                      items-center 
                      pt-20 sm:pt-24 lg:pt-28 
                      pb-12 sm:pb-14 lg:pb-16">
        <div className="grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT — Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Social icons */}
            <div className="mb-6 sm:mb-7 lg:mb-8 flex justify-center lg:justify-start gap-2 sm:gap-2.5 lg:gap-3">
              {socials.map(({ label, to, icon }) => (
                <Link
                  key={label}
                  to={to}
                  aria-label={label}
                  className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center 
                             rounded-full bg-[#c9c9cc] 
                             text-xs sm:text-sm font-bold text-[#0a0e1a] 
                             transition-colors hover:bg-brand hover:text-white"
                >
                  {icon}
                </Link>
              ))}
            </div>

            {/* I am ... */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                           font-normal leading-tight text-white">
              I am Tayyab Ahmad
            </h2>

            {/* Role box with tail */}
            <div className="relative mt-6 sm:mt-7 lg:mt-8 inline-block">
              <div className="relative border-[3px] border-white 
                              px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                               font-bold leading-tight text-white">
                  Web Developer
                </h1>
                {/* Tail — bottom left */}
                <span className="absolute -bottom-[14px] left-4 sm:left-6 
                                 h-0 w-0 
                                 border-l-[14px] border-t-[14px] 
                                 border-l-transparent border-t-white" />
                <span className="absolute -bottom-[10px] left-[23px] sm:left-[27px] 
                                 h-0 w-0 
                                 border-l-[10px] border-t-[10px] 
                                 border-l-transparent border-t-[#0a0e1a]" />
              </div>
            </div>

            {/* Stats strip */}
            <div className="mt-8 sm:mt-10 lg:mt-12 
                            flex flex-wrap justify-center lg:justify-start 
                            gap-6 sm:gap-8 lg:gap-10 
                            border-t border-white/10 pt-6 sm:pt-7 lg:pt-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand">
                    {value}
                  </p>
                  <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Image */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <img
              src={heroImg}
              alt="Tayyab Ahmad"
              className="w-auto object-contain
                         max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}