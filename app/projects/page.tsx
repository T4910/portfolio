import type { Metadata } from "next";
import React from "react";
import { projects, TProject } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-8">
        {(projects as TProject[])
          .sort((a, b) => {
            // Both have priority: sort ascending (1 is highest)
            if (a.priority != null && b.priority != null) {
              return a.priority - b.priority;
            }
            // Only a has priority: a comes first
            if (a.priority != null) return -1;
            // Only b has priority: b comes first
            if (b.priority != null) return 1;
            // Neither has priority: sort by year descending
            return b.year - a.year;
          })
          .map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group hover:opacity-80 transition-opacity duration-200"
            >
              <div className="flex flex-col">
                <div className="w-full flex justify-between items-baseline">
                  <span className="text-black dark:text-white font-medium tracking-tight">
                    {project.title}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                    {project.year}
                  </span>
                </div>
                <p className="prose prose-neutral dark:prose-invert pt-0.5">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
      </div>
    </section>
  );
}
