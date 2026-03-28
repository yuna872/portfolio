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
          비즈니스 요구사항을 사용자 친화적인 화면으로 구현하는 프론트엔드
          개발자입니다. React와 React Native를 기반으로 웹과 모바일 서비스를
          개발합니다.
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
