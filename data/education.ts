import { Project } from "./projects";

export interface Education {
  institution: string;
  period: string;
  major?: string;
  gpa?: string;
  description?: string;
}

export interface Certification {
  name: string;
  date: string;
  issuer: string;
}

export interface Language {
  name: string;
  level: string;
  issuer: string;
}

export interface TrainingCourse {
  name: string;
  period: string;
  hours: string;
  institution: string;
  description: string;
  awards?: string[];
  projects?: Project[];
}

export const educations: Education[] = [
  {
    institution: "전남대학교",
    period: "2016.03 ~ 2021.02",
    major: "산업공학 전공 / 소프트웨어 공학 부전공",
    gpa: "3.62 / 4.5",
  },
];

export const certifications: Certification[] = [
  {
    name: "정보처리기사",
    date: "2023.06",
    issuer: "한국산업인력공단",
  },
  {
    name: "SQLD",
    date: "2022.12",
    issuer: "한국데이터산업진흥원",
  },
];

export const languages: Language[] = [
  {
    name: "OPIc",
    level: "IM2",
    issuer: "2025.03",
  },
];

export const trainingCourses: TrainingCourse[] = [
  {
    name: "삼성 청년 SW 아카데미 (SSAFY)",
    period: "2022.07 ~ 2023.06",
    hours: "1,600시간",
    institution: "삼성전자",
    description: "웹 풀스택 개발 교육과정 수료",
    awards: ["8기 1학기 프로젝트 경진대회 최우수상"],
    projects: [
      {
        title: "말랑연구소",
        period: "2023.04 ~ 2023.05",
        description: "게임 기반 실시간 온라인 브레인스토밍 플랫폼",
        tags: ["Next.js", "TypeScript", "WebSocket", "Redux-Toolkit", "Tailwind CSS"],
        role: "프론트엔드 개발",
        github: "https://github.com/yuna872/Malang-Lab",
        images: [
          "/images/education/Malang-Lab/image-01.png",
          "/images/education/Malang-Lab/main.gif",
          "/images/education/Malang-Lab/lobby.gif",
          "/images/education/Malang-Lab/game.gif",
        ],
        details: [
          "WebSocket + STOMP 기반 실시간 양방향 통신 구현",
          "Context API 기반 소켓 모듈화 및 상태 관리 구조 설계",
          "게임 방 생성 및 라운드 설정 페이지 구현",
          "Navigator.sendBeacon을 활용한 안정적인 퇴장 처리",
          "- 페이지 종료 시 HTTP 요청 중단 문제를 해결",
        ],
      },
      {
        title: "북돋움",
        period: "2023.03 ~ 2023.04",
        description: "빅데이터 기반 도서 추천 및 독서 모임 서비스",
        tags: ["React", "TypeScript", "Styled-Components", "Redux-Toolkit"],
        role: "프론트엔드 개발",
        github: "https://github.com/yuna872/Book-Dodum",
        images: [
          { src: "/images/education/Book-Dodum/image-01.png", type: "mobile" },
          { src: "/images/education/Book-Dodum/image-02.gif", type: "mobile" },
          { src: "/images/education/Book-Dodum/image-03.gif", type: "mobile" },
        ],
        details: [
          "홈 화면 및 사이드바 레이아웃 구현",
          "도서 추천을 위한 설문조사 및 결과 페이지 구현",
          "도서관 정보나루 API 연동 및 소장 정보 모달 구현",
        ],
      },
      {
        title: "ZUM:GO",
        period: "2023.01 ~ 2023.02",
        description: "WebRTC 기반 라이브 중고 거래 플랫폼",
        tags: ["React", "JavaScript", "WebRTC", "WebSocket", "Redux-Toolkit"],
        role: "프론트엔드 개발",
        github: "https://github.com/yuna872/Zumgo",
        images: [
          { src: "/images/education/ZUM:GO/image-01.gif", type: "mobile" },
          { src: "/images/education/ZUM:GO/auction.png", type: "mobile" },
          { src: "/images/education/ZUM:GO/chat.gif", type: "mobile" },
        ],
        details: [
          "홈 화면 및 무한 스크롤 기능 구현",
          "카카오 OAuth 소셜 로그인 구현",
          "WebRTC 기반 실시간 경매 프로세스 구현",
          "WebSocket + STOMP 기반 실시간 채팅 기능 구현",
        ],
      },
      {
        title: "Movie Spotter",
        period: "2022.11",
        description: "Open API와 외부 데이터를 활용한 영화 추천 및 커뮤니티 서비스",
        tags: ["Vue.js", "JavaScript"],
        role: "프론트엔드 개발",
        images: [
          "/images/education/Movie Spotter/image-01.png",
          "/images/education/Movie Spotter/image-02.png",
          "/images/education/Movie Spotter/image-03.png",
        ],
        details: [
          "홈 화면 및 영화 검색 기능 구현",
          "영화 추천 목록 페이지 구현",
          "영화 상세 페이지 구현",
          "마이페이지 구현",
        ],
      },
    ],
  },
  {
    name: "스파르타 코딩클럽",
    period: "2022.01 ~ 2022.02",
    hours: "40시간",
    institution: "스파르타코딩클럽",
    description: "웹 개발 종합반 교육 수강",
    awards: ["메이킹 챌린지 10기 2등 수상"],
    projects: [
      {
        title: "차차정해볼게요",
        period: "2022.02",
        description: "마시는 차 추천 웹 서비스",
        tags: ["HTML/CSS", "JavaScript"],
        role: "프론트엔드 개발",
        details: [
          "차 목록 및 상세 정보 조회 기능 구현",
          "차 정보 필터링 및 검색 기능 구현",
          "찜하기 기능 구현",
          "관리자 차 정보 등록·수정·삭제 기능 구현",
        ],
      },
    ],
  },
];
