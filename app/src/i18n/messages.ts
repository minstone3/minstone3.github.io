export type Language = 'ko' | 'en'

export type LinePair = [string, string]

export type Messages = {
  meta: { title: string; description: string }
  nav: {
    homeAria: string
    menuAria: string
    company: string
    products: string
    productsMenuAria: string
    hardware: string
    software: string
    technology: string
    solutions: string
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
  products: {
    kicker: string
    title: string
    hardware: string
    software: {
      kicker: string
      title: string
      intro: string
      layers: {
        legacy: { title: string; imageAlt: string; items: string[] }
        ui: { title: string; imageAlt: string; items: string[] }
        core: { title: string; imageAlt: string; items: Array<{ name: string; tone?: 'core' | 'api' }> }
        database: { title: string; name: string; note: string; imageAlt: string }
        field: { title: string; mobileAlt: string; items: string[] }
      }
      detail: {
        kicker: string
        title: string
        lead: string
        items: Array<{ number: string; title: string; description: string }>
      }
    }
    items: Array<{
      id: string
      mark: string
      title: string
      imageAlt: string
      specs: Array<{ label: string; value: string }>
    }>
  }
  technology: {
    title: LinePair
    intro: string
    overview: [string, string]
    pillars: [string, string, string]
    architecture: Array<{ title: string; note: string; imageAlt: string }>
    diff: {
      kicker: string
      title: string
      intro: string
      items: Array<{ title: string; description: string; imageAlt: string }>
    }
  }
  solutions: {
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
      products: '제품',
      productsMenuAria: '제품 목록',
      hardware: 'Hardware',
      software: 'Software',
      technology: '기술',
      solutions: '솔루션',
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
      factoryAlt: '창고 현장을 바라보며 실시간 위치 지도를 관제하는 오아식스 관제실',
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
    products: {
      kicker: 'HARDWARE SPECS',
      title: '하드웨어 상세 사양 및 주요 명세',
      hardware: 'Hardware',
      software: {
        kicker: 'SOFTWARE ARCHITECTURE',
        title: '플랫폼 소프트웨어 아키텍처',
        intro: '현장 하드웨어부터 레거시 시스템까지, 위치 데이터를 수집·해석·연동하는 하나의 소프트웨어 스택입니다.',
        layers: {
          legacy: {
            title: 'Legacy System & External Integration',
            imageAlt: 'WMS·ERP·MES·AGV 관제 화면이 연결된 레거시 연동 환경',
            items: [
              'WMS / ERP (SAP, Oracle)',
              'MES / Smart Factory Core',
              'AGV / AMR Robot Control',
              'Legacy Integration Adapter',
            ],
          },
          ui: {
            title: 'User-Friendly UI',
            imageAlt: '3D 공간 지도와 모바일·관리자 UI가 함께 보이는 관제 화면',
            items: ['3D Spatial Map UI', 'Mobile PDA App', 'Admin Portal UI'],
          },
          core: {
            title: 'Core API Gateways & Processing Engines',
            imageAlt: 'Adaptive RTLS 엔진과 API가 위치 데이터를 처리하는 코어',
            items: [
              { name: 'Adaptive RTLS Engine (AI)', tone: 'core' },
              { name: 'Tag Management' },
              { name: 'GW Ingress API (Raw)', tone: 'api' },
              { name: 'Signage Management' },
              { name: 'Error / Log Report' },
              { name: 'Frontend / Mobile API', tone: 'api' },
            ],
          },
          database: {
            title: 'Database',
            name: 'MongoDB Cluster',
            note: 'Tag Docs & 3D Logs',
            imageAlt: '태그 문서와 3D 로그를 저장하는 MongoDB 클러스터',
          },
          field: {
            title: 'Field Hardware & Ingress',
            mobileAlt: '현장용 Android PDA에서 위치 정보를 확인하는 화면',
            items: [
              'Spatial Anchors',
              'Spatial Tags',
              'Spatial Dashboard',
              'Android Devices',
            ],
          },
        },
        detail: {
          kicker: 'SOFTWARE PIPELINE',
          title: '위치 데이터가 좌표가 되고, 운영 지시가 됩니다.',
          lead: '오아식스 소프트웨어는 Spatial Anchor·Tag·Dashboard에서 들어오는 UWB ranging 패킷을 Adaptive RTLS 엔진으로 좌표화하고, 3D 관제·현장 표시·레거시 연동까지 하나의 API 파이프라인으로 처리합니다. 하드웨어와 소프트웨어가 같은 아키텍처를 공유하므로 위치 데이터가 관제 화면에 머무르지 않고 작업 지시로 이어집니다.',
          items: [
            {
              number: '01',
              title: 'Field Hardware & Ingress',
              description:
                '앵커가 태그의 UWB 신호를 수신하고, Gateway Ingress API가 raw ranging·배터리·상태 패킷을 코어로 전달합니다. Spatial Dashboard와 Android PDA는 같은 입출력 경로에서 현장 표시와 작업 입력을 수행합니다.',
            },
            {
              number: '02',
              title: 'Adaptive RTLS Engine',
              description:
                'AI 딥러닝 신호 보정이 NLOS·철제 난반사 오차를 줄여 센티미터급 좌표를 산출합니다. Tag Management와 Signage Management가 태그 수명·점등·E-paper 콘텐츠를 제어하고, Error/Log Report가 이상 이벤트를 기록합니다.',
            },
            {
              number: '03',
              title: 'MongoDB Cluster',
              description:
                '태그 문서, 3D 동선 로그, 이벤트 이력을 문서형으로 저장해 실시간 조회와 이력 재생을 지원합니다. Frontend/Mobile API가 동일 데이터 모델을 관제·PDA·현장 디스플레이에 제공합니다.',
            },
            {
              number: '04',
              title: '3D Map · Admin · Mobile UI',
              description:
                '3D Spatial Map UI에서 실시간 위치를 시각화하고, Admin Portal에서 장치·권한·맵을 설정하며, Mobile PDA App으로 현장에서 조회와 작업을 수행합니다. 역할별로 인터페이스를 분리해 관제와 현장 실행을 동시에 유지합니다.',
            },
            {
              number: '05',
              title: 'Legacy Integration Adapter',
              description:
                '위치 이벤트와 작업 상태를 WMS/ERP(SAP, Oracle), MES, AGV/AMR 관제에 전달합니다. 기존 운영 시스템을 교체하지 않고 위치 데이터를 입고·공정·이송 흐름에 연결합니다.',
            },
          ],
        },
      },
      items: [
        {
          id: 'anchor',
          mark: 'A',
          title: 'Spatial Anchor',
          imageAlt: '안테나가 있는 Spatial Anchor 게이트웨이',
          specs: [
            { label: '무선 규격', value: 'UWB (IEEE 802.15.4z), 2.4GHz (IEEE 802.15.4)' },
            { label: '수신 범위', value: '반경 50m 이상' },
            { label: '전원 방식', value: 'PoE / DC 12V' },
            { label: '설치 형태', value: '천장 / 벽면' },
          ],
        },
        {
          id: 'tag',
          mark: 'T',
          title: 'Spatial Tag',
          imageAlt: '생산품명·공정·수량·작업지시·담당자가 표시된 4색 Spatial Tag E-paper',
          specs: [
            { label: '측위 정밀도', value: '10cm 이내' },
            { label: '디스플레이', value: '4.2" 4색 E-paper (흑·백·적·황)' },
            { label: '배터리 수명', value: 'AI 슬립 모드 3년+' },
            { label: '부가 기능', value: 'USB-C, 다기능버튼' },
          ],
        },
        {
          id: 'dashboard',
          mark: 'D',
          title: 'Spatial Dashboard',
          imageAlt: '3D 공간 지도를 표시하는 Spatial Dashboard',
          specs: [
            { label: '해상도/화면', value: 'Wide Stripe LCD /w touch' },
            { label: '인터페이스', value: 'Ethernet / Wi-Fi' },
            { label: '구동 기능', value: '3D 지도, 태그 제어' },
            { label: '장착 환경', value: '선반/랙 전면 설치' },
          ],
        },
      ],
    },
    technology: {
      title: ['엣지부터 클라우드까지,', '운영 아키텍처를 설계합니다.'],
      intro: '현장의 데이터를 모으고, 해석하고, 바로 실행할 수 있는 하나의 플랫폼입니다.',
      overview: [
        '실시간 위치 측위 시스템(RTLS)은 태그·앵커 하드웨어, 좌표를 산출하고 시각화하는 소프트웨어, 그리고 현장 인프라가 하나의 체계로 동작할 때 완성됩니다. 오아식스는 이 세 요소를 자체 기술로 설계·연동합니다. 위치 추적이 필요한 공간에 태그를 부착하고 주요 지점에 Spatial Anchor를 배치하면, 신호 송수신부터 좌표 계산·화면 표시까지 자사 스택 안에서 처리됩니다.',
        '핵심은 초광대역(UWB) 기반의 정밀 측위 엔진입니다. 넓은 주파수 대역의 짧은 펄스로 전파 도착 시각(ToA)과 시각 차(TDoA)를 측정하고, 다중 Spatial Anchor 시각 동기와 오차 보정을 적용해 실내에서도 센티미터 수준의 위치를 안정적으로 제공합니다.',
      ],
      pillars: ['Hardware', 'Software', 'Infrastructure'],
      architecture: [
        { title: 'EDGE SERVER', note: '정제 · 연산', imageAlt: '현장 데이터를 정제하고 연산하는 엣지 서버' },
        { title: 'AI CORE', note: '보정 · 동선', imageAlt: '위치 보정과 동선을 계산하는 AI 코어' },
        { title: 'MIDDLEWARE', note: '레거시 연동', imageAlt: 'WMS·MES·ERP와 연동하는 미들웨어' },
        { title: 'ADAPTIVE CLOUD', note: '3D 공간 연산', imageAlt: '3D 공간 연산을 수행하는 어댑티브 클라우드' },
      ],
      diff: {
        kicker: 'Differentiation',
        title: '차별화',
        intro: '비콘·RFID 및 일반 UWB RTLS 대비 오아식스만의 세 가지 경쟁 우위',
        items: [
          {
            title: '정밀도 · NLOS 대응',
            description:
              '비콘/RFID는 존(zone) 단위 인식에 머물고, 일반 UWB는 철제 난반사 환경에서 오차가 커집니다. 오아식스는 AI 딥러닝 신호 보정을 더해 가혹한 현장에서도 10cm급 정밀도를 유지합니다.',
            imageAlt: '창고 통로에서 10cm급 위치 핀이 표시된 정밀 측위 장면',
          },
          {
            title: '원스톱 통합 공급',
            description:
              '측위 하드웨어와 소프트웨어를 서로 다른 벤더에서 조합하면 연동 비용과 책임 소재 문제가 생깁니다. 앵커·태그·디스플레이·AI 플랫폼을 단일 아키텍처로 공급해 구축과 유지 부담을 줄입니다.',
            imageAlt: '앵커·태그·디스플레이가 하나의 플랫폼으로 연결된 구성',
          },
          {
            title: '현장 표시 · 실행 연결',
            description:
              '대부분의 RTLS는 위치를 관제 화면에만 보여줍니다. E-paper Spatial Tag와 Spatial Dashboard가 현장에서 직접 정보를 표시하고 점등 제어까지 수행해 위치 데이터가 곧바로 작업 지시로 이어집니다.',
            imageAlt: '선반의 E-paper 태그와 Spatial Dashboard로 작업 지시를 확인하는 현장',
          },
        ],
      },
    },
    solutions: {
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
      products: 'Products',
      productsMenuAria: 'Product list',
      hardware: 'Hardware',
      software: 'Software',
      technology: 'Technology',
      solutions: 'Solutions',
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
      factoryAlt: 'OAXIS control room monitoring a live indoor location map overlooking the warehouse',
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
    products: {
      kicker: 'HARDWARE SPECS',
      title: 'Hardware specifications',
      hardware: 'Hardware',
      software: {
        kicker: 'SOFTWARE ARCHITECTURE',
        title: 'Platform software architecture',
        intro: 'One software stack that collects, interprets, and connects location data from field hardware through to legacy systems.',
        layers: {
          legacy: {
            title: 'Legacy System & External Integration',
            imageAlt: 'Legacy integration environment with WMS, ERP, MES, and AGV control screens',
            items: [
              'WMS / ERP (SAP, Oracle)',
              'MES / Smart Factory Core',
              'AGV / AMR Robot Control',
              'Legacy Integration Adapter',
            ],
          },
          ui: {
            title: 'User-Friendly UI',
            imageAlt: '3D spatial map with mobile and admin portal UI',
            items: ['3D Spatial Map UI', 'Mobile PDA App', 'Admin Portal UI'],
          },
          core: {
            title: 'Core API Gateways & Processing Engines',
            imageAlt: 'Adaptive RTLS engine and APIs processing location data',
            items: [
              { name: 'Adaptive RTLS Engine (AI)', tone: 'core' },
              { name: 'Tag Management' },
              { name: 'GW Ingress API (Raw)', tone: 'api' },
              { name: 'Signage Management' },
              { name: 'Error / Log Report' },
              { name: 'Frontend / Mobile API', tone: 'api' },
            ],
          },
          database: {
            title: 'Database',
            name: 'MongoDB Cluster',
            note: 'Tag Docs & 3D Logs',
            imageAlt: 'MongoDB cluster storing tag documents and 3D logs',
          },
          field: {
            title: 'Field Hardware & Ingress',
            mobileAlt: 'Android PDA showing live location data on the warehouse floor',
            items: [
              'Spatial Anchors',
              'Spatial Tags',
              'Spatial Dashboard',
              'Android Devices',
            ],
          },
        },
        detail: {
          kicker: 'SOFTWARE PIPELINE',
          title: 'Location data becomes coordinates, then work instructions.',
          lead: 'OAXIS software turns UWB ranging packets from Spatial Anchors, Tags, and Dashboards into coordinates through the Adaptive RTLS engine, then carries them through 3D monitoring, on-site display, and legacy integration as one API pipeline. Hardware and software share the same architecture, so location data does not stop on a control screen.',
          items: [
            {
              number: '01',
              title: 'Field Hardware & Ingress',
              description:
                'Anchors receive UWB signals from tags, and the Gateway Ingress API forwards raw ranging, battery, and status packets to the core. Spatial Dashboards and Android PDAs use the same path for on-site display and operator input.',
            },
            {
              number: '02',
              title: 'Adaptive RTLS Engine',
              description:
                'AI deep-learning signal correction reduces NLOS and metal-multipath error to produce centimeter-level coordinates. Tag Management and Signage Management control battery life, lighting, and e-paper content, while Error/Log Report records anomalies.',
            },
            {
              number: '03',
              title: 'MongoDB Cluster',
              description:
                'Tag documents, 3D path logs, and event history are stored as documents for live lookup and playback. The Frontend/Mobile API serves the same data model to monitoring, PDA, and field displays.',
            },
            {
              number: '04',
              title: '3D Map · Admin · Mobile UI',
              description:
                'The 3D Spatial Map UI visualizes live positions, the Admin Portal configures devices, permissions, and maps, and the Mobile PDA App handles lookup and work on the floor. Separate interfaces keep monitoring and execution running together.',
            },
            {
              number: '05',
              title: 'Legacy Integration Adapter',
              description:
                'Location events and work status are handed to WMS/ERP (SAP, Oracle), MES, and AGV/AMR control. Existing operations stay in place while location data connects inbound, process, and transfer flows.',
            },
          ],
        },
      },
      items: [
        {
          id: 'anchor',
          mark: 'A',
          title: 'Spatial Anchor',
          imageAlt: 'Spatial Anchor gateway with dual antennas',
          specs: [
            { label: 'Wireless', value: 'UWB (IEEE 802.15.4z), 2.4GHz (IEEE 802.15.4)' },
            { label: 'Range', value: '50m+ radius' },
            { label: 'Power', value: 'PoE / DC 12V' },
            { label: 'Mounting', value: 'Ceiling / Wall' },
          ],
        },
        {
          id: 'tag',
          mark: 'T',
          title: 'Spatial Tag',
          imageAlt: '4-color Spatial Tag e-paper showing product, process, quantity, and operator info',
          specs: [
            { label: 'Accuracy', value: 'Within 10cm' },
            { label: 'Display', value: '4.2" 4-color e-paper (B/W/R/Y)' },
            { label: 'Battery', value: 'AI sleep mode, 3+ years' },
            { label: 'Features', value: 'USB-C, multi-function button' },
          ],
        },
        {
          id: 'dashboard',
          mark: 'D',
          title: 'Spatial Dashboard',
          imageAlt: 'Spatial Dashboard showing a 3D facility map',
          specs: [
            { label: 'Display', value: 'Wide Stripe LCD /w touch' },
            { label: 'Interface', value: 'Ethernet / Wi-Fi' },
            { label: 'Functions', value: '3D map, tag control' },
            { label: 'Mounting', value: 'Shelf / rack front install' },
          ],
        },
      ],
    },
    technology: {
      title: ['From edge to cloud,', 'we design the operating architecture.'],
      intro: 'One platform that collects, interprets, and acts on field data.',
      overview: [
        'A Real-Time Location System (RTLS) is made of three parts: RTLS hardware, software, and infrastructure. Depending on the project, people and assets carry or wear tags, locators are placed at key points in the space to send and receive tag signals, and software calculates and visualizes the coordinates.',
        'OAXIS delivers centimeter-level indoor positioning accuracy with Ultra-wideband (UWB) precision tracking.',
      ],
      pillars: ['Hardware', 'Software', 'Infrastructure'],
      architecture: [
        { title: 'EDGE SERVER', note: 'Cleanse · Compute', imageAlt: 'Edge server refining and computing field data' },
        { title: 'AI CORE', note: 'Correct · Route', imageAlt: 'AI core correcting location and computing paths' },
        { title: 'MIDDLEWARE', note: 'Legacy Integration', imageAlt: 'Middleware connecting WMS, MES, and ERP' },
        { title: 'ADAPTIVE CLOUD', note: '3D Spatial Compute', imageAlt: 'Adaptive cloud performing 3D spatial compute' },
      ],
      diff: {
        kicker: 'Differentiation',
        title: 'Competitive comparison and differentiation',
        intro: 'Three advantages of OAXIS versus beacon/RFID and generic UWB RTLS',
        items: [
          {
            title: 'Precision · NLOS response',
            description:
              'Beacon/RFID stays at zone-level recognition, and generic UWB error grows in metal-heavy NLOS sites. OAXIS adds AI deep-learning signal correction to hold 10cm-level precision in harsh field conditions.',
            imageAlt: 'Warehouse aisle with a 10cm-level location pin',
          },
          {
            title: 'One-stop integrated supply',
            description:
              'Mixing positioning hardware and software from different vendors creates integration cost and accountability gaps. We supply anchors, tags, displays, and the AI platform as one architecture to cut deployment and maintenance burden.',
            imageAlt: 'Anchors, tags, and displays connected into one platform',
          },
          {
            title: 'On-site display · execution',
            description:
              'Most RTLS only show location on a monitoring screen. E-paper Spatial Tags and Stripe LCDs display information on the floor and drive lighting, so location data becomes a work instruction immediately.',
            imageAlt: 'Shelf with an e-paper tag and stripe LCD showing a work instruction',
          },
        ],
      },
    },
    solutions: {
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
