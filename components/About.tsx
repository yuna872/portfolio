const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "NestJS",
  "Vercel",
  "Netlify",
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8">About</h2>
        <p className="text-neutral-500 leading-relaxed text-lg mb-10">
          사용자 경험을 중시하는 프론트엔드 개발자입니다. React와 TypeScript를
          기반으로 다양한 웹·모바일 서비스를 개발하고 있으며, 백엔드부터
          배포까지 폭넓은 경험을 갖추고 있습니다.
        </p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 text-sm rounded-full border border-neutral-200 text-neutral-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
