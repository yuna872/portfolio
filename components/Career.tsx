import { careers } from "@/data/career";
import TimelineAccordion from "./TimelineAccordion";
import SkillBadge from "./SkillBadge";

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
                          <SkillBadge key={tag} name={tag} />
                        ))}
                      </div>
                      {project.details.length > 0 && (
                        <ul className="text-sm text-neutral-600 space-y-1.5 mb-4">
                          {project.details.map((detail, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-neutral-300">·</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                      {project.subProjects && project.subProjects.length > 0 && (
                        <div className="space-y-6">
                          {project.subProjects.map((sub) => (
                            <div
                              key={sub.title}
                              className="border-l-2 border-neutral-200 pl-4"
                            >
                              <h4 className="font-semibold text-sm">
                                {sub.title}
                              </h4>
                              <p className="text-xs text-neutral-400 mb-2">
                                {sub.description}
                              </p>
                              {sub.details.length > 0 && (
                                <ul className="text-sm text-neutral-600 space-y-1.5">
                                  {sub.details.map((detail, i) => (
                                    <li key={i} className="flex gap-2">
                                      <span className="text-neutral-300">·</span>
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
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
