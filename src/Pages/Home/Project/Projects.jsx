import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "../../../Particles";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hook/useAxios";
import Loading from "../../../Components/Loading/Loading";

const Projects = () => {
  const axiosInstance = useAxios();
  const [selectedProject, setSelectedProject] = useState(null);

  const { data: projectsData = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosInstance.get("/projects");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center px-6 py-24 text-white overflow-hidden"
      aria-label="Projects section"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-gradient-to-br from-black to-black opacity-95">
        <Particles
          particleColors={["#a78bfa", "#60a5fa", "#ffffff"]}
          particleCount={320}
          particleSpread={15}
          speed={0.2}
          particleBaseSize={150}
          moveParticlesOnHover
        />
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-extrabold text-center mb-24 tracking-wide select-none"
      >
        My{" "}
        <span className="bg-gradient-to-r from-[#0F828C] to-[#6dd5ed] bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      {/* Projects List */}
      <div className="flex flex-col space-y-10 max-w-7xl w-full">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
            className={`flex flex-col md:flex-row items-center md:items-stretch md:justify-between bg-gradient-to-r from-[#1c1c1c]/80 to-[#111111]/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-[#0F828C]/40 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            } hover:shadow-[#0F828C]/80 hover:scale-[1.02] transition-transform duration-500 ease-in-out`}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full md:w-1/2 object-cover h-64 md:h-auto"
              loading="lazy"
              draggable={false}
            />

            {/* Content */}
            <div className="p-12 flex flex-col justify-center md:w-1/2 bg-transparent text-white">
              <h3 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#0F828C] to-[#6dd5ed] bg-clip-text text-transparent">
                {project.name}
              </h3>
              <p className="mb-8 text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex space-x-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-10 rounded-xl shadow-lg transition-colors duration-300"
                >
                  View Live
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 px-10 rounded-xl shadow-lg transition-colors duration-300 text-center"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background with particles */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm">
              <Particles
                particleColors={["#0F828C", "#6dd5ed", "#ffffff"]}
                particleCount={280}
                particleSpread={40}
                speed={0.3}
                particleBaseSize={160}
                moveParticlesOnHover
              />
            </div>

            {/* Modal box */}
            <motion.div
              className="relative bg-[#0a0a0a]/90 border border-[#0F828C]/50 rounded-2xl shadow-[0_0_25px_rgba(15,130,140,0.5)] p-8 max-w-3xl w-full overflow-y-auto max-h-[90vh] backdrop-blur-md"
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Title */}
              <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#0F828C] to-[#6dd5ed] bg-clip-text text-transparent">
                {selectedProject.name}
              </h2>
              <p className="mb-6 text-gray-300">
                {selectedProject.description}
              </p>

              {/* Details */}
              <div className="space-y-4 text-gray-200 text-lg">
                <p>
                  <strong className="text-[#6dd5ed]">Main Tech Stack:</strong>{" "}
                  {Array.isArray(selectedProject.techStack)
                    ? selectedProject.techStack.join(", ")
                    : selectedProject.techStack || "Not specified"}
                </p>
                <p>
                  <strong className="text-[#6dd5ed]">Challenges Faced:</strong>{" "}
                  {selectedProject.challenges}
                </p>
                <p>
                  <strong className="text-[#6dd5ed]">
                    Potential Improvements:
                  </strong>{" "}
                  {selectedProject.futurePlans}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#0F828C] to-[#6dd5ed] hover:opacity-90 py-2 px-4 rounded-lg font-semibold shadow-lg transition"
                >
                  Live Project
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-90 py-2 px-4 rounded-lg font-semibold shadow-lg transition"
                >
                  GitHub (Client)
                </a>
              </div>

              {/* Close button */}
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 cursor-pointer right-4 text-gray-400 hover:text-red-500 transition"
                whileHover={{ rotate: 90, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
