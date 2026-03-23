import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiExpo,
  SiChakraui,
  SiFirebase,
  SiSentry,
  SiVercel,
  SiNetlify,
  SiJavascript,
  SiTailwindcss,
  SiGithubactions,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import type { IconType } from "react-icons";

const skillMap: Record<string, { icon: IconType; bg: string; text: string }> = {
  "React": { icon: SiReact, bg: "#61DAFB", text: "#20232A" },
  "React Native": { icon: TbBrandReactNative, bg: "#282C34", text: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, bg: "#000000", text: "#FFFFFF" },
  "TypeScript": { icon: SiTypescript, bg: "#3178C6", text: "#FFFFFF" },
  "JavaScript": { icon: SiJavascript, bg: "#F7DF1E", text: "#323330" },
  "Expo": { icon: SiExpo, bg: "#000020", text: "#FFFFFF" },
  "Zustand": { icon: SiReact, bg: "#443E38", text: "#F5D77E" },
  "React Query": { icon: SiReact, bg: "#FF4154", text: "#FFFFFF" },
  "Chakra UI": { icon: SiChakraui, bg: "#319795", text: "#FFFFFF" },
  "Firebase FCM": { icon: SiFirebase, bg: "#FFCA28", text: "#1A1A1A" },
  "Firebase": { icon: SiFirebase, bg: "#FFCA28", text: "#1A1A1A" },
  "Sentry": { icon: SiSentry, bg: "#362D59", text: "#FFFFFF" },
  "Vercel": { icon: SiVercel, bg: "#000000", text: "#FFFFFF" },
  "Netlify": { icon: SiNetlify, bg: "#00C7B7", text: "#FFFFFF" },
  "Tailwind CSS": { icon: SiTailwindcss, bg: "#06B6D4", text: "#FFFFFF" },
  "GitHub Actions": { icon: SiGithubactions, bg: "#2088FF", text: "#FFFFFF" },
};

export default function SkillBadge({ name }: { name: string }) {
  const skill = skillMap[name];

  if (!skill) {
    return (
      <span className="text-xs px-2.5 py-1  bg-neutral-100 text-neutral-500">
        {name}
      </span>
    );
  }

  const Icon = skill.icon;

  return (
    <span
      className="inline-flex items-center gap-1 text-xs px-2.5 py-1  font-medium"
      style={{ backgroundColor: skill.bg, color: skill.text }}
    >
      <Icon className="text-xs" />
      {name}
    </span>
  );
}
