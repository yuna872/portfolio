export interface ProjectImage {
  src: string;
  type: "desktop" | "mobile";
}

export interface SubProject {
  title: string;
  description: string;
  details: string[];
  images?: ProjectImage[];
}

export interface CompanyProject {
  title: string;
  period: string;
  description: string;
  tags: string[];
  details: string[];
  images?: ProjectImage[];
  subProjects?: SubProject[];
}

export interface Career {
  company: string;
  role: string;
  department?: string;
  period: string;
  summary?: string;
  projects: CompanyProject[];
}

export const careers: Career[] = [
  {
    company: "얼라이브러쉬",
    role: "프론트엔드 개발자",
    period: "2025.05 ~",
    summary:
      "쪼물락 고객앱·가맹점앱 프론트엔드 개발 (React Native, Next.js)",
    projects: [
      {
        title: "쪼물락 고객앱",
        period: "2025.08 ~",
        description:
          "마사지·에스테틱 예약 플랫폼 고객용 모바일 앱 / 웹 (2026.01 출시, 유지보수 중)",
        tags: [
          "React Native",
          "Expo",
          "Next.js",
          "TypeScript",
          "Zustand",
          "React Query",
          "Firebase FCM",
          "Sentry",
        ],
        images: [
          { src: "/images/career/쪼물락/고객앱/home.png", type: "mobile" },
          { src: "/images/career/쪼물락/고객앱/shop-detail.png", type: "mobile" },
          { src: "/images/career/쪼물락/고객앱/quick-booking.png", type: "mobile" },
          { src: "/images/career/쪼물락/고객앱/therapist-list.png", type: "mobile" },
          { src: "/images/career/쪼물락/고객앱/nearby-map.png", type: "mobile" },
        ],
        details: [
          "모바일 앱(iOS/Android/Web 유니버셜), 웹 프론트엔드 개발",
          "크로스 플랫폼 이슈 해결 (Safari 팝업 차단, iOS 스플래시 버그, Android 그림자 렌더링 등 30건+)",
          "Zustand Persist + Hydration 타이밍 이슈 해결",
          "Firebase FCM 플랫폼별 푸시 알림 통합 (Expo + FCM)",
          "검색/채팅 이벤트 디바운스 및 성능 최적화",
        ],
      },
      {
        title: "쪼물락 가맹점앱",
        period: "2025.05 ~ 2025.07",
        description: "마사지·에스테틱 예약 플랫폼 가맹점 관리 모바일 앱 / 어드민",
        tags: [
          "React Native",
          "Expo",
          "Next.js",
          "TypeScript",
          "Chakra UI",
        ],
        images: [
          { src: "/images/career/쪼물락/가맹점앱/shop-list.png", type: "mobile" },
          { src: "/images/career/쪼물락/가맹점앱/schedule.png", type: "mobile" },
          { src: "/images/career/쪼물락/가맹점앱/reservation-management.png", type: "mobile" },
          { src: "/images/career/쪼물락/가맹점앱/operation-info.png", type: "mobile" },
          { src: "/images/career/쪼물락/가맹점앱/course-management.png", type: "mobile" },
        ],
        details: [
          "가맹점 관리 모바일 앱 및 어드민 프론트엔드 전반 개발",
          "매장·코스·운영정보 등 가맹점 관리 전 화면 CRUD 구현",
          "예약 접수·확정·취소 플로우 및 상태 관리 구현",
          "캘린더 기반 예약 스케줄 관리 UI 구현 (시간대별 슬롯 배정, 일정 충돌 감지)",
          "Tailwind CSS → Chakra UI v3 마이그레이션 (26개 파일)",
        ],
      },
    ],
  },
  {
    company: "TMAX BizAI",
    role: "연구원",
    department: "CRM사업본부",
    period: "2023.07 ~ 2024.11",
    summary:
      "Focus CRM 문의관리 화면 구현, AWS re:Invent 티맥스 랜딩페이지 구현, CLAS Sales App 청구서·문의관리 화면 구현",
    projects: [
      {
        title: "Focus CRM 문의관리 / FAQ",
        period: "2024.05 ~ 2024.09",
        description:
          "기업용 CRM 솔루션의 문의관리 및 FAQ 화면 프론트엔드 개발",
        tags: [
          "React",
          "TypeScript",
          "MobX",
          "MUI",
          "Storybook",
          "React Query",
        ],
        details: [
          "문의관리·FAQ 화면 프론트엔드 개발 담당",
          "다중 조건 필터링·검색 UI 개발",
          "- MobX 스토어 기반으로 설계, React Query 캐싱과 연동",
          "문의 답변·댓글 작성 및 담당자 배정 워크플로우 구현",
          "크로스 클라이언트 호환 HTML 이메일 템플릿 시스템 구축 (Outlook/Gmail 렌더링 대응)",
          "Storybook 기반 공통 컴포넌트 라이브러리 구축 (LNB, GNB, Modal, Toast 등)",
          "- 프론트엔드 팀 전체에서 사용하는 글로벌 컴포넌트 단독 설계·개발",
        ],
        images: [
          { src: "/images/career/tmax/focus-crm/faq-list.png", type: "desktop" },
          { src: "/images/career/tmax/focus-crm/inquiry-detail.png", type: "desktop" },
          { src: "/images/career/tmax/focus-crm/inquiry-list.png", type: "desktop" },
        ],
      },
      {
        title: "AWS re:Invent 티맥스 랜딩페이지",
        period: "2023.11 ~ 2023.12",
        description:
          "AWS re:Invent 행사용 티맥스 그룹 클라우드 상품 소개 랜딩페이지 모바일 웹 개발",
        tags: ["React", "TypeScript", "MUI", "React Query"],
        details: [
          "모바일 버전 랜딩페이지(웹앱) 프론트엔드 개발 담당",
          "클라우드 상품 도입 문의 폼 구현",
          "상품별 브로슈어 다운로드 기능 구현",
          "비디오 플레이어 공통 컴포넌트 구현",
        ],
        images: [
          { src: "/images/career/tmax/reinvent/hero.png", type: "mobile" },
          { src: "/images/career/tmax/reinvent/session-booth.png", type: "mobile" },
          { src: "/images/career/tmax/reinvent/products.png", type: "mobile" },
          { src: "/images/career/tmax/reinvent/inquiry-form.png", type: "mobile" },
        ],
      },
      {
        title: "Focus CLAS Sales App",
        period: "2023.09 ~ 2023.12",
        description:
          "클라우드 소프트웨어 판매 웹 서비스 — 고객이 제품 문의를 남기면 Focus CRM에서 관리자가 처리하는 연동 구조",
        tags: ["React", "TypeScript", "MUI"],
        details: [
          "청구서 및 문의관리 화면 프론트엔드 개발 담당",
          "청구서 목록 조회 및 상세 정보 화면 구현",
          "문의 작성 폼, 목록 필터링, 상세 조회 기능 구현",
        ],
        images: [
          { src: "/images/career/tmax/clas-sales/inquiry-form.png", type: "desktop" },
          { src: "/images/career/tmax/clas-sales/inquiry-detail.png", type: "desktop" },
          { src: "/images/career/tmax/clas-sales/inquiry-list.png", type: "desktop" },
        ],
      },
    ],
  },
];
