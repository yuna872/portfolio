import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
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
              <p className="text-sm text-neutral-500">
                {project.description}
              </p>

              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300">
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
                          className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-500"
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
          ))}
        </div>
      </div>
    </section>
  );
}
