"use client";
import React from 'react';
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import landing from "./landing.png";
import legacy  from "./legacy.png";
import cura from "./cur.png",
const portfolioProjects = [
  {
    company: "Self",
    year: "2025",
    title: "Legacy Vault",
    results: [
      { title: "You can put your digital assets safe" },
      { title: "you can transform your assets to your ❤️ones" },
      { title: "you can visualize that assets" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: legacy,
  },
  {
    company: "AiGo",
    year: "2025",
    title: "AI Trip Planner",
    results: [
      { title: "Generated 1,000+ personalized itineraries" },
      { title: "Helped users save 30% planning time" },
      { title: "Improved trip satisfaction scores by 25%" },
    ],
    link: "https://github.com/achennakeshavareddy1301/ai-trip-planer-web",
    image: landing,
  },
  {
    company: "CURAVOICE",
    year: "2023",
    title: "A Medical Chat Bot",
    results: [
      { title: "Devlop a chat bot interface" },
      { title: "Integrated goggle maps search api" },

    ],
    link: "https://github.com/achennakeshavareddy1301/ai-trip-planer-web",
    image: cura,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center animate-fade-in">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 animate-slide-up">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto animate-fade-in">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky transition-all duration-500 group/card shadow-2xl hover:shadow-emerald-400/20"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text transition-all duration-300">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5 transition-colors duration-300" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50 transition-colors duration-300">
                        <CheckCircleIcon className="size-5 md:size-6 text-emerald-300 transition-all duration-300 animate-pop" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 transition-all duration-300 relative overflow-hidden hover:bg-gradient-to-r hover:from-emerald-400 hover:to-sky-400 hover:text-white hover:scale-105 shadow-md group"
                    tabIndex={0}
                  >
                    {/* Overlay, but NOT blocking pointer events */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    <span className="relative z-10">Visit</span>
                    <ArrowUpRightIcon className="size-4 relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none transition-all duration-300 hover:scale-105 hover:-translate-y-2 rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Animations using Tailwind CSS, add these to your global.css if not present */}
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        .animate-slide-up {
          animation: slideUp 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animate-pop {
          animation: pop 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes pop {
          0% { transform: scale(0.7); }
          60% { transform: scale(1.1);}
          100% { transform: scale(1);}
        }
      `}</style>
    </section>
  );
};
