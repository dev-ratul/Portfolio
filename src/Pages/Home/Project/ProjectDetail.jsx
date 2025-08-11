import React from "react";
import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hook/useAxios";

const ProjectDetail = () => {
  const { id } = useParams();
  console.log(id)
  const axiosInstance = useAxios();

  const { data: project, isLoading, isError } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/projects/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <p className="text-center py-10 text-lg">লোড হচ্ছে...</p>;
  }

  if (isError || !project) {
    return <p className="text-center py-10 text-red-500">ডাটা লোড করা যায়নি!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Project Title */}
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-lg shadow-lg mb-6"
      />

      {/* Tech Stack */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">🛠️ Technology Stack</h2>
        <p className="text-gray-700">{project.techStack}</p>
      </div>

      {/* Description */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">📜 Description</h2>
        <p className="text-gray-700">{project.description}</p>
      </div>

      {/* Live Link */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">🌐 Live Project</h2>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {project.liveLink}
        </a>
      </div>

      {/* GitHub Link */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">💻 GitHub Repository</h2>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {project.githubLink}
        </a>
      </div>

      {/* Challenges */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">⚡ Challenges</h2>
        <p className="text-gray-700">{project.challenges}</p>
      </div>

      {/* Future Plans */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🚀 Future Plans</h2>
        <p className="text-gray-700">{project.futurePlans}</p>
      </div>

      {/* Back Button */}
      <Link
        to="/projects"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        ← Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetail;
