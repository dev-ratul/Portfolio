import React from "react";
import { motion } from "framer-motion";
import Particles from "../../../Particles";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative px-6 pt-20  overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          id="about-title"
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-primary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
          {/* Left side - Text */}
          <motion.div
            className="md:w-2/3 text-indigo-200 text-lg md:text-xl leading-relaxed space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              "I started my programming journey a few years ago, driven by a deep curiosity for how technology shapes our world. From learning the basics of HTML, CSS, and JavaScript, I gradually advanced to building full-fledged web applications using modern frameworks like React.",
              "I enjoy creating clean, performant, and user-friendly websites that solve real-world problems. Whether it's crafting interactive UI or optimizing backend logic, I find satisfaction in writing elegant code that delivers great user experiences.",
              "Beyond programming, I have a passion for photography and hiking. Exploring nature gives me fresh perspectives and fuels my creativity, which I often bring back to my coding projects.",
              "I believe in continuous learning and growth, always eager to take on new challenges and improve my skills. My personality is friendly, curious, and dedicated — qualities that reflect in both my professional and personal life.",
            ].map((text, index) => (
              <motion.p
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Right side - Quote */}
          <motion.div
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <blockquote className="relative p-6 max-w-xs text-purple-200 italic text-lg md:text-xl rounded-2xl backdrop-blur-md bg-white/10 border border-purple-400/40 shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
              <span className="absolute -top-3 -left-3 w-6 h-6 bg-purple-400 rounded-full animate-ping"></span>
              &quot;Code is like humor. When you have to explain it, it’s
              bad.&quot; – Cory House
            </blockquote>
          </motion.div>
        </div>
      </div>

      {/* Background gradient + particles */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black  to-black opacity-90" />
        <Particles
          particleColors={["#a78bfa", "#60a5fa", "#ffffff"]}
          particleCount={120}
          particleSpread={15}
          speed={0.2}
          particleBaseSize={80}
          moveParticlesOnHover
        />
      </div>
    </section>
  );
};

export default AboutMe;
