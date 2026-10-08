// Contact.jsx — Contact Section with Form
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMessage("Please fill all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      // 🔌 Yahan apna API call lagao (EmailJS, Formspree, etc.)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("success");
      setStatusMessage("Thanks! Your message has been sent.");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    } catch (err) {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  const contactInfo = [
    {
      label: "Email",
      value: "tayyabdevify@gmail.com",
      href: "mailto:tayyabdevify@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "0307 5627940",
      href: "tel:+923075627940",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Peshawar, Pakistan",
      href: "https://maps.google.com/?q=Peshawar,Pakistan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#0a0e1a] 
                 py-16 sm:py-20 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Heading — CENTER */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <p className="text-[#ff6b4a] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Have a project in mind? Let's talk. I'm always open to discussing new
            opportunities and ideas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* LEFT — Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                target={info.label === "Location" ? "_blank" : undefined}
                rel={info.label === "Location" ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 p-5 sm:p-6
                           bg-white/[0.03] border border-white/10 rounded-xl
                           transition-all duration-300 
                           hover:bg-white/[0.06] hover:border-[#ff6b4a]/30"
              >
                <div
                  className="w-12 h-12 shrink-0 rounded-lg 
                             bg-[#ff6b4a]/10 text-[#ff6b4a] 
                             flex items-center justify-center
                             transition-all duration-300 
                             group-hover:bg-[#ff6b4a] group-hover:text-white"
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">
                    {info.label}
                  </p>
                  <p className="text-sm sm:text-base text-white font-medium break-all">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
                Follow Me
              </p>
              <div className="flex gap-3">
                {[
                  { label: "GitHub", href: "https://github.com/" },
                  { label: "LinkedIn", href: "https://linkedin.com/" },
                  { label: "Twitter", href: "https://twitter.com/tayyabdevify" },
                  { label: "Facebook", href: "https://facebook.com/" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg 
                               bg-white/[0.03] border border-white/10 
                               flex items-center justify-center
                               text-gray-400 text-xs font-bold
                               transition-all duration-300 
                               hover:bg-[#ff6b4a] hover:border-[#ff6b4a] hover:text-white"
                  >
                    {social.label[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white/[0.03] border border-white/10 
                         rounded-2xl p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg 
                               bg-white/[0.03] border border-white/10 
                               text-white placeholder:text-gray-600 
                               text-sm
                               focus:outline-none focus:border-[#ff6b4a] 
                               transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg 
                               bg-white/[0.03] border border-white/10 
                               text-white placeholder:text-gray-600 
                               text-sm
                               focus:outline-none focus:border-[#ff6b4a] 
                               transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-lg 
                             bg-white/[0.03] border border-white/10 
                             text-white placeholder:text-gray-600 
                             text-sm
                             focus:outline-none focus:border-[#ff6b4a] 
                             transition-colors"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg 
                             bg-white/[0.03] border border-white/10 
                             text-white placeholder:text-gray-600 
                             text-sm resize-none
                             focus:outline-none focus:border-[#ff6b4a] 
                             transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto
                           inline-flex items-center justify-center gap-2
                           bg-[#ff6b4a] text-white 
                           px-8 py-3.5 
                           text-xs sm:text-sm font-bold uppercase tracking-wider
                           transition-all duration-300 
                           hover:bg-[#ff5533]
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>

              {/* Status Message */}
              {statusMessage && (
                <p
                  className={`mt-4 text-sm font-medium ${
                    status === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}