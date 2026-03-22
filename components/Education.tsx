import {
  educations,
  trainingCourses,
  certifications,
  languages,
} from "@/data/education";
import TimelineAccordion from "./TimelineAccordion";

export default function Education() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Education</h2>

        {/* 교육과정 */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4">교육과정</h3>
          <div className="space-y-6">
            {trainingCourses.map((course) => (
              <div key={course.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-medium">{course.name}</h4>
                  <span className="text-sm text-neutral-400 shrink-0">
                    {course.period}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 mt-0.5">
                  {course.description} ({course.hours})
                </p>
                {course.projects && course.projects.length > 0 && (
                  <div className="mt-4 ml-2">
                    <TimelineAccordion
                      items={course.projects.map((project) => ({
                        id: project.title,
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
                        ),
                      }))}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 자격증 & 어학 */}
        <div className="grid sm:grid-cols-2 gap-10 mb-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">자격증</h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span className="text-sm">{cert.name}</span>
                  <span className="text-sm text-neutral-400 shrink-0">
                    {cert.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">어학</h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span className="text-sm">
                    {lang.name} {lang.level}
                  </span>
                  <span className="text-sm text-neutral-400 shrink-0">
                    {lang.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 학력 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">학력</h3>
          <div className="space-y-4">
            {educations.map((edu) => (
              <div key={edu.institution}>
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-medium">{edu.institution}</h4>
                  <span className="text-sm text-neutral-400 shrink-0">
                    {edu.period}
                  </span>
                </div>
                {edu.major && (
                  <p className="text-sm text-neutral-500 mt-0.5">{edu.major}</p>
                )}
                {edu.gpa && (
                  <p className="text-sm text-neutral-400 mt-0.5">
                    GPA {edu.gpa}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
