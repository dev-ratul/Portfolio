import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Particles from "../../../Particles";

const skillsData = [
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#4DB33D",
  },
  {
    name: "Express.js",
    logo: "https://i.ibb.co/G4c2MFYx/download-2-removebg-preview.png",
    color: "#ffffff",
  },
  {
    name: "Tailwind CSS",
    logo: "https://i.ibb.co/kgVTCR25/download.png",
    color: "#38BDF8",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    color: "#00599C",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
  },
  {
    name: "GitHub",
    logo: "https://i.ibb.co.com/ynCjzs9v/download-3.png",
    color: "#FAA4BD",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "#FFCA28",
  },
  {
    name: "JWT",
    logo: "https://i.ibb.co.com/SD966hHm/download-4.png",
    color: "#F05032",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "#6DE1D2",
  },
];

const skillsProficiency = [
  { name: "JavaScript", percent: 90 },
  { name: "React", percent: 95 },
  { name: "MongoDB", percent: 95 },
  { name: "Express.js", percent: 90 },
  { name: "Tailwind CSS", percent: 95 },
  { name: "Node.js", percent: 90 },
  { name: "Python", percent: 70 },
  { name: "C++", percent: 70 },
  { name: "GitHub", percent: 90 },
  { name: "Firebase", percent: 90 },
  { name: "JWT", percent: 90 },
  { name: "Figma", percent: 90 },
];

const Skills = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  const x1 = useMotionValue(0);
  const x2 = useMotionValue(0);

  const [contentWidth1, setContentWidth1] = useState(0);
  const [contentWidth2, setContentWidth2] = useState(0);

  const speed = 50;

  useEffect(() => {
    if (containerRef1.current)
      setContentWidth1(containerRef1.current.scrollWidth / 2);
  }, []);
  useEffect(() => {
    if (containerRef2.current)
      setContentWidth2(containerRef2.current.scrollWidth / 2);
  }, []);

  useEffect(() => {
    if (contentWidth2 > 0) {
      x2.set(-contentWidth2);
    }
  }, [contentWidth2, x2]);

  useAnimationFrame((t, delta) => {
    let nextX = x1.get() - (speed * delta) / 1000;
    if (contentWidth1 && Math.abs(nextX) > contentWidth1) nextX = 0;
    x1.set(nextX);
  });

  useAnimationFrame((t, delta) => {
    let nextX = x2.get() + (speed * delta) / 1000;
    if (contentWidth2 && nextX >= contentWidth2) {
      nextX = -contentWidth2;
    }
    x2.set(nextX);
  });

  const duplicatedSkills = [...skillsData, ...skillsData];

  // ScrollY দিয়ে opacity control
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const opacity = Math.max(0.1, 1 - scrollY / 300);

  const renderSkillCard = (skill, index) => (
    <motion.div
      key={index}
      className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 shadow-lg cursor-pointer min-w-[140px] flex-shrink-0"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % skillsData.length) * 0.1 }}
      whileHover={{
        scale: 1.07,
        boxShadow: `0 0 25px ${skill.color}aa, 0 0 50px ${skill.color}66`,
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}33, transparent 70%)`,
        }}
      ></div>
      <motion.img
        src={skill.logo}
        alt={skill.name}
        className="w-8 h-8 md:w-16 md:h-16 mb-4 drop-shadow-lg z-10"
        whileHover={{ rotate: 8, scale: 1.15 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
      <span
        className="z-10 text-lg font-semibold tracking-wide"
        style={{
          color: skill.color,
          textShadow: `0 0 10px ${skill.color}66, 0 0 20px ${skill.color}33`,
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );

  useEffect(() => {
    if (contentWidth2 > 0) {
      x2.set(-contentWidth2);
    }
  }, [contentWidth2, x2]);

  return (
    <section
      id="skills"
      className="relative  flex flex-col items-center justify-center px-6 py-20 text-white overflow-hidden"
    >
      <motion.h2
          id="about-title"
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-primary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black to-black opacity-95">
        <Particles
          particleColors={["#0F828C", "#6dd5ed", "#ffffff"]}
          particleCount={250}
          particleSpread={10}
          speed={0.25}
          particleBaseSize={170}
          moveParticlesOnHover
        />
      </div>

      <motion.div
        className="md:w-[1000px] mb-12 relative px-4 sm:px-8"
        style={{ opacity }}
        initial={{ opacity: 1 }}
      >
        {/* Vertical line */}
        <div className="absolute md:left-1/2 left-1/2 top-0 transform md:-translate-x-1/2 h-full border-l-2 border-gray-600"></div>

        {skillsProficiency.map(
          ({ name, percent }, index) => {
            
            const isLeft = index % 2 === 0;
            return (
              <div
                key={name}
                className={`flex w-full mx-auto mb-12 ${
                  isLeft
                    ? "justify-start md:justify-start"
                    : "justify-end md:justify-end"
                }`}
              >
                <div className="md:w-[40%] w-full relative">
                  {/* Circular date badge */}
                  <div
                    className={`absolute top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 text-white font-semibold text-xs flex items-center justify-center shadow-lg
              md:${isLeft ? "-right-6" : "-left-6"} ${!isLeft && "md:mr-0"} ${
                      isLeft ? "left-0 md:left-auto" : "left-0 md:left-auto"
                    }`}
                  >
                    
                  </div>

                  {/* Text content block */}
                  <div
                    className={`bg-black bg-opacity-60 text-white p-4 rounded-md shadow-md mt-12
              ${
                isLeft
                  ? "ml-[3.5rem] text-left md:ml-[3.5rem] md:text-right"
                  : "ml-[3.5rem] text-left md:mr-[3.5rem] md:text-left"
              }`}
                  >
                    <h3 className="font-semibold text-lg mb-1">{name}</h3>
                    

                    {/* Percent progress bar */}
                    <div className="mt-2 rounded-full h-4 overflow-hidden relative bg-white/20 shadow-inner">
                      <motion.div
                        className="bg-gradient-to-r from-[#0F828C] to-[#6dd5ed] h-4 rounded-full shadow-md"
                        initial={{ width: 0 }}
                        animate={{ width: `${percent}%` }}
                        transition={{ duration: 1.5 }}
                      />
                      <span
                        className={`absolute top-0.5 text-xs font-semibold text-white select-none ${
                          isLeft ? "left-3" : "right-3"
                        }`}
                      >
                        {percent}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </motion.div>

      {/* প্রথম স্ক্রলার: right থেকে left */}
      <div
        ref={containerRef1}
        className="w-full overflow-hidden mb-12"
        aria-label="Scrolling skills right to left"
      >
        <motion.div className="flex gap-8" style={{ x: x1 }}>
          {duplicatedSkills.map(renderSkillCard)}
        </motion.div>
      </div>

      {/* দ্বিতীয় স্ক্রলার: left থেকে right */}
      <div
        ref={containerRef2}
        className="w-full overflow-hidden"
        aria-label="Scrolling skills left to right"
      >
        <motion.div className="flex gap-8" style={{ x: x2 }}>
          {duplicatedSkills.map(renderSkillCard)}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
