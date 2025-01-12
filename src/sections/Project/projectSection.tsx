"use client";

import Image from "next/image";
import React, { JSX } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"; // Adjust the path as necessary
import { projectsData } from "@/assets/data/projectsData"; // Import the updated project data

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  category: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  stats?: {
    tests?: string;
    coverage?: string;
    time?: string;
  };
  featured?: boolean;
}

export default function ProjectsSection(): JSX.Element {
  return (
    <section id="projects" className="p-8 dark:bg-gray-900 text-center space-y-8">
      <h2 className="text-4xl font-bold">Projects</h2>
      <p className="text-lg text-neutral-500 dark:text-neutral-400">
        Hover over the cards to see the magic of 3D effects. Explore my featured projects below.
      </p>

      {/* Enhanced CardContainer */}
      <div className="flex flex-wrap justify-center items-center gap-8 max-w-7xl mx-auto">
        {projectsData.featured.map((project) => (
          <CardContainer
            key={project.id}
            className="inter-var flex flex-col justify-between items-center max-w-sm"
          >
            <CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border shadow-md transition-all hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src={project.imageUrl}
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={`${project.title} thumbnail`}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-6 w-full">
                {project.links.github && (
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="a"
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-neutral-200 dark:bg-neutral-800 hover:opacity-90"
                  >
                    GitHub
                  </CardItem>
                )}
                {project.links.live && (
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="a"
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:opacity-90"
                  >
                    Live Demo
                  </CardItem>
                )}
                {project.links.demo && (
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="a"
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-blue-500 text-white text-xs font-bold hover:bg-blue-600"
                  >
                    Watch Demo
                  </CardItem>
                )}
              </div>
              {project.technologies && (
                <div className="mt-6 text-xs text-neutral-400 dark:text-neutral-500">
                  <p>
                    <strong>Technologies:</strong> {project.technologies.join(", ")}
                  </p>
                </div>
              )}
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
