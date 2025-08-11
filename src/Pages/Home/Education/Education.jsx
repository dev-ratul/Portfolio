import React from "react";
import { motion } from "framer-motion";
import Particles from "../../../Particles";

const educationData = [
  {
    institute: "Barguna Polytechnic Institute",
    subject: "Computer Science and Technology",
    location: "Barguna, Barishal, Bangladesh",
    details:
      "Focused on practical and theoretical aspects of computer science, including programming, networking, and system analysis. Completed various projects on web development and software design.",
    year: "2022 - 2026",
  },
  {
    institute: "Barguna Polytechnic Institute",
    subject: "Computer Science and Technology",
    location: "Barguna, Barishal, Bangladesh",
    details:
      "Focused on practical and theoretical aspects of computer science, including programming, networking, and system analysis. Completed various projects on web development and software design.",
    year: "2018 - 2022",
  },
  // এখানে যদি আরো এডুকেশন থাকে, তা যোগ করতে পারিস
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative flex flex-col items-center justify-center px-6 py-20 text-white overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black to-black opacity-95">
        <Particles
          particleColors={["#a78bfa", "#60a5fa", "#ffffff"]}
          particleCount={120}
          particleSpread={15}
          speed={0.2}
          particleBaseSize={80}
          moveParticlesOnHover
        />
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-extrabold text-center mb-16 tracking-wide"
      >
        My <span className="bg-gradient-to-r from-[#0F828C] to-[#6dd5ed] bg-clip-text text-transparent">Education</span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl">
        {/* vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-indigo-600 opacity-40"></div>

        {educationData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            className={`mb-16 w-full flex flex-col md:flex-row items-center md:justify-start ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Year */}
            <div className="flex-shrink-0 bg-indigo-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-sm font-semibold shadow-lg px-2 text-center">
              {item.year}
            </div>

            {/* Content Box */}
            <div
              className={`bg-black/40 backdrop-blur-md rounded-lg p-6 max-w-md shadow-lg mt-6 md:mt-0 ${
                idx % 2 === 0 ? "md:ml-10" : "md:mr-10 text-right"
              }`}
            >
              <h3 className="text-2xl font-semibold text-[#0F828C]">{item.institute}</h3>
              <p className="text-indigo-300 font-medium">{item.subject}</p>
              <p className="text-gray-400 italic mt-1">{item.location}</p>
              <p className="mt-4 text-gray-300 leading-relaxed whitespace-pre-line">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
