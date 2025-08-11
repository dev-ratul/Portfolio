// import React from "react";
// import { useParams, Link } from "react-router";



// const ProjectDetail = () => {
//   const { id } = useParams();
//   const project = projectsData[id];

//   if (!project) {
//     return (
//       <div className="p-12 text-white">
//         <h2 className="text-3xl font-bold mb-4">Project not found</h2>
//         <Link to="/projects" className="underline text-cyan-400">
//           Back to Projects
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <section className="max-w-4xl mx-auto p-8 text-white">
//       <h1 className="text-5xl font-bold mb-6">{project.name}</h1>
//       <img
//         src={project.image}
//         alt={`${project.name} screenshot`}
//         className="rounded-lg mb-6"
//       />
//       <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
//       <p className="mb-6">{project.techStack}</p>

//       <h2 className="text-2xl font-semibold mb-2">Description</h2>
//       <p className="mb-6">{project.description}</p>

//       <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
//       <p className="mb-6">{project.challenges}</p>

//       <h2 className="text-2xl font-semibold mb-2">Future Plans</h2>
//       <p className="mb-6">{project.futurePlans}</p>

//       <div className="flex space-x-6 mt-10">
//         <a
//           href={project.liveLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-[#0F828C] px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-[#09757b] transition"
//         >
//           Live Project
//         </a>
//         <a
//           href={project.githubLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-gray-800 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-700 transition"
//         >
//           GitHub Repo (Client)
//         </a>
//       </div>

//       <Link to="/projects" className="block mt-10 underline text-cyan-400">
//         ← Back to Projects
//       </Link>
//     </section>
//   );
// };

// export default ProjectDetail;


import React from 'react';

const ProjectDetail = () => {
    return (
        <div>
            hello
        </div>
    );
};

export default ProjectDetail;