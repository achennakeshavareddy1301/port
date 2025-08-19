"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // For animations
import cert1 from "./cert1.png";
import cert2 from "./cert2.png";
import cert3 from "./cert3.png";

// Sample Certificate Data
const certificates = [
  {
    company: "Oracle University",
    year: "2025",
    title: "Oracle Gen AI Foundations",
    description: "Validated foundation in AI and Oracle AI services.",
    image: cert1,
  },
  {
    company: "Take You Forward",
    year: "2023",
    title: "TUF DSA",
    description: "Mastered Data Structures and Algorithms.",
    image: cert2,
  },
  {
    company: "geeksforgeeks",
    year: "2025",
    title: "Ml and data scince",
    description: "Completed a comprehensive course on Machine Learning and Data Science.",
    image: cert3,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          Credentials & Recognition
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mt-4">Certifications</h2>
        <p className="text-white/60 mt-4 max-w-lg mx-auto">
          Highlighting my journey of continuous learning and professional growth.
        </p>
      </div>

      {/* Vertical Timeline for Desktop */}
      <div className="hidden lg:block relative">
        {/* Timeline Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-300 to-sky-400 h-full"></div>

        {/* Certification Cards */}
        <div className="space-y-16">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Connector Dot */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 border-4 border-gray-900 z-10"></div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="w-[45%] bg-gray-800 rounded-3xl p-8 shadow-xl text-white relative z-20"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  className="rounded-xl mb-4 w-full object-cover"
                />
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-white/60 mt-2">{cert.description}</p>
                <p className="text-sm mt-4 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                  {cert.company} &bull; {cert.year}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Scrolling for Small Screens */}
      <div className="lg:hidden relative mt-10">
      <div className="overflow-x-auto flex space-x-4 px-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollBehavior: "smooth" }}>
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg shadow-md flex-shrink-0 snap-center"
              style={{ width: "280px" }}
            >
              {/* Image */}
              <div className="relative w-full h-32 rounded-t-lg overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-bold">{cert.title}</h3>
                <p className="text-xs text-white/60 mt-2">{cert.description}</p>
                <p className="text-xs mt-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                  {cert.company} &bull; {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
