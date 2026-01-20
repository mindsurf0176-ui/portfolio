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
    },
    demos: {
      dashboard: {
        title: "통합 대시보드",
        revenue: "누적 매출액",
        users: "활성 사용자",
        bounce: "이탈률",
        chartTitle: "매출 추이 분석",
        chartHover: "마우스를 올려 상세 내역을 확인하세요",
        chartSelected: "선택된 구간 매출",
        daily: "일간",
        weekly: "주간",
        today: "오늘",
        last30Days: "최근 30일",
        achievement: "달성"
      },
      fintech: {
        hello: "안녕하세요,",
        user: "User님",
        totalBalance: "Total Balance",
        vsLastMonth: "vs 지난달",
        send: "송금",
        charge: "충전",
        recentTransactions: "최근 내역",
        viewAll: "전체보기",
        sendingInProgress: "송금 진행 중...",
        pleaseWait: "잠시만 기다려주세요",
        sendComplete: "송금 완료",
        today: "오늘",
        yesterday: "어제",
        justNow: "방금",
        buy: "매수",
        sell: "매도",
        insufficientBalance: "잔액이 부족합니다.",
        insufficientHoldings: "보유량이 부족합니다.",
        holdings: "보유 자산 (KRW)",
        coins: {
          BTC: "비트코인",
          ETH: "이더리움",
          SOL: "솔라나",
          XRP: "리플"
        }
      },
      product: {
        bestSeller: "BEST SELLER",
        cart: "장바구니",
        total: "합계",
        checkout: "결제하기",
        addToCart: "장바구니 담기",
        added: "담기 완료",
        addedNotification: "장바구니에 상품이 추가되었습니다.",
        description: "도심 속 라이프스타일을 위한 초경량 백팩. 발수 코팅 처리된 프리미엄 캔버스 소재와 20L의 넉넉한 수납공간.",
        color: "Color"
      },
      delivery: {
        address: "서울시 강남구 테헤란로 427",
        searchPlaceholder: "먹고 싶은 메뉴를 검색해보세요",
        categories: ["버거", "피자", "한식", "디저트", "일식"],
        firstOrderDiscount: "첫 주문 할인",
        allMenuDiscount: "모든 메뉴\n20% 할인",
        getCoupon: "쿠폰 받기",
        recommended: "추천 메뉴",
        viewCart: "장바구니 보기",
        foods: [
          { name: "더블 치즈버거", time: "15-20분" },
          { name: "페퍼로니 피자", time: "25-30분" },
          { name: "아보카도 샐러드", time: "10-15분" },
          { name: "초코 도넛", time: "5-10분" }
        ]
      }
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
      subheadline: "Web, App, and AI Solutions.\nNeural Lab builds intelligent software that goes beyond features—we accelerate business growth.",
      cta: "Explore Neural Lab"
    },
    projects: {
      title: "FEATURED",
      titleHighlight: "PROJECTS",
      subtitle: "Real solutions to real business challenges. Every project is built with measurable outcomes and clear objectives.",
      problem: "Problem",
      solution: "Solution",
      tryDemo: "Try it yourself in the",
      tryDemoHighlight: "browser above",
      tryDemoSuffix: "",
      items: [
        {
          title: "Insight Analytics Pro",
          description: "Enterprise dashboard that renders complex business metrics in 0.8 seconds. SSR optimization slashed initial load times by 73%, while intuitive chart interactions maximize analytical efficiency.",
          result: "73% Faster Load",
          problem: "Legacy dashboard loaded tens of thousands of data points simultaneously, resulting in 3+ second load times. Complex UI hindered efficient data analysis workflows.",
          solution: "Deployed Next.js SSR with SWR caching to cut load time from 3s to 0.8s—a 73% improvement. Custom Recharts implementation delivers intuitive data visualization.",
          features: [
            "SSR + SWR Caching (73% faster)",
            "Real-time Data Streaming",
            "Virtualized Large Tables",
            "One-Click Report Export"
          ]
        },
        {
          title: "Coin Verse Exchange",
          description: "Blazing-fast trading interface handling dozens of price updates per second without lag. Rendering optimizations reduced CPU load by 40% with full mobile responsiveness.",
          result: "40% Less CPU",
          problem: "Price feeds updating dozens of times per second caused severe UI lag. Mobile experience was virtually unusable.",
          solution: "Implemented WebSocket throttling and React.memo optimizations to eliminate unnecessary re-renders, cutting CPU usage by 40%. Responsive layout optimized for mobile trading.",
          features: [
            "WebSocket Live Order Book",
            "Render Optimization (40% faster)",
            "Mobile-First Design",
            "Real-Time P&L Tracking"
          ]
        },
        {
          title: "Lumina Commerce",
          description: "Hyper-responsive e-commerce with micro-interactions that react instantly to user input. Context-aware design seamlessly transitions backgrounds when selecting product colors.",
          result: "Premium UX",
          problem: "Static product pages led to high bounce rates. Clunky navigation for color/detail viewing disrupted purchase flow.",
          solution: "Leveraged Framer Motion's Shared Layout Animation for instant color/angle switching without page reloads. Enhanced add-to-cart feedback for smoother conversions.",
          features: [
            "Context-Aware Theme Switching",
            "Fluid Cart Animations",
            "Zero-Navigation Product Browsing",
            "Full Keyboard Accessibility"
          ]
        }
      ]
    },
    tech: {
      title: "NEURAL LAB'S",
      titleHighlight: "BLUEPRINT",
      subtitle: "Battle-tested technologies chosen with zero compromise. We architect for both rock-solid stability and infinite scalability.",
      frontend: {
        title: "Frontend Ecosystem",
        description: "Component-Driven Development (CDD) powered by Next.js and React. We craft reusable design systems and bring interfaces to life with Framer Motion."
      },
      ai: {
        title: "AI Intelligence",
        description: "Intelligent interfaces powered by LLM APIs (OpenAI, Gemini). We integrate AI agents that truly understand user intent—not just respond to clicks."
      },
      backend: {
        title: "Backend & DevOps",
        serverless: "Serverless & DB",
        runtime: "Runtime"
      },
      crossPlatform: {
        title: "Cross-Platform",
        description: "Web technologies extended to iOS and Android. Native-grade performance through React Native and Flutter—write once, deploy everywhere."
      }
    },
    apps: {
      title: "CROSS-PLATFORM",
      titleHighlight: "MOBILE APPS",
      subtitle: "From web mastery to mobile excellence. Native performance meets consistent UX across iOS and Android.",
      reactNative: {
        title: "React Native",
        subtitle: "Cross-platform built on web expertise",
        description: "Tap into the entire React ecosystem. Share code between web and mobile for lightning-fast development and effortless maintenance.",
        features: ["Full React Ecosystem", "Web/Mobile Code Sharing", "Rapid Development"]
      },
      flutter: {
        title: "Flutter",
        subtitle: "For pixel-perfect custom experiences",
        description: "Google's widget framework delivers complex animations and custom UI at native speeds. Total design freedom without performance trade-offs.",
        features: ["Buttery 60fps", "Unlimited Customization", "Instant Hot Reload"]
      }
    },
    contact: {
      title: "YOUR VISION,",
      titleHighlight: "NEURAL LAB'S INTELLIGENCE",
      subtitle: "Ready to supercharge your business with cutting-edge technology?",
      inquiry: "Inquiry",
      inquiryButton: "Start a Project",
      email: "Email",
      copyright: "© 2026 Neural Lab. ALL RIGHTS RESERVED."
    },
    demos: {
      dashboard: {
        title: "Analytics Dashboard",
        revenue: "Total Revenue",
        users: "Active Users",
        bounce: "Bounce Rate",
        chartTitle: "Revenue Trend Analysis",
        chartHover: "Hover to see detailed metrics",
        chartSelected: "Selected Period Revenue",
        daily: "Daily",
        weekly: "Weekly",
        today: "Today",
        last30Days: "Last 30 Days",
        achievement: "Achievement"
      },
      fintech: {
        hello: "Hello,",
        user: "User",
        totalBalance: "Total Balance",
        vsLastMonth: "vs Last Month",
        send: "Send",
        charge: "Deposit",
        recentTransactions: "Recent Activity",
        viewAll: "View All",
        sendingInProgress: "Sending...",
        pleaseWait: "Please wait",
        sendComplete: "Transfer Complete",
        today: "Today",
        yesterday: "Yesterday",
        justNow: "Just now",
        buy: "Buy",
        sell: "Sell",
        insufficientBalance: "Insufficient balance.",
        insufficientHoldings: "Insufficient holdings.",
        holdings: "Total Assets (KRW)",
        coins: {
          BTC: "Bitcoin",
          ETH: "Ethereum",
          SOL: "Solana",
          XRP: "Ripple"
        }
      },
      product: {
        bestSeller: "BEST SELLER",
        cart: "Cart",
        total: "Total",
        checkout: "Checkout",
        addToCart: "Add to Cart",
        added: "Added",
        addedNotification: "Item added to cart successfully.",
        description: "Ultra-light backpack for urban lifestyle. Premium water-resistant canvas with 20L spacious storage.",
        color: "Color"
      },
      delivery: {
        address: "427 Teheran-ro, Gangnam-gu, Seoul",
        searchPlaceholder: "Search for your favorite food",
        categories: ["Burgers", "Pizza", "Korean", "Desserts", "Japanese"],
        firstOrderDiscount: "First Order",
        allMenuDiscount: "20% OFF\nAll Menu",
        getCoupon: "Get Coupon",
        recommended: "Recommended",
        viewCart: "View Cart",
        foods: [
          { name: "Double Cheeseburger", time: "15-20 min" },
          { name: "Pepperoni Pizza", time: "25-30 min" },
          { name: "Avocado Salad", time: "10-15 min" },
          { name: "Chocolate Donut", time: "5-10 min" }
        ]
      }
    }
  }
} as const;

export type Language = 'ko' | 'en';
export type Translations = typeof translations.ko;
