import { type ProjectImage } from "./career";

export interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  category?: "개인" | "외주";
  github?: string;
  institution?: string;
  role?: string;
  details?: string[];
  images?: (string | ProjectImage)[];
}

export const projects: Project[] = [
  {
    title: "포트폴리오 웹사이트",
    period: "2026.03 ~",
    description: "프론트엔드 개발자 포트폴리오 웹사이트",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "개인",
    github: "https://github.com/yuna872/portfolio",
    role: "1인 개발",
    details: [
      "Next.js 16 + React 19 기반 정적 사이트 구축",
      "Tailwind CSS 4 기반 반응형 디자인",
      "Vercel + GitHub Actions CI/CD 자동 배포",
    ],
  },
  {
    title: "공시온",
    period: "2026.03 ~",
    description: "개인 투자자를 위한 실시간 DART 공시 알림 모바일 서비스",
    tags: ["React Native", "Expo", "NestJS", "Prisma", "PostgreSQL", "Docker"],
    category: "개인",
    role: "1인 개발 (기획·설계·프론트·백엔드·인프라)",
    details: [
      "React Native(Expo) 기반 모바일 앱 개발 (React Query + Zustand)",
      "관심 기업 등록 및 공시 유형·키워드 필터링 알림 설정",
      "DART Open API 연동 및 10분 주기 자동 수집 스케줄러 구현",
      "Kakao OAuth 소셜 로그인 및 JWT 인증 처리",
      "Expo Push Notifications 기반 실시간 푸시 알림",
      "NestJS + Prisma ORM 기반 REST API 설계 및 Swagger 문서화",
    ],
  },
  {
    title: "Osan 스마트 음향 신호기 모니터링 시스템",
    period: "2024.12 ~ 2025.05",
    description: "카카오맵을 활용하여 신호기 상태를 실시간으로 모니터링하고, 센서를 설정 및 관리할 수 있는 통합 시스템",
    tags: ["React", "JavaScript", "Redux-Toolkit", "MUI", "React-Query"],
    category: "외주",
    institution: "우인 미디어 테크",
    role: "프론트엔드 개발 (프론트 1 / 백엔드 1)",
    details: [
      "Figma 기반 UI/UX 설계 및 프론트엔드 아키텍처 설계",
      "Kakao Map API 연동을 통한 신호기 위치·상태 실시간 시각화",
      "센서 설정 관리 기능 구현 (기본 설정, 장비 설정, SSID 설정)",
      "미등록 센서 체계적 관리 및 신호기 상태 이력 필터링·조회 기능 구현",
      "회원 관리 기능 구현 (권한별 접근 제어)",
      "각 기능별 백엔드 REST API 연동",
      "Vercel 배포 및 운영",
    ],
  },
  {
    title: "태즈로스팅 ERP 시스템",
    period: "2024.11 ~ 2025.05",
    description: "라오스 커피 원두 생산·유통·재고·수매 관리 업무의 전산화를 위한 맞춤형 ERP 시스템",
    tags: ["React", "TypeScript", "Vite", "MUI", "React-Query", "i18next"],
    category: "외주",
    institution: "태즈로스팅",
    role: "프론트엔드 개발 · PM (프론트 2 / 백엔드 1)",
    details: [
      "Figma 기반 UI/UX 설계",
      "4단계 역할 기반 접근 제어 (Admin, 부관리자, 이장) 및 동적 네비게이션",
      "승인 요청 워크플로우 (농민·이장·수매·구역 등록 승인/반려)",
      "커피 원두 수매 내역 관리 (날짜·이장별 필터링, 자동 합계 계산)",
      "지역·구역 계층 구조 관리",
      "다국어 지원 (한국어/라오어, i18next)",
      "Google Maps API 연동",
      "Netlify 배포 및 운영",
    ],
  },
];
