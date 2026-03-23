"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project) => {
            const isOpen = openId === project.title;

            return (
              <div
                key={project.title}
                className="rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    {project.category && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          project.category === "개인"
                            ? "bg-neutral-100 text-neutral-500"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {project.category}
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-neutral-400 shrink-0">
                    {project.period}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 mb-4">
                  {project.description}
                </p>

                <button
                  onClick={() => toggle(project.title)}
                  className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-700 transition-colors"
                >
                  {isOpen ? "접기" : "더보기"}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 space-y-3">
                      {project.institution && (
                        <p className="text-sm text-neutral-500">
                          <span className="text-neutral-400">주관기관</span>{" "}
                          {project.institution}
                        </p>
                      )}
                      {project.role && (
                        <p className="text-sm text-neutral-500">
                          <span className="text-neutral-400">수행 역할</span>{" "}
                          {project.role}
                        </p>
                      )}
                      {project.details && project.details.length > 0 && (
                        <ul className="list-disc list-inside space-y-1">
                          {project.details.map((detail) => (
                            <li
                              key={detail}
                              className="text-sm text-neutral-500"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                        >
                          GitHub →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
