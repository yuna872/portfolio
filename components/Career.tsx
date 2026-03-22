import { careers } from "@/data/career";
import TimelineAccordion from "./TimelineAccordion";

export default function Career() {
  return (
    <section id="career" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Career</h2>
        <div className="space-y-12">
          {careers.map((career) => (
            <div key={career.company}>
              <div className="mb-6">
                <h3 className="text-xl font-bold">{career.company}</h3>
                <p className="text-sm text-neutral-500 mt-1">
                  {career.role}
                  {career.department && ` · ${career.department}`} ·{" "}
                  {career.period}
                </p>
              </div>
              <TimelineAccordion
                items={career.projects.map((project) => ({
                  id: `${career.company}-${project.title}`,
                  title: project.title,
                  period: project.period,
                  summary: project.description,
                  content: (
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.details.length > 0 && (
                        <ul className="text-sm text-neutral-600 space-y-1.5">
                          {project.details.map((detail, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-neutral-300">·</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ),
                }))}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
