import React from "react";
import { motion } from "framer-motion";
import BlurText from "../../reactBit/BlurText";
import LightRay from "../../../src/reactBit/LightRays";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-scroll";
import Silk from "../../../src/reactBit/Slik";

const HeroSec = () => {
  return (
    <section
      id="/"
      className="relative  flex flex-col md:flex-row items-center justify-center px-6 sm:px-8  pt-40 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black  to-black  md:hidden">
        <Silk
          speed={5}
          scale={1}
          color="#001BB7"
          noiseIntensity={1.5}
          rotation={0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black  to-black hidden md:block">
        <LightRay
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
      </div>

      <div className="">
        {/* Left: Profile Photo */}
        <motion.div
          className="relative z-10 flex-shrink-0 w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[4px] sm:border-[6px] border-indigo-400 shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:shadow-[0_0_60px_rgba(139,92,246,0.8)] transition-all duration-500 group"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="https://i.ibb.co/bRmkw3fw/ratul.jpg"
            alt="Mahmudul Hasan Ratul"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-indigo-500/20 transition-all duration-500"></div>
        </motion.div>

        {/* Contact Icons */}
        <div className="flex justify-center gap-6 mt-6">
          {[
            { icon: <FaWhatsapp />, link: "https://wa.me/8801784773949" },
            { icon: <FaLinkedin />, link: "https://linkedin.com/in/ratul" },
            { icon: <FaGithub />, link: "https://github.com/ratul" },
            { icon: <FaFacebook />, link: "https://www.facebook.com/mh.ratul9999" }, // Facebook link এখানে
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-indigo-400 hover:text-indigo-500 transition-colors duration-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Right: Text Content */}
      <motion.div
        className="relative z-10 mt-8 md:mt-0 md:ml-12 max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          <BlurText
            text="Hi, I'm Mahmudul Hasan Ratul"
            delay={80}
            animateBy="words"
            direction="top"
            className="mb-12 md:text-[#6dd5ed]"
          />
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl font-semibold mb-6 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          MERN Stack Developers
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          I build performant, scalable, and visually stunning web applications
          using React.js, Tailwind CSS, and modern JavaScript. I am passionate
          about writing clean, maintainable code, ensuring accessibility, and
          delivering exceptional user experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-indigo-500/70 hover:scale-105 transform transition-all duration-300"
          >
            Download Resume
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="inline-block cursor-pointer border-2 border-indigo-500 hover:bg-indigo-600 hover:text-white text-indigo-300 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:scale-105 shadow-lg hover:shadow-indigo-400/50 transform transition-all duration-300"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.nav
          className="mt-8 flex justify-center md:justify-start space-x-6 sm:space-x-8 text-indigo-300 text-xl sm:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:rotate-6 transition-transform duration-300"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:rotate-6 transition-transform duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:rotate-6 transition-transform duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </motion.nav>
      </motion.div>
    </section>
  );
};

export default HeroSec;
