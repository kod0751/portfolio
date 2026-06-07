export interface Award {
  title: string;
  organization: string;
  date: string;
  rank: string;
  description: string;
}

export interface Challenge {
  title: string;
  description: string;
  solution: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo?: string;
  figma?: string;
  youtube?: string;
  duration: string;
  team: string;
  statusMessage?: string;
  awards?: Award[];
  longDescription: string;
  architectureImage?: string;
  highlights: string[];
  challenges: Challenge[];
}

export const projects: Project[] = [
  {
    slug: "calmiary",
    title: "Calmiary",
    description: "현대인의 심리적 부담 완화를 위한 고민 기록 및 조언 플랫폼",
    image: "/img/Calmiary.png",
    tech: ["React", "TypeScript", "Styled-Components", "OPENAI"],
    github:
      "https://github.com/prgrms-fe-devcourse/NFE1-1-3-Calmiary?tab=readme-ov-file",
    figma:
      "https://www.figma.com/design/MmGK6YWaN4SwIhipqj52fF/3%EC%B0%A8-2%ED%8C%80_Calminary?node-id=0-1&p=f&t=OgT5lUA0A0osb7Ra-0",
    duration: "2024.10 - 2024.11 (2개월)",
    team: "총 4명 (프론트엔드 4명, 백엔드 1명)",
    statusMessage:
      "서버 비용문제로 현재 오프라인 상태입니다. GitHub에서 코드를 확인하실 수 있습니다.",
    longDescription:
      "Calmiary는 현대인의 심리적 부담을 완화하기 위한 고민 기록 및 조언 플랫폼입니다. 사용자는 자신의 고민을 기록하고, AI 기반 맞춤형 조언을 받을 수 있습니다. 또한, 커뮤니티 기능을 통해 다른 사용자들과 고민을 공유하고, 다이어리 기능으로 일상을 기록할 수 있습니다.",
    architectureImage: "/img/Calminary-IA.png",
    highlights: [
      "React Hook Form 기반 실시간 폼 검증 및 사용자 정보 수정 인터페이스 구현",
      "React Query의 Infinite Query와 Intersection Observer를 활용한 무한 스크롤 게시글 목록 구현",
      "Git Flow 브랜치 전략 수립 및 팀 적용으로 체계적인 개발 워크플로우 구축",
      "Husky를 활용한 Git Hooks 설정으로 커밋 전 자동 린팅/포맷팅 적용",
    ],
    challenges: [
      {
        title: "Husky 기반 Git Hooks를 활용한 코드 품질 자동화",
        description:
          "프로젝트 초기 기획 단계에서 팀원들과 코드 품질 관리 방안 논의",
        solution:
          "Husky를 도입하여 커밋 전 자동으로 ESLint, Prettier 실행되도록 설정 -> 코드 스타일 통일로 팀 전체의 코드 일관성 및 품질 확보",
      },
      {
        title:
          "백엔드 부재 환경에서 데이터 구조 명확화 및 프론트엔드 개발 가속화",
        description:
          "4명의 프론트엔드 개발로 구성되어 백엔드 데이터 구조에 대한 명확한 정의나 API 명세가 부재했습니다.",
        solution:
          "ERD 설계 과정에 적극 참여하여 Python/SQLite 환경에 맞는 데이터 스키마 정립에 기여했습니다. 설계된 스키마를 기반으로 프론트엔드 내 Mock Data 및 TypeScript 인터페이스 설계를 진행하여 프론트엔드 개발 가속화에 기여했습니다.",
      },
    ],
  },
  {
    slug: "quizy",
    title: "Quizy",
    description: "개발자들의 IT 지식 향상을 위한 게임화된 학습 플랫폼",
    image: "/img/Quizy.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Zustand", "React Query"],
    github:
      "https://github.com/prgrms-web-devcourse-final-project/WEB1_1_Endpoint_FE",
    figma:
      "https://www.figma.com/board/b0GOfiYpuendfJwq8Gatbv/%EC%88%8F%ED%8F%BC-%ED%80%B4%EC%A6%88-%ED%94%8C%EB%9E%AB%ED%8F%BC-%ED%99%94%EB%A9%B4-%EC%A0%95%EC%9D%98?node-id=0-1&t=LknFR13XW3xCCK9D-1",
    youtube: "https://www.youtube.com/watch?v=K8iRQxYGXew",
    duration: "2024.11 - 2024.12 (2개월)",
    team: "총 8명 (프론트엔드 4명, 백엔드 4명)",
    statusMessage:
      "서버 비용문제로 현재 오프라인 상태입니다. GitHub에서 코드를 확인하실 수 있습니다.",
    awards: [
      {
        title: "프로그래머스 웹 데브코스 1기 최종 프로젝트",
        organization: "주식회사 그랩",
        date: "2024.12.13",
        rank: "우수상",
        description:
          "프로그래머스 데브코스: 클라우드 기반 프론트엔드×백엔드 데브코스에서 주최된 최종 프로젝트 시연과 발표에서 우수한 성적을 거두어 우수 프로젝트로 선정되었기에 이 상을 수여합니다.",
      },
    ],
    longDescription:
      "Quizy는 개발자들의 IT 지식 향상을 위한 게임화된 학습 플랫폼입니다. 사용자는 다양한 주제의 퀴즈를 풀고, 점수를 획득하며, 리더보드를 통해 다른 사용자들과 경쟁할 수 있습니다.",
    architectureImage: "/img/Quizy-IA.png",
    highlights: [
      "다중 모달 환경에서 발생하는 코드 중복 문제 해결을 위한 커스텀 훅 도입",
      "React Query 기반 사용자 데이터 캐싱 및 실시간 프로필 정보 동기화 구현",
      "React-helmet 활용 SEO 최적화로 Lighthouse 검색엔진 점수 58% 향상",
      "조건부 렌더링과 스켈레톤 UI를 통한 로딩 상태 최적화 및 사용자 경험 개선",
    ],
    challenges: [
      {
        title: "React 기반 프로젝트의 SEO 최적화",
        description:
          "CSR 기반 React 애플리케이션의 정적 메타태그로 인한 페이지별 SEO 최적화 불가",
        solution:
          "react-helmet을 활용해 페이지별 title, description, keywords를 동적으로 관리하고 검색 엔진 친화적 구조로 개선 -> Lighthouse 검색엔진 점수를 62점 → 98점(58% 상승) 으로 끌어올려 검색 노출 및 사용자 접근성 향상",
      },
      {
        title: "백엔드 팀과의 API 설계 협업을 통한 개발 효율성 향상",
        description:
          "오답노트 API 응답 구조가 프론트엔드 UI 요구사항과 불일치하여 개발 중 이슈 발견",
        solution:
          "디스코드를 통해 실시간으로 양 팀 간 커뮤니케이션하며 API 구조 재설계 및 합의 -> 기획된 UI를 수정 없이 구현할 수 있도록 API 스펙 조정, 원활한 기능 개발 완료",
      },
    ],
  },
  {
    slug: "pawhaven",
    title: "발바닥구조대",
    description: "경기도 유기동물 보호 및 입양 지원 플랫폼",
    image: "/img/PawHaven.png",
    tech: [
      "React",
      "Tailwind CSS",
      "Chart.js",
      "Zustand",
      "Vercel",
      "React Query",
    ],
    github: "https://github.com/kod0751/PawHaven",
    duration: "2025.04 - 2025.06 (3개월)",
    team: "개인 프로젝트",
    longDescription:
      "발바닥구조대는 경기도 내 유기동물 보호 및 입양을 지원하는 플랫폼입니다. 사용자는 유기동물 정보를 확인 할 수 있습니다. 또한, 보호소 위치 및 연락처 정보를 제공하여 신속한 구조 활동을 지원합니다.",
    highlights: [
      "공공데이터포털의 경기도 유기동물 데이터를 활용한 실시간 정보 제공",
      "Chart.js를 활용한 유기동물 유형별 통계 시각화",
      "공공 API 데이터를 순차 요청에서 병렬 요청으로 최적화하여 초기 로딩 속도 개선 (약 6.3초 -> 1.2초)",
      "FSD(Feature-Sliced Design) 아키텍처 패턴 적용",
      "React-helmet 활용 SEO 최적화로 Lighthouse 검색엔진 점수 향상 (52점 -> 92점)",
    ],
    challenges: [
      {
        title: "공공 API 데이터 로딩 성능 최적화를 통한 사용자 경험 개선",
        description:
          "약 10,000건의 경기도 유기동물 API 데이터를 for문 기반 순차 요청으로 호출하여 전체 로딩에 6초 이상 소요",
        solution:
          "Promise.all을 활용한 병렬 처리로 동시 요청하도록 API 호출 로직 재설계 -> 초기 로딩 속도를 6.3초 → 1.2초로 단축, 사용자 경험 향상",
      },
      {
        title: "FSD(Feature-Sliced Design) 아키텍처 패턴 적용",
        description:
          "실무 환경의 대규모 프로젝트 구조를 이해하기 위해 FSD(Feature-Sliced Design) 아키텍처 학습",
        solution:
          "프로젝트 규모에 맞춰 Feature, Pages, Shared, Widgets 4개 핵심 레이어를 선별 적용 -> 유지보수성과 확장성을 고려한 폴더 구조 설계 및 코드 관리",
      },
    ],
  },
  {
    slug: "equipguard",
    title: "EquipGuard",
    description: "머신러닝 기반 설비 고장 예측 및 진단 시스템",
    image: "/img/EquipGuard.png",
    tech: [
      "React",
      "TypeScript",
      "React Query",
      "Zod",
      "Random Forest",
      "LightGBM",
    ],
    github: "https://github.com/kod0751/EquipGuard",
    youtube: "https://youtu.be/1bFVwPgaxx8",
    duration: "2025.12 - 2026.01",
    team: "총 2명 (프론트엔드·ML 1명, 백엔드 1명)",
    longDescription:
      "EquipGuard는 제조 현장의 설비 고장을 사전에 예측하여 비용 손실을 방지하는 머신러닝 기반 시스템입니다. 사용자가 입력한 설비 데이터를 2단계 ML 파이프라인(Random Forest → LightGBM)으로 분석하여 고장 확률과 유형을 예측하고, 직관적인 대시보드로 결과를 제공합니다.",
    architectureImage: "/img/EquipGuard-Architecture.png",
    highlights: [
      "데이터 불균형 문제를 2단계 분류(이진→다중) 파이프라인으로 해결하여 모델 성능 개선",
      "React 기반 프론트엔드와 Random Forest/LightGBM ML 모델을 직접 개발하고 API 통합",
      "Feature-based 폴더 구조 설계로 기능별 모듈화 및 유지보수성 향상",
      "Zod 스키마를 통한 런타임 데이터 검증 및 타입 안정성 확보",
    ],
    challenges: [
      {
        title: "불균형 데이터 문제 해결을 위한 2단계 ML 파이프라인 설계",
        description:
          "초기 다중분류 모델이 데이터 불균형으로 인해 대부분을 '정상'으로 판단하는 문제 발생",
        solution:
          "2단계 분류 파이프라인으로 재설계: 1단계에서 Random Forest로 정상/고장 여부를 이진분류하고, 고장으로 판단된 경우에만 2단계 LightGBM으로 고장 유형을 다중분류",
      },
      {
        title: "React Hook Form + Zod를 활용한 복잡한 폼 검증",
        description:
          "설비 데이터 입력 폼에서 다양한 필드(숫자, 범위, 필수값 등)에 대한 실시간 검증과 명확한 에러 메시지 제공이 필요",
        solution:
          "Zod 스키마를 정의하여 런타임 검증과 TypeScript 타입을 동시에 확보하고, React Hook Form과 통합하여 실시간 폼 검증 및 에러 핸들링 구현",
      },
    ],
  },
  {
    slug: "royalty",
    title: "Royalty",
    description: "AI 기반 상표권 보호 및 유사 상표 모니터링 시스템",
    image: "/img/royalty.png",
    tech: [
      "React",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Recharts",
      "Framer Motion",
    ],
    github: "https://github.com/wo2young/Royalty-AI",
    figma:
      "https://www.figma.com/board/60CSVWK1Ux9yNCAGXr4lQl/Untitled?node-id=55--1270&t=pOWOU7VpMyp4trYy-1",
    duration: "2026.01 - 2026.02",
    team: "총 6명 (프론트엔드 담당)",
    awards: [
      {
        title: "심층 데이터 분석을 통한 서비스 솔루션 개발자 과정",
        organization: "휴먼교육센터",
        date: "2026.02.05",
        rank: "최우수상",
        description:
          "본 교육원의 첨단산업 디지털 핵심 실무인재 양성훈련 과정 최종프로젝트 평가에서 매우 우수한 성적을 거두었으므로 이 상장을 수여합니다.",
      },
    ],
    longDescription:
      "Royalty는 기업의 지식재산권을 보호하기 위한 스마트 상표 관리 솔루션입니다. 등록 전 이미지 및 상호 검색을 통해 중복 여부를 사전에 파악하고, 내 브랜드를 등록해두면 실시간으로 유사한 상표의 출원을 감지하여 알림을 제공합니다.",
    architectureImage: "/img/Royalty-IA.png",
    highlights: [
      "MobileNet과 Ko-SBERT를 활용한 이미지+텍스트 멀티모달 유사도 분석 시스템 구축",
      "누적된 AI 분석 이력을 활용하여 이미지·텍스트 유사도 추이를 시각화한 '상표 변천사' 서비스 구축",
      "AI 기반 디자인 도구를 활용하여 직관적이고 현대적인 브랜드 대시보드 UI/UX 설계",
      "서로 다른 데이터 소스를 단일 컴포넌트로 통합하기 위한 데이터 매핑 로직 설계",
    ],
    challenges: [
      {
        title: "Mock Data를 활용한 병렬 개발 및 선제적 UI/UX 검증",
        description:
          "백엔드 API 및 데이터 구조가 확정되기 전까지 프론트엔드 개발이 지연될 수 있는 상황",
        solution:
          "자체 Mock 데이터를 구축하여 API 명세 확정 전 프론트엔드 로직을 독립적으로 구현. 실제 데이터의 길이, 이미지 비율, 분석 결과의 복잡성을 고려한 에지 케이스들을 테스트하며 UI를 선제적으로 수정하여 API 연동 시점에서 발생할 수 있는 레이아웃 이슈를 90% 이상 사전 해결",
      },
      {
        title:
          "실시간 유사도 분석을 위한 모델 최적화: ResNet-50에서 MobileNet으로",
        description:
          "초기 설계 시 높은 정확도를 위해 ResNet-50 모델을 채택했으나, 상표 이미지 검색 시 응답 속도가 실서비스에 부적합할 정도로 느림",
        solution:
          "ResNet-50과 MobileNet v2의 벤치마크를 진행. MobileNet은 ResNet 대비 약 3배 이상의 추론 속도 향상을 보였으며, 정확도 하락은 오차율 5% 미만으로 서비스 허용 범위 내. MobileNet으로 교체하여 실시간에 가까운 분석 속도를 확보",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
