import { Code2, Database, Globe, Smartphone, Server, Cpu, Layers, Zap } from 'lucide-react';
import { Project, Skill } from './types';

export const HERO_TEXT = {
  headline: "GIVING YOUR\nBUSINESS A BRAIN.",
  subheadline: "AI 솔루션부터 웹/앱 개발까지.\nNeural Lab은 단순한 기능을 넘어, 비즈니스의 성장을 돕는 지능형 소프트웨어를 개발합니다.",
  cta: "Explore Neural Lab"
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Insight Analytics Pro",
    tech: ["Next.js 14", "TypeScript", "Recharts", "Zustand"],
    description: "복잡한 비즈니스 지표를 0.8초 만에 시각화하는 엔터프라이즈급 대시보드. 대용량 데이터 처리 성능을 최적화하고 심미적인 차트 인터랙션을 구현했습니다.",
    result: "Loading Time 0.8s",
    image: "", // Component rendered
    demoLink: "#",
    problem: "기존 사내 어드민 대시보드는 수만 건의 데이터를 클라이언트에서 한 번에 로드하여 초기 진입 속도가 3초 이상 소요되었으며, 직관적이지 않은 UI로 인해 데이터 분석 업무 효율이 저하되는 문제가 있었습니다.",
    solution: "SWR을 도입하여 데이터 페칭 전략을 개선하고, Next.js의 SSR을 통해 초기 로드 속도를 0.8초로 단축했습니다. 또한, Recharts 라이브러리를 커스터마이징하여 복잡한 데이터를 시각적으로 단순화하고 인터랙티브한 차트를 구현했습니다.",
    features: [
      "Real-time Data Streaming",
      "Draggable Widgets",
      "Table Virtualization",
      "One-click Export (PDF/Excel)"
    ]
  },
  {
    id: 2,
    title: "Coin Verse Exchange",
    tech: ["React", "WebSocket", "Tailwind CSS", "React Query"],
    description: "초단위로 변동하는 시세를 지연(Latency) 없이 처리하는 고성능 트레이딩 UI. 다크 모드 기반의 고밀도 인터페이스에서도 눈의 피로를 최소화하는 컬러 시스템을 설계했습니다.",
    result: "Zero Latency UI",
    image: "", // Component rendered
    demoLink: "#",
    problem: "가상화폐 거래소 특성상 초당 수십 번 업데이트되는 시세 데이터를 성능 저하 없이 UI에 반영해야 했으며, 복잡한 트레이딩 차트와 호가창을 모바일 환경에서도 쾌적하게 사용할 수 있도록 최적화가 필요했습니다.",
    solution: "WebSocket 메시지를 버퍼링하여 렌더링 빈도를 조절(Throttling)함으로써 CPU 점유율을 40% 감소시켰습니다. React.memo와 useMemo를 적극 활용하여 불필요한 컴포넌트 리렌더링을 방지하고, 모바일 뷰포트에 최적화된 반응형 레이아웃을 설계했습니다.",
    features: [
      "WebSocket Real-time Orderbook",
      "TradingView Chart Integration",
      "Responsive Order Interface",
      "Real-time P&L Calculation"
    ]
  },
  {
    id: 3,
    title: "Lumina Commerce",
    tech: ["React", "Framer Motion", "Radix UI", "Stitches"],
    description: "사용자의 미세한 동작에 반응하는 마이크로 인터랙션 커머스. Context-aware 디자인을 통해 색상 옵션 변경 시 배경 분위기가 유기적으로 전환됩니다.",
    result: "Micro-interactions",
    image: "", // Component rendered
    demoLink: "#",
    problem: "단순 이미지 나열식의 상품 페이지는 사용자의 흥미를 유발하지 못해 이탈률이 높았으며, 제품의 다양한 색상과 디테일을 확인하기 위해 불필요한 페이지 이동이 발생하는 불편함이 있었습니다.",
    solution: "Framer Motion을 활용하여 페이지 이동 없이 제품의 색상과 앵글을 부드럽게 전환하는 인터랙션을 구현했습니다. Shared Layout Animation을 적용하여 장바구니 담기 동작 시 시각적인 피드백을 강화하여 구매 경험을 개선했습니다.",
    features: [
      "Context-aware Theme Switching",
      "Cart Interaction Animation",
      "Seamless Image Slider",
      "A11y Keyboard Navigation"
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
  openKakao: "https://open.kakao.com/o/sld6ICbi",
  consultingText: "미래의 기술로 비즈니스를 가속화할 준비가 되셨나요?"
};