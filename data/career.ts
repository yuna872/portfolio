export interface SubProject {
  title: string;
  description: string;
  details: string[];
  images?: string[];
}

export interface CompanyProject {
  title: string;
  period: string;
  description: string;
  tags: string[];
  details: string[];
  images?: string[];
  subProjects?: SubProject[];
}

export interface Career {
  company: string;
  role: string;
  department?: string;
  period: string;
  projects: CompanyProject[];
}

export const careers: Career[] = [
  {
    company: "얼라이브러쉬",
    role: "프론트엔드 개발자",
    period: "2025.05 ~",
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
          "/images/career/쪼물락/고객앱/home.png",
          "/images/career/쪼물락/고객앱/shop-detail.png",
          "/images/career/쪼물락/고객앱/quick-booking.png",
          "/images/career/쪼물락/고객앱/therapist-list.png",
          "/images/career/쪼물락/고객앱/nearby-map.png",
        ],
        details: [
          "모바일 앱(iOS/Android/Web 유니버셜), 웹 프론트엔드 개발",
          "크로스 플랫폼 이슈 해결 (Safari 팝업 차단, iOS 스플래시 버그, Android 그림자 렌더링 등 30건+)",
          "httpOnly 세션 기반 인증 마이그레이션 및 CSRF 방어 로직 구현",
          "JWT 토큰 리프레시 동시 요청 Deduplication 패턴 구현",
          "Zustand Persist + Hydration 타이밍 이슈 해결",
          "Firebase FCM 플랫폼별 푸시 알림 통합 (Expo + FCM)",
          "무한 스크롤 구현 (웹: IntersectionObserver, 모바일: useInfiniteQuery)",
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
          "/images/career/쪼물락/가맹점앱/shop-list.png",
          "/images/career/쪼물락/가맹점앱/schedule.png",
          "/images/career/쪼물락/가맹점앱/operation-info.png",
          "/images/career/쪼물락/가맹점앱/course-management-1.png",
          "/images/career/쪼물락/가맹점앱/course-management-2.png",
        ],
        details: [
          "가맹점 관리 모바일 앱 및 어드민 프론트엔드 개발",
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
    projects: [
      {
        title: "Focus CRM",
        period: "2023.07 ~ 2024.11",
        description: "CRM 솔루션 프론트엔드 개발",
        tags: ["React", "TypeScript"],
        details: [],
      },
      {
        title: "AWS re:Invent 랜딩페이지",
        period: "2024.10 ~ 2024.11",
        description: "AWS re:Invent 행사용 랜딩페이지 개발",
        tags: ["React", "TypeScript"],
        details: [],
      },
      {
        title: "CLAS Sales App",
        period: "2024.05 ~ 2024.09",
        description: "영업관리 모바일 앱 개발",
        tags: ["React Native", "TypeScript"],
        details: [],
      },
    ],
  },
];
