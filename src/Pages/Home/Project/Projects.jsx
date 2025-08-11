import React from "react";
import { Link } from "react-router"; // <-- এখানে ঠিক কর
import { motion } from "framer-motion";
import Particles from "../../../Particles";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hook/useAxios";
import Loading from "../../../Components/Loading/Loading";


const Projects = () => {
    const axiosInstans= useAxios()

    const {data: projectsData=[], isLoading}= useQuery({
        queryKey:['projects'],
        queryFn: async ()=>{
            const res= await axiosInstans.get('/projects')
            return res.data
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }
    
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center px-6 py-24 text-white overflow-hidden"
      aria-label="Projects section"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10 opacity-30  bg-gradient-to-br from-black to-black opacity-95">
         <Particles
          particleColors={["#a78bfa", "#60a5fa", "#ffffff"]}
          particleCount={120}
          particleSpread={30}
          speed={0.2}
          particleBaseSize={80}
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
              className="w-full md:w-1/2 object-cover h-64 md:h-auto rounded-l-3xl md:rounded-l-3xl md:rounded-r-none rounded-t-3xl md:rounded-t-none"
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

                <Link
                  to={`/projects/${project._id}`}
                  className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 px-10 rounded-xl shadow-lg transition-colors duration-300 text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
