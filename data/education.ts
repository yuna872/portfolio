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
  projects?: Project[];
}

export const educations: Education[] = [
  {
    institution: "전남대학교",
    period: "2017.03 ~ 2023.02",
    major: "산업공학과 / 소프트웨어공학전공 (부전공)",
    gpa: "3.62 / 4.5",
  },
  {
    institution: "광주동신여자고등학교",
    period: "2014.03 ~ 2017.02",
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
    issuer: "ACTFL",
  },
];

export const trainingCourses: TrainingCourse[] = [
  {
    name: "삼성 청년 SW 아카데미 (SSAFY)",
    period: "2022.07 ~ 2023.06",
    hours: "1,600시간",
    institution: "삼성전자",
    description: "웹 풀스택 개발 교육과정 수료",
    projects: [
      {
        title: "Malang-Lab",
        period: "2023.04 ~ 2023.05",
        description: "게임 기반 실시간 온라인 브레인스토밍",
        tags: ["TypeScript"],
        github: "https://github.com/yuna872",
        images: ["/images/education/Malang-Lab/image-01.png"],
      },
      {
        title: "Book-Dodum",
        period: "2023.03 ~ 2023.04",
        description: "빅데이터 기반 도서 추천 & 독서모임",
        tags: ["TypeScript"],
        github: "https://github.com/yuna872",
        images: [
          "/images/education/Book-Dodum/image-01.png",
          "/images/education/Book-Dodum/image-02.gif",
          "/images/education/Book-Dodum/image-03.gif",
        ],
      },
      {
        title: "ZUM:GO",
        period: "2023.01 ~ 2023.02",
        description: "실시간 화상 줌 게임 플랫폼",
        tags: ["React", "JavaScript", "WebRTC", "Websocket", "Redux-Toolkit"],
        github: "https://github.com/yuna872",
        images: ["/images/education/ZUM:GO/image-01.gif"],
      },
      {
        title: "Movie Spotter",
        period: "2022.11",
        description: "영화 검색 및 추천 서비스",
        tags: ["Vue.js", "JavaScript"],
        github: "https://github.com/yuna872",
        images: [
          "/images/education/Movie Spotter/image-01.png",
          "/images/education/Movie Spotter/image-02.png",
          "/images/education/Movie Spotter/image-03.png",
        ],
      },
    ],
  },
  {
    name: "스파르타 코딩클럽",
    period: "2022.01 ~ 2022.02",
    hours: "40시간",
    institution: "스파르타코딩클럽",
    description: "웹개발 종합과정 수료",
    projects: [
      {
        title: "차차정해볼게요",
        period: "2022.02",
        description: "랜덤 메뉴 추천 서비스",
        tags: ["HTML/CSS", "JavaScript"],
        github: "https://github.com/yuna872",
      },
    ],
  },
];
