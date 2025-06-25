import React from "react";

const techStack = [
  { name: "MongoDB", color: "text-green-400", icon: "🍃" },
  { name: "Express.js", color: "text-gray-200", icon: "🚂" },
  { name: "React", color: "text-blue-400", icon: "⚛️" },
  { name: "Node.js", color: "text-green-500", icon: "🟩" },
  { name: "C++", color: "text-blue-300", icon: "💻" },
  { name: "Python", color: "text-yellow-300", icon: "🐍" },
  { name: "NumPy", color: "text-purple-300", icon: "📊" },
  { name: "HTML", color: "text-orange-400", icon: "🌐" },
  { name: "CSS", color: "text-blue-300", icon: "🎨" },
  { name: "JavaScript", color: "text-yellow-200", icon: "🟨" },
  { name: "TypeScript", color: "text-blue-300", icon: "🔷", exploring: true },
];

const Toolbox = () => (
  <section
    id="toolbox"
    className="w-full py-20 px-4 bg-[#161e2e] flex justify-center"
  >
    <div className="w-full max-w-2xl lg:max-w-5xl bg-gradient-to-br from-[#20293a] via-[#232e47] to-[#161e2e] rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16 border border-[#232e47] animate-fade-in">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center tracking-tight">
        My Developer Toolbox
      </h1>
      {/* Divider Line */}
      <div className="w-20 h-1 mx-auto bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full mb-8"></div>
      {/* Subtitle/Intro */}
      <p className="text-gray-400 mb-8 text-lg text-center max-w-2xl mx-auto">
        Here are the technologies and tools I use to craft delightful, scalable, and interactive web apps. I’m always learning and adding new tools to my stack!
      </p>
      {/* Tech Grid */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-center">
        {techStack.map((tech, idx) => (
          <li
            key={tech.name}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl bg-[#1b2232] hover:bg-[#232e47] transition-all duration-200 shadow-sm ${tech.color} text-base font-medium relative animate-fade-in-up`}
            style={{ animationDelay: `${idx * 70}ms` }}
            title={tech.name}
          >
            <span className="text-2xl md:text-2xl transition-transform duration-300 group-hover:scale-110">{tech.icon}</span>
            <span className="text-gray-100">{tech.name}</span>
            {tech.exploring && (
              <span className="ml-2 px-2 py-0.5 rounded-full bg-[#f56551]/10 text-[#f56551] text-xs font-semibold animate-pulse">
                Currently exploring
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-10 text-sm text-gray-500 text-center">
        <span>
          Always learning, always building.
          <span className="ml-1 animate-bounce inline-block">🚀</span>
        </span>
      </div>
      {/* Animations */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(24px);}
            to { opacity: 1; transform: none;}
          }
          .animate-fade-in {
            animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(16px);}
            to { opacity: 1; transform: none;}
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style>
    </div>
  </section>
);

export default Toolbox;
