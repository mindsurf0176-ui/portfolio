export const translations = {
  ko: {
    nav: {
      projects: "프로젝트",
      tech: "기술 스택",
      apps: "모바일",
      contact: "문의하기"
    },
    hero: {
      headline: "GIVING YOUR\nBUSINESS A BRAIN.",
      subheadline: "웹, 앱, AI 솔루션까지.\nNeural Lab은 단순한 기능을 넘어, 비즈니스의 성장을 돕는 지능형 소프트웨어를 개발합니다.",
      cta: "Neural Lab 둘러보기"
    },
    projects: {
      title: "FEATURED",
      titleHighlight: "PROJECTS",
      subtitle: "실제 비즈니스 문제를 해결한 프로젝트들. 각 프로젝트는 명확한 목표와 측정 가능한 성과를 바탕으로 개발되었습니다.",
      problem: "Problem",
      solution: "Solution",
      tryDemo: "위 브라우저에서",
      tryDemoHighlight: "직접 체험",
      tryDemoSuffix: "해보세요",
      items: [
        {
          title: "Insight Analytics Pro",
          description: "복잡한 비즈니스 지표를 0.8초 만에 시각화하는 엔터프라이즈급 대시보드. SSR 최적화로 초기 로딩 73% 단축, 직관적인 차트 인터랙션으로 데이터 분석 효율을 극대화했습니다.",
          result: "로딩 73% 단축",
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
          title: "Coin Verse Exchange",
          description: "초당 수십 번 업데이트되는 실시간 시세를 끊김 없이 표시하는 트레이딩 UI. 렌더링 최적화로 CPU 점유율 40% 감소, 모바일까지 완벽 대응하는 반응형 설계.",
          result: "CPU 40% 절감",
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
          title: "Lumina Commerce",
          description: "사용자 동작에 즉각 반응하는 마이크로 인터랙션 커머스. 색상 선택 시 배경까지 유기적으로 전환되는 Context-aware 디자인으로 구매 경험을 한 단계 끌어올렸습니다.",
          result: "프리미엄 UX",
          problem: "정적인 상품 페이지로 인해 사용자 이탈률이 높았고, 색상/디테일 확인을 위한 불필요한 페이지 이동이 구매 전환을 방해하고 있었습니다.",
          solution: "Framer Motion의 Shared Layout Animation으로 페이지 이동 없이 색상/앵글 전환 구현. 장바구니 담기 시 시각적 피드백을 강화해 구매 경험을 개선했습니다.",
          features: [
            "Context-aware 테마 전환",
            "부드러운 장바구니 애니메이션",
            "페이지 이동 없는 상품 탐색",
            "키보드 접근성 지원"
          ]
        }
      ]
    },
    tech: {
      title: "NEURAL LAB'S",
      titleHighlight: "BLUEPRINT",
      subtitle: "Neural Lab만의 철학으로 엄선된, 타협 없는 기술 스택. 안정성과 확장성을 동시에 고려한 아키텍처를 설계합니다.",
      frontend: {
        title: "Frontend Ecosystem",
        description: "Next.js와 React를 기반으로 한 컴포넌트 주도 개발(CDD)을 지향합니다. 재사용 가능한 디자인 시스템을 구축하고, Framer Motion으로 생동감 있는 인터랙션을 구현합니다."
      },
      ai: {
        title: "AI Intelligent",
        description: "LLM API(OpenAI, Gemini)를 활용하여 단순한 UI를 넘어선 지능형 인터페이스를 구축합니다. 사용자 의도를 파악하는 AI 에이전트 기능을 통합합니다."
      },
      backend: {
        title: "Backend & DevOps",
        serverless: "Serverless & DB",
        runtime: "Runtime"
      },
      crossPlatform: {
        title: "Cross Platform",
        description: "웹 기술을 활용하여 iOS와 Android 앱까지 확장합니다. React Native와 Flutter를 통해 네이티브 수준의 성능을 구현합니다."
      }
    },
    apps: {
      title: "CROSS-PLATFORM",
      titleHighlight: "MOBILE APPS",
      subtitle: "웹 기술력을 기반으로, iOS와 Android 앱까지 확장합니다. 네이티브 수준의 퍼포먼스와 일관된 사용자 경험을 제공합니다.",
      reactNative: {
        title: "React Native",
        subtitle: "웹 개발자의 강점을 살린 크로스플랫폼",
        description: "React 생태계의 강력한 라이브러리들을 그대로 활용. 웹과 앱 간 코드 공유로 개발 속도와 유지보수 효율을 극대화합니다.",
        features: ["React 생태계 활용", "웹/앱 코드 공유", "빠른 개발 사이클"]
      },
      flutter: {
        title: "Flutter",
        subtitle: "픽셀 단위 커스텀 UI가 필요할 때",
        description: "Google의 위젯 기반 프레임워크로 복잡한 애니메이션과 커스텀 UI를 네이티브 성능으로 구현합니다.",
        features: ["60fps 네이티브 성능", "완전한 UI 커스텀", "빠른 핫 리로드"]
      }
    },
    contact: {
      title: "YOUR VISION,",
      titleHighlight: "NEURAL LAB'S INTELLIGENCE",
      subtitle: "미래의 기술로 비즈니스를 가속화할 준비가 되셨나요?",
      inquiry: "Inquiry",
      inquiryButton: "프로젝트 문의하기",
      email: "Email",
      copyright: "© 2026 Neural Lab. ALL RIGHTS RESERVED."
    }
  },
  en: {
    nav: {
      projects: "Projects",
      tech: "Tech Stack",
      apps: "Mobile",
      contact: "Contact"
    },
    hero: {
      headline: "GIVING YOUR\nBUSINESS A BRAIN.",
      subheadline: "Web, App, and AI Solutions.\nNeural Lab develops intelligent software that drives business growth beyond simple functionality.",
      cta: "Explore Neural Lab"
    },
    projects: {
      title: "FEATURED",
      titleHighlight: "PROJECTS",
      subtitle: "Projects that solve real business problems. Each project was developed with clear objectives and measurable outcomes.",
      problem: "Problem",
      solution: "Solution",
      tryDemo: "Try it yourself in the",
      tryDemoHighlight: "browser above",
      tryDemoSuffix: "",
      items: [
        {
          title: "Insight Analytics Pro",
          description: "Enterprise-grade dashboard that visualizes complex business metrics in 0.8 seconds. SSR optimization reduced initial loading by 73%, maximizing data analysis efficiency with intuitive chart interactions.",
          result: "73% Faster Load",
          problem: "The existing dashboard loaded tens of thousands of data points at once, taking over 3 seconds for initial entry. Complex UI was degrading data analysis efficiency.",
          solution: "Implemented Next.js SSR and SWR caching strategy to reduce initial load time from 3s to 0.8s (73% improvement). Customized Recharts for intuitive data visualization.",
          features: [
            "SSR + SWR Caching (73% improvement)",
            "Real-time Data Streaming",
            "Large Table Virtualization",
            "One-click Report Export"
          ]
        },
        {
          title: "Coin Verse Exchange",
          description: "Trading UI that displays real-time prices updating dozens of times per second without lag. Rendering optimization reduced CPU usage by 40%, with responsive design for mobile.",
          result: "40% CPU Reduction",
          problem: "Severe lag occurred when reflecting price data updating dozens of times per second. Mobile usage was nearly impossible.",
          solution: "Eliminated unnecessary re-renders with WebSocket message throttling and React.memo optimization, reducing CPU usage by 40%. Designed responsive layout optimized for mobile viewports.",
          features: [
            "WebSocket Real-time Order Book",
            "Rendering Optimization (40% improvement)",
            "Full Mobile Support",
            "Real-time P&L Calculation"
          ]
        },
        {
          title: "Lumina Commerce",
          description: "Micro-interaction commerce that responds instantly to user actions. Context-aware design with organic background transitions when selecting colors elevated the shopping experience.",
          result: "Premium UX",
          problem: "High user bounce rate due to static product pages. Unnecessary page navigation for color/detail confirmation was hindering purchase conversion.",
          solution: "Implemented color/angle transitions without page navigation using Framer Motion's Shared Layout Animation. Enhanced visual feedback for add-to-cart actions.",
          features: [
            "Context-aware Theme Switching",
            "Smooth Cart Animations",
            "In-page Product Exploration",
            "Keyboard Accessibility"
          ]
        }
      ]
    },
    tech: {
      title: "NEURAL LAB'S",
      titleHighlight: "BLUEPRINT",
      subtitle: "A curated, uncompromising tech stack with Neural Lab's philosophy. We design architectures that balance stability and scalability.",
      frontend: {
        title: "Frontend Ecosystem",
        description: "We pursue Component-Driven Development (CDD) based on Next.js and React. Building reusable design systems and implementing lively interactions with Framer Motion."
      },
      ai: {
        title: "AI Intelligent",
        description: "Building intelligent interfaces beyond simple UI using LLM APIs (OpenAI, Gemini). Integrating AI agent features that understand user intent."
      },
      backend: {
        title: "Backend & DevOps",
        serverless: "Serverless & DB",
        runtime: "Runtime"
      },
      crossPlatform: {
        title: "Cross Platform",
        description: "Extending to iOS and Android apps using web technologies. Achieving native-level performance through React Native and Flutter."
      }
    },
    apps: {
      title: "CROSS-PLATFORM",
      titleHighlight: "MOBILE APPS",
      subtitle: "Building on our web expertise, we extend to iOS and Android apps. Delivering native-level performance with consistent user experience.",
      reactNative: {
        title: "React Native",
        subtitle: "Cross-platform leveraging web developer strengths",
        description: "Utilize powerful React ecosystem libraries directly. Maximize development speed and maintenance efficiency through web-app code sharing.",
        features: ["React Ecosystem", "Web/App Code Sharing", "Fast Dev Cycle"]
      },
      flutter: {
        title: "Flutter",
        subtitle: "When pixel-perfect custom UI is needed",
        description: "Implement complex animations and custom UI with native performance using Google's widget-based framework.",
        features: ["60fps Native Performance", "Full UI Customization", "Fast Hot Reload"]
      }
    },
    contact: {
      title: "YOUR VISION,",
      titleHighlight: "NEURAL LAB'S INTELLIGENCE",
      subtitle: "Ready to accelerate your business with future technology?",
      inquiry: "Inquiry",
      inquiryButton: "Start a Project",
      email: "Email",
      copyright: "© 2026 Neural Lab. ALL RIGHTS RESERVED."
    }
  }
} as const;

export type Language = 'ko' | 'en';
export type Translations = typeof translations.ko;
