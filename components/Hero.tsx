export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <p className="text-sm tracking-widest uppercase text-neutral-400 mb-4">
          Frontend Developer
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
          김유나
        </h1>
        <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed">
          사용자 경험을 중시하는 프론트엔드 개발자입니다. React와 TypeScript를
          기반으로 다양한 웹·모바일 서비스를 개발하고 있으며, 백엔드부터
          배포까지 폭넓은 경험을 갖추고 있습니다.
        </p>
      </div>
    </section>
  );
}
