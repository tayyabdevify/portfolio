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
  { value: "3+", label: "Years Experience" },
  { value: "25+", label: "Projects Done" },
  { value: "15+", label: "Happy Clients" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0e1a]"
    >
      <div className="wrap relative flex min-h-screen items-center pt-28 pb-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Text content */}
          <div className="order-2 lg:order-1">
            {/* Social icons */}
            <div className="mb-8 flex gap-3">
              {socials.map(({ label, to, icon }) => (
                <Link
                  key={label}
                  to={to}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-[#c9c9cc] text-sm font-bold text-[#0a0e1a] transition-colors hover:bg-brand hover:text-white"
                >
                  {icon}
                </Link>
              ))}
            </div>

            {/* I am ... */}
            <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl md:text-5xl">
              I am Tayyab Ahmad
            </h2>

            {/* Role box with tail */}
            <div className="relative mt-8 inline-block">
              <div className="relative border-[3px] border-white px-6 py-3 sm:px-8 sm:py-4">
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                  Front End Developer
                </h1>
                {/* Tail — bottom left */}
                <span className="absolute -bottom-[14px] left-6 h-0 w-0 border-l-[14px] border-t-[14px] border-l-transparent border-t-white" />
                <span className="absolute -bottom-[10px] left-[27px] h-0 w-0 border-l-[10px] border-t-[10px] border-l-transparent border-t-[#0a0e1a]" />
              </div>
            </div>


           

            {/* Stats strip */}
            <div className="mt-12 flex flex-wrap gap-10 border-t border-white/10 pt-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-brand sm:text-4xl">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
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
              className="max-h-[80vh] w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Scroll button */}
      <Link
        to="/about"
        aria-label="Scroll down"
        className="absolute bottom-10 left-6 z-10 grid h-16 w-16 place-items-center bg-brand text-white transition-colors hover:bg-brand-hover sm:left-8 md:left-12"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </Link>
    </section>
  );
}