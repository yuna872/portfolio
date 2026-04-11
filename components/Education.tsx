import ImageGallery from "./ImageGallery";
import {
  educations,
  trainingCourses,
  certifications,
  languages,
} from "@/data/education";
import TimelineAccordion from "./TimelineAccordion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMui,
  SiReactquery,
  SiRedux,
  SiChakraui,
  SiVercel,
  SiGithub,
  SiFigma,
  SiJira,
  SiNotion,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = { name: string; icon: IconType; bg: string; text: string };

const skillCategories: {
  category: string;
  rows: Skill[][];
}[] = [
  {
    category: "Frontend",
    rows: [
      [
        { name: "Javascript", icon: SiJavascript, bg: "#F7DF1E", text: "#323330" },
        { name: "Typescript", icon: SiTypescript, bg: "#3178C6", text: "#FFFFFF" },
        { name: "React", icon: SiReact, bg: "#61DAFB", text: "#20232A" },
        { name: "Next.js", icon: SiNextdotjs, bg: "#000000", text: "#FFFFFF" },
        { name: "React Native", icon: SiReact, bg: "#282C34", text: "#61DAFB" },
        { name: "MUI", icon: SiMui, bg: "#007FFF", text: "#FFFFFF" },
        { name: "Chakra UI", icon: SiChakraui, bg: "#319795", text: "#FFFFFF" },
        { name: "React Query", icon: SiReactquery, bg: "#FF4154", text: "#FFFFFF" },
        { name: "Zustand", icon: SiReact, bg: "#443E38", text: "#F5D77E" },
        { name: "Redux", icon: SiRedux, bg: "#764ABC", text: "#FFFFFF" },
      ],
    ],
  },
  {
    category: "Infra",
    rows: [
      [
        { name: "Vercel", icon: SiVercel, bg: "#000000", text: "#FFFFFF" },
      ],
    ],
  },
  {
    category: "Tools",
    rows: [
      [
        { name: "Github", icon: SiGithub, bg: "#181717", text: "#FFFFFF" },
        { name: "Figma", icon: SiFigma, bg: "#F24E1E", text: "#FFFFFF" },
        { name: "Jira", icon: SiJira, bg: "#0052CC", text: "#FFFFFF" },
        { name: "Notion", icon: SiNotion, bg: "#000000", text: "#FFFFFF" },
      ],
    ],
  },
];

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
                {course.awards && course.awards.length > 0 && (
                  <ul className="mt-1.5 ml-4">
                    {course.awards.map((award) => (
                      <li key={award} className="text-sm text-neutral-400 flex gap-1.5">
                        <span>🏆</span>
                        {award}
                      </li>
                    ))}
                  </ul>
                )}
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
                                  className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-500"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            {project.role && (
                              <p className="text-sm text-neutral-500 mb-3">
                                <span className="text-neutral-400">역할</span>{" "}
                                {project.role}
                              </p>
                            )}
                            {project.details && project.details.length > 0 && (
                              <ul className="text-sm text-neutral-600 space-y-1.5 mb-3">
                                {project.details.map((detail, i) => {
                                  const isSub = detail.startsWith("- ");
                                  return (
                                    <li key={i} className={`flex gap-2${isSub ? " ml-4 text-neutral-400" : ""}`}>
                                      <span className={isSub ? "text-neutral-400" : "text-neutral-500"}>{isSub ? "-" : "·"}</span>
                                      {isSub ? detail.slice(2) : detail}
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                            {project.images && project.images.length > 0 && (
                              <ImageGallery images={project.images} />
                            )}
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

        {/* Skills */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4">Skills</h3>
          <div className="space-y-4">
            {skillCategories.map((group) => (
              <div key={group.category}>
                <p className="text-sm text-neutral-400 mb-2">{group.category}</p>
                <div className="space-y-2">
                  {group.rows.map((row, ri) => (
                    <div key={ri} className="flex flex-wrap gap-2">
                      {row.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium"
                          style={{ backgroundColor: skill.bg, color: skill.text }}
                        >
                          <skill.icon className="text-xs" />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
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
                {/* {edu.gpa && (
                  <p className="text-sm text-neutral-400 mt-0.5">
                    GPA {edu.gpa}
                  </p>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
