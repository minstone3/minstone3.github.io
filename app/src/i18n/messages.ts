export type Language = 'ko' | 'en'

export type LinePair = [string, string]

export type Messages = {
  meta: { title: string; description: string }
  nav: {
    homeAria: string
    menuAria: string
    company: string
    solutions: string
    industries: string
    contact: string
    language: string
  }
  home: {
    kicker: string
    title: LinePair
    copy: string
    cta: string
    note: string
    dashboardAria: string
    dashboardAlt: string
  }
  company: {
    title: LinePair
    intro: string
    factoryAlt: string
    values: Array<{ number: string; title: string; description: string; imageAlt: string }>
  }
  solutions: {
    title: LinePair
    intro: string
    items: Array<{ mark: string; title: string; description: string; imageAlt: string }>
    architecture: Array<{ title: string; note: string; imageAlt: string }>
  }
  industries: {
    title: LinePair
    intro: string
    items: Array<{ number: string; title: string; description: string; imageAlt: string }>
    stat: string
    statAlt: string
  }
  contact: {
    kicker: string
    title: LinePair
    copy: string
  }
  footer: { tagline: string }
}

export const messages: Record<Language, Messages> = {
  ko: {
    meta: {
      title: '오아식스 | AI 공간 지능 & 실시간 위치 플랫폼',
      description: 'AI 공간 지능과 cm급 실시간 위치 추적 플랫폼, (주)오아식스',
    },
    nav: {
      homeAria: 'OAXIS 홈',
      menuAria: '주요 메뉴',
      company: '회사소개',
      solutions: '솔루션',
      industries: '산업',
      contact: '파트너십 문의',
      language: '언어 선택',
    },
    home: {
      kicker: 'AI Spatial Intelligence · RTLS Platform',
      title: ['공간을 읽고,', '운영을 바꿉니다.'],
      copy: 'AI 공간 지능 엔진과 cm급 실시간 위치 추적 기술로 사람·자산·재고의 흐름을 실시간으로 가시화하여 완전한 자율 운영 체계를 구축합니다.',
      cta: '플랫폼 살펴보기',
      note: 'OAXIS / 공간 지능 플랫폼',
      dashboardAria: '실시간 공간 모니터링 화면 예시',
      dashboardAlt: '실시간 3D 공간 위치 대시보드',
    },
    company: {
      title: ['현장의 모든 흐름을', '하나의 언어로 연결합니다.'],
      intro: '(주)오아식스는 AI 공간 지능과 실시간 위치 추적을 결합한 공간 플랫폼 전문 기업입니다.',
      factoryAlt: '스마트 팩토리에서 실시간 공간 데이터를 관제하는 OASIX 현장',
      values: [
        {
          number: '01 — PRECISION',
          title: 'cm급 초정밀 위치 추적',
          description: 'AI 딥러닝 보정으로 난반사 환경에서도 10cm 정밀도를 확보합니다.',
          imageAlt: '창고 자산에 부착된 태그와 cm급 위치 좌표 오버레이',
        },
        {
          number: '02 — EFFICIENCY',
          title: '원스톱 하이브리드 인프라',
          description: '통합 인프라로 구축 및 유지 비용을 40% 절감합니다.',
          imageAlt: '천장 앵커와 통합 게이트웨이로 구성된 하이브리드 인프라',
        },
        {
          number: '03 — AUTONOMY',
          title: 'AI 공간 지능화',
          description: '실시간 3D 연산과 최적 동선 도출로 현장 효율을 극대화합니다.',
          imageAlt: 'AI가 도출한 최적 동선을 따라 이동하는 자율 물류 로봇',
        },
      ],
    },
    solutions: {
      title: ['하드웨어부터 AI SaaS까지,', '운영의 전 과정을 설계합니다.'],
      intro: '현장의 데이터를 모으고, 해석하고, 바로 실행할 수 있는 하나의 플랫폼입니다.',
      items: [
        {
          mark: 'A',
          title: 'Spatial Anchor',
          description: '50m 커버리지와 PoE를 지원하는 UWB 앵커 게이트웨이',
          imageAlt: '창고 천장에 설치된 UWB Spatial Anchor 게이트웨이',
        },
        {
          mark: 'T',
          title: 'Spatial Tag',
          description: '10cm 정밀 측위, 4.2" E-paper 디스플레이, 3년+ 배터리 수명',
          imageAlt: 'E-paper 디스플레이가 있는 Spatial Tag',
        },
        {
          mark: 'D',
          title: 'Spatial Dashboard',
          description: 'Stripe LCD를 통한 3D 위치 지도와 터치 제어',
          imageAlt: '3D 위치 지도를 표시하는 Spatial Dashboard',
        },
      ],
      architecture: [
        { title: 'EDGE SERVER', note: '정제 · 연산', imageAlt: '현장 데이터를 정제하고 연산하는 엣지 서버' },
        { title: 'AI CORE', note: '보정 · 동선', imageAlt: '위치 보정과 동선을 계산하는 AI 코어' },
        { title: 'MIDDLEWARE', note: '레거시 연동', imageAlt: 'WMS·MES·ERP와 연동하는 미들웨어' },
        { title: 'ADAPTIVE CLOUD', note: '3D 공간 연산', imageAlt: '3D 공간 연산을 수행하는 어댑티브 클라우드' },
      ],
    },
    industries: {
      title: ['데이터가 필요한', '모든 현장에 적용됩니다.'],
      intro: '정밀한 위치 데이터로 병목을 발견하고, 더 나은 다음 행동을 제안합니다.',
      items: [
        {
          number: '01',
          title: '스마트 물류 & 풀필먼트',
          description: '고밀도 셀 창고 추적 및 피킹 동선 최적화',
          imageAlt: '고밀도 셀 창고에서 피킹 동선이 표시된 스마트 물류 현장',
        },
        {
          number: '02',
          title: '스마트 제조 & 공정 관리',
          description: '재공품 추적과 AGV/AMR 연동으로 병목 방지',
          imageAlt: 'AGV가 재공품을 이송하는 스마트 제조 공정',
        },
        {
          number: '03',
          title: '스마트 리테일 & 헬스케어',
          description: '고객 동선과 중요 의료기기의 실시간 관리',
          imageAlt: '매장 고객 동선과 병원 의료기기를 함께 관제하는 현장',
        },
      ],
      stat: '태그 동시 관제와 100ms 이내 실시간 업데이트로 더 빠른 의사결정을 지원합니다.',
      statAlt: '수천 개 태그를 동시에 관제하는 실시간 관제 화면',
    },
    contact: {
      kicker: 'Partnership / PoC / SI',
      title: ['현장의 다음 장면을', '함께 만들어 보세요.'],
      copy: '스마트 물류·공장 현장 실증부터 WMS/MES/ERP 연동, 글로벌 공동 사업화까지 논의할 수 있습니다.',
    },
    footer: { tagline: 'AI 공간 지능 & 실시간 위치 플랫폼' },
  },
  en: {
    meta: {
      title: 'OAXIS | AI Spatial Intelligence & Real-Time Location Platform',
      description: 'AI spatial intelligence and centimeter-level real-time location platform by OAXIS',
    },
    nav: {
      homeAria: 'OAXIS home',
      menuAria: 'Primary navigation',
      company: 'Company',
      solutions: 'Solutions',
      industries: 'Industries',
      contact: 'Partnership',
      language: 'Language',
    },
    home: {
      kicker: 'AI Spatial Intelligence · RTLS Platform',
      title: ['Read the space,', 'reshape operations.'],
      copy: 'With an AI spatial intelligence engine and centimeter-level real-time location tracking, we visualize the flow of people, assets, and inventory to build a fully autonomous operating system.',
      cta: 'Explore the platform',
      note: 'OAXIS / SPATIAL INTELLIGENCE PLATFORM',
      dashboardAria: 'Example of a live spatial monitoring screen',
      dashboardAlt: 'Live 3D spatial location dashboard',
    },
    company: {
      title: ['We connect every flow on site', 'into one language.'],
      intro: 'OAXIS is a spatial platform company that combines AI spatial intelligence with real-time location tracking.',
      factoryAlt: 'OAXIS operations visualizing live spatial data in a smart factory',
      values: [
        {
          number: '01 — PRECISION',
          title: 'Centimeter-level positioning',
          description: 'AI deep-learning correction holds 10cm accuracy even in high-multipath environments.',
          imageAlt: 'Warehouse assets with tags and centimeter-level coordinate overlays',
        },
        {
          number: '02 — EFFICIENCY',
          title: 'One-stop hybrid infrastructure',
          description: 'A unified infrastructure cuts deployment and maintenance cost by 40%.',
          imageAlt: 'Hybrid infrastructure of ceiling anchors and integrated gateways',
        },
        {
          number: '03 — AUTONOMY',
          title: 'AI spatial intelligence',
          description: 'Real-time 3D compute and optimal pathing maximize on-site efficiency.',
          imageAlt: 'Autonomous logistics robots following AI-optimized routes',
        },
      ],
    },
    solutions: {
      title: ['From hardware to AI SaaS,', 'we design the full operating stack.'],
      intro: 'One platform that collects, interprets, and acts on field data.',
      items: [
        {
          mark: 'A',
          title: 'Spatial Anchor',
          description: 'UWB anchor gateway with 50m coverage and PoE',
          imageAlt: 'UWB Spatial Anchor gateway mounted on a warehouse ceiling',
        },
        {
          mark: 'T',
          title: 'Spatial Tag',
          description: '10cm positioning, 4.2" e-paper display, 3+ year battery life',
          imageAlt: 'Spatial Tag with an e-paper display',
        },
        {
          mark: 'D',
          title: 'Spatial Dashboard',
          description: '3D location map and touch control on a stripe LCD',
          imageAlt: 'Spatial Dashboard showing a 3D location map',
        },
      ],
      architecture: [
        { title: 'EDGE SERVER', note: 'Cleanse · Compute', imageAlt: 'Edge server refining and computing field data' },
        { title: 'AI CORE', note: 'Correct · Route', imageAlt: 'AI core correcting location and computing paths' },
        { title: 'MIDDLEWARE', note: 'Legacy Integration', imageAlt: 'Middleware connecting WMS, MES, and ERP' },
        { title: 'ADAPTIVE CLOUD', note: '3D Spatial Compute', imageAlt: 'Adaptive cloud performing 3D spatial compute' },
      ],
    },
    industries: {
      title: ['Applied wherever', 'operations need data.'],
      intro: 'Precise location data finds bottlenecks and recommends the next better action.',
      items: [
        {
          number: '01',
          title: 'Smart logistics & fulfillment',
          description: 'High-density cell warehouse tracking and picking-path optimization',
          imageAlt: 'Smart logistics site with picking paths in a high-density cell warehouse',
        },
        {
          number: '02',
          title: 'Smart manufacturing & process control',
          description: 'WIP tracking and AGV/AMR integration to prevent bottlenecks',
          imageAlt: 'Smart manufacturing process with AGVs moving work-in-progress',
        },
        {
          number: '03',
          title: 'Smart retail & healthcare',
          description: 'Real-time management of customer flow and critical medical assets',
          imageAlt: 'Retail customer flow and hospital medical-device tracking together',
        },
      ],
      stat: 'Simultaneous control of 10,000+ tags with sub-100ms updates for faster decisions.',
      statAlt: 'Live control screen tracking thousands of tags at once',
    },
    contact: {
      kicker: 'Partnership / PoC / SI',
      title: ['Let’s build the next scene', 'of your operations.'],
      copy: 'We can discuss field PoCs for smart logistics and factories, WMS/MES/ERP integration, and global joint ventures.',
    },
    footer: { tagline: 'AI SPATIAL INTELLIGENCE & REAL-TIME LOCATION PLATFORM' },
  },
}
