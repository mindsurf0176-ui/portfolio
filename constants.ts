import { Code2, Database, Globe, Smartphone, Server, Cpu, Layers, Zap } from 'lucide-react';
import { Project, Skill } from './types';

export const HERO_TEXT = {
  headline: "GIVING YOUR\nBUSINESS A BRAIN.",
  subheadline: "웹, 앱, AI 솔루션까지.\nNeural Lab은 단순한 기능을 넘어, 비즈니스의 성장을 돕는 지능형 소프트웨어를 개발합니다.",
  cta: "Explore Neural Lab"
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Insight Analytics Pro",
    tech: ["Next.js 14", "TypeScript", "Recharts", "Zustand"],
    description: "복잡한 비즈니스 지표를 0.8초 만에 시각화하는 엔터프라이즈급 대시보드. SSR 최적화로 초기 로딩 73% 단축, 직관적인 차트 인터랙션으로 데이터 분석 효율을 극대화했습니다.",
    result: "로딩 73% 단축",
    image: "",
    demoLink: "#",
    problem: "기존 대시보드는 수만 건의 데이터를 한 번에 로드하여 초기 진입에 3초 이상 소요. 복잡한 UI로 인해 데이터 분석 업무 효율이 저하되는 상황이었습니다.",
    solution: "Next.js SSR과 SWR 캐싱 전략을 도입해 초기 로드 시간을 3초에서 0.8초로 73% 단축. Recharts 커스터마이징으로 복잡한 데이터를 직관적으로 시각화했습니다.",
    features: [
      "SSR + SWR 캐싱 (73% 성능 개선)",
      "실시간 데이터 스트리밍",
      "대용량 테이블 가상화",
      "원클릭 리포트 내보내기"
    ]
  },
  {
    id: 2,
    title: "Coin Verse Exchange",
    tech: ["React", "WebSocket", "Tailwind CSS", "React Query"],
    description: "초당 수십 번 업데이트되는 실시간 시세를 끊김 없이 표시하는 트레이딩 UI. 렌더링 최적화로 CPU 점유율 40% 감소, 모바일까지 완벽 대응하는 반응형 설계.",
    result: "CPU 40% 절감",
    image: "",
    demoLink: "#",
    problem: "초당 수십 번 업데이트되는 시세 데이터를 화면에 반영할 때 심각한 버벅임 발생. 모바일 환경에서는 사용이 거의 불가능한 수준이었습니다.",
    solution: "WebSocket 메시지 Throttling과 React.memo 최적화로 불필요한 리렌더링을 제거, CPU 점유율 40% 감소. 모바일 뷰포트에 최적화된 반응형 레이아웃을 설계했습니다.",
    features: [
      "WebSocket 실시간 호가창",
      "렌더링 최적화 (40% 성능 향상)",
      "모바일 완벽 대응",
      "실시간 손익 계산"
    ]
  },
  {
    id: 3,
    title: "Lumina Commerce",
    tech: ["React", "Framer Motion", "Radix UI", "Stitches"],
    description: "사용자 동작에 즉각 반응하는 마이크로 인터랙션 커머스. 색상 선택 시 배경까지 유기적으로 전환되는 Context-aware 디자인으로 구매 경험을 한 단계 끌어올렸습니다.",
    result: "프리미엄 UX",
    image: "",
    demoLink: "#",
    problem: "정적인 상품 페이지로 인해 사용자 이탈률이 높았고, 색상/디테일 확인을 위한 불필요한 페이지 이동이 구매 전환을 방해하고 있었습니다.",
    solution: "Framer Motion의 Shared Layout Animation으로 페이지 이동 없이 색상/앵글 전환 구현. 장바구니 담기 시 시각적 피드백을 강화해 구매 경험을 개선했습니다.",
    features: [
      "Context-aware 테마 전환",
      "부드러운 장바구니 애니메이션",
      "페이지 이동 없는 상품 탐색",
      "키보드 접근성 지원"
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "UI Engineering", icon: Code2, description: "Pixel-perfect implementation & Component Systems" },
  { name: "Interaction", icon: Zap, description: "Advanced animations with Framer Motion" },
  { name: "React Ecosystem", icon: Layers, description: "Next.js App Router, Server Actions, RSC" },
  { name: "Design System", icon: Smartphone, description: "Scalable Tailwind CSS Architecture" },
  { name: "Type Safety", icon: Database, description: "Strict TypeScript for robust codebases" },
  { name: "3D Web", icon: Globe, description: "Three.js & React Three Fiber experiences" },
  { name: "Performance", icon: Server, description: "Optimization & Caching strategies" },
  { name: "AI Integration", icon: Cpu, description: "LLM-powered Intelligent Interfaces" }
];

export const CONTACT_INFO = {
  email: "mindsurf0176@gmail.com",
  openKakao: "https://open.kakao.com/o/sld6ICbi"
};