import React from "react";

const ContactMe = () => (
  <section className="w-full flex justify-center px-4 py-20 bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b]">
    <div className="w-full max-w-5xl rounded-3xl shadow-2xl bg-gradient-to-tr from-[#334155] via-[#1e293b] to-[#334155] border border-[#475569] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left: Headings */}
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 flex items-center gap-4">
          <span>Let’s Connect</span>
          <span className="animate-wiggle inline-block" role="img" aria-label="waving hand">👋</span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
          Have an idea, project, or just want to say hi? My inbox is always open. Let’s build something great together!
        </p>
        <p className="text-gray-400 text-sm italic max-w-xl">
          I typically respond within 24 hours. Looking forward to hearing from you!
        </p>
      </div>
      {/* Right: Contact Button */}
      <a
        href="mailto:your@email.com"
        className="inline-block px-10 py-5 rounded-3xl bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] text-[#f0f9ff] font-extrabold text-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-[#3b82f6]/50"
      >
        Contact Me <span aria-hidden>↗</span>
      </a>
      {/* Animation for the waving hand */}
      <style>
        {`
          @keyframes wiggle {
            0%, 100% { transform: rotate(-10deg);}
            20%, 60% { transform: rotate(14deg);}
            40%, 80% { transform: rotate(-4deg);}
          }
          .animate-wiggle {
            display: inline-block;
            animation: wiggle 1.2s infinite;
          }
        `}
      </style>
    </div>
  </section>
);

export default ContactMe;
