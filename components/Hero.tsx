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
          비즈니스 요구사항을 사용자 친화적인 화면으로 구현하는 프론트엔드
          개발자입니다. React와 React Native를 기반으로 웹과 모바일 서비스를
          개발합니다.
        </p>
      </div>
    </section>
  );
}
