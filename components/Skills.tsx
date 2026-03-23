import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  bg: string;
  text: string;
}

const skillCategories: { category: string; skills: Skill[] }[] = [
  {
    category: "Frontend",
    skills: [
      { name: "REACT", icon: SiReact, bg: "#61DAFB", text: "#20232A" },
      { name: "NEXT.JS", icon: SiNextdotjs, bg: "#000000", text: "#FFFFFF" },
      { name: "TYPESCRIPT", icon: SiTypescript, bg: "#3178C6", text: "#FFFFFF" },
      { name: "REACT NATIVE", icon: SiReact, bg: "#282C34", text: "#61DAFB" },
    ],
  },
  {
    category: "Infra",
    skills: [
      { name: "VERCEL", icon: SiVercel, bg: "#000000", text: "#FFFFFF" },
      { name: "NETLIFY", icon: SiNetlify, bg: "#00C7B7", text: "#FFFFFF" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
          Skills
        </h2>
        <div className="space-y-8">
          {skillCategories.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-4 text-center">
                {group.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold tracking-wide"
                    style={{ backgroundColor: skill.bg, color: skill.text }}
                  >
                    <skill.icon className="text-base" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
