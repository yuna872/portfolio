export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    title: "blinker-front",
    description: "경기 오산시 신호기 모니터링 시스템",
    tags: ["React", "TypeScript"],
    github: "https://github.com/yuna872",
  },
  {
    title: "dart-notification",
    description: "실시간 DART 공시 알림 서비스",
    tags: ["React Native", "NestJS", "PostgreSQL"],
    github: "https://github.com/yuna872",
  },
  {
    title: "coffee-frontend",
    description: "커피 관련 프론트엔드 (Google Maps, i18n)",
    tags: ["React", "Vite", "MUI"],
    github: "https://github.com/yuna872",
  },
  {
    title: "AliveRush",
    description: "백엔드 마이크로서비스 (결제/정산)",
    tags: ["NestJS", "TypeORM", "Redis"],
    github: "https://github.com/yuna872",
  },
  {
    title: "Malang-Lab",
    description: "게임 기반 실시간 온라인 브레인스토밍",
    tags: ["TypeScript"],
    github: "https://github.com/yuna872",
  },
  {
    title: "Book-Dodum",
    description: "빅데이터 기반 도서 추천 & 독서모임",
    tags: ["TypeScript"],
    github: "https://github.com/yuna872",
  },
];
