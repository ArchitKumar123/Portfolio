import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa6";

type Props = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  demoUrl,
  githubUrl,
}: Props) => {
  return (
    <div
      className="group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          unoptimized
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="p-6">
        <h3 className="text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
        <p
          className="text-muted-foreground text-sm mb-4"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => {
            return (
              <span
                key={tech}
                className="text-xs p-2 rounded-full bg-indigo-600 text-white font-medium"
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "10px 16px",
                borderRadius: "8px",
                backgroundColor: "#0d9488",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.2s ease",
              }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "10px 16px",
                borderRadius: "8px",
                border: "1px solid #64748b",
                backgroundColor: "transparent",
                color: "inherit",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <FaGithub className="w-4 h-4" />
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
