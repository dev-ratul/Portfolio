import React from "react";
import { motion } from "framer-motion";
import Particles from "../../../Particles";

const skillsData = [
  { 
    name: "JavaScript", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
    color: "#F7DF1E" 
  },
  { 
    name: "React", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
    color: "#61DAFB" 
  },
  { 
    name: "MongoDB", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
    color: "#4DB33D" 
  },
  { 
    name: "Express.js", 
    logo: "https://i.ibb.co.com/G4c2MFYx/download-2-removebg-preview.png", 
    color: "#ffffff" ,

  },
  { 
    name: "Tailwind", 
    logo: "https://i.ibb.co.com/kgVTCR25/download.png", 
    color: "#38BDF8" 
  },
];


const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center px-6 py-20 text-white overflow-hidden"
    >
      {/* 🔵 Background with Particles */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black  to-black opacity-95">
        <Particles
          particleColors={["#a78bfa", "#60a5fa", "#ffffff"]}
          particleCount={120}
          particleSpread={15}
          speed={0.2}
          particleBaseSize={80}
          moveParticlesOnHover
        />
      </div>

      {/* 🔥 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-extrabold text-center mb-16 tracking-wide"
      >
        My <span className="bg-gradient-to-r from-[#0F828C] to-[#6dd5ed] bg-clip-text text-transparent">Skills</span>
      </motion.h2>

      {/* 🎯 Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-black/30 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(15,130,140,0.6)] transition-all duration-500 cursor-pointer"
          >
            {/* Logo */}
            <motion.img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 mb-4 drop-shadow-lg"
              whileHover={{ rotate: 10, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
            />

            {/* Skill Name */}
            <span
              className="text-lg font-semibold tracking-wide"
              style={{
                color: skill.color,
                textShadow: `0 0 10px ${skill.color}66, 0 0 20px ${skill.color}33`,
              }}
            >
              {skill.name}
            </span>

            {/* Glow Animation */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
              style={{
                background: `radial-gradient(circle at center, ${skill.color}33, transparent 70%)`,
              }}
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
