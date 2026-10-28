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
    news: string
    contact: string
    language: string
  }
  home: {
    kicker: string
    title: LinePair
    copy: string
    proofs: [string, string, string]
    cta: string
    note: string
    visualAlt: string
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
      nav: Array<{ id: string; title: string }>
      robot: {
        kicker: string
        title: string
        intro: string
        items: Array<{ title: string; description: string; imageAlt: string }>
      }
      system: {
        kicker: string
        title: string
        intro: string
        down: string
        up: string
        foot: string
        layers: Array<{
          number: string
          title: string
          items: Array<{ name: string; note: string }>
        }>
      }
    }
    items: Array<{
      id: string
      mark: string
      title: string
      imageAlt: string
      note?: string
      views?: Array<{ label: string; imageAlt: string }>
      specs: Array<{ label: string; value: string }>
    }>
  }
  technology: {
    title: LinePair
    intro: string
    overview: [string, string]
    pillars: [string, string, string]
    architecture: Array<{ title: string; note: string; imageAlt: string }>
    hybrid: {
      kicker: string
      title: string
      copy: string
      imageAlt: string
      points: Array<{ title: string; description: string; example: string }>
      merits: Array<{ title: string; description: string; example: string }>
      cases: Array<{ title: string; description: string }>
    }
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
    robot: {
      kicker: string
      jump: string
      title: LinePair
      intro: string
      imageAlt: string
      loop: Array<{ number: string; title: string; note: string }>
      items: Array<{ title: string; description: string; imageAlt: string;       points: string[] }>
    }
  }
  news: {
    kicker: string
    title: string
    intro: string
    write: string
    writeTitle: string
    writeIntro: string
    loading: string
    empty: string
    missing: string
    back: string
    remove: string
    confirmDelete: string
    required: string
    forbidden: string
    loginTitle: string
    loginIntro: string
    password: string
    loginSubmit: string
    loginError: string
    logout: string
    relatedKicker: string
    related: string
    columns: { no: string; category: string; title: string; date: string }
    categories: { notice: string; news: string; media: string }
    form: {
      category: string
      date: string
      title: string
      titleEn: string
      body: string
      bodyEn: string
      submit: string
      cancel: string
      media: string
      mediaHint: string
      mediaUrl: string
      mediaCaption: string
      mediaAdd: string
      mediaFile: string
      mediaRemove: string
      mediaInvalid: string
      mediaError: string
    }
  }
  contact: {
    kicker: string
    title: LinePair
    copy: string
    visualAlt: string
    related: Array<{ title: string; imageAlt: string }>
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
      news: '소식',
      contact: '파트너십 문의',
      language: '언어 선택',
    },
    home: {
      kicker: 'AI Spatial Intelligence · RTLS Platform',
      title: ['공간을 읽고,', '운영을 바꿉니다.'],
      copy: '사람·자산·재고의 흐름을 읽고, 위치에서 미션까지 이어지는 운영을 만듭니다.',
      proofs: ['사람 · 자산 · 재고', 'UWB 식별 · 레이더 추적', '위치에서 미션까지'],
      cta: '플랫폼 살펴보기',
      note: 'OAXIS / 공간 지능 플랫폼',
      visualAlt: '공간이 민트색 동선으로 읽히며 사람과 자산의 흐름이 가시화된 현장'
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
          number: '03 — INTELLIGENCE',
          title: 'AI 공간 지능화',
          description: '실시간 3D 연산과 최적 동선 도출로 현장 효율을 극대화합니다.',
          imageAlt: 'AI가 도출한 최적 동선을 따라 이동하는 물류 로봇',
        },
      ],
    },
    products: {
      kicker: 'HARDWARE SPECS',
      title: '하드웨어 상세 사양 및 주요 명세',
      hardware: 'Hardware',
      software: {
        kicker: 'SOFTWARE',
        title: '위치에서 미션까지',
        intro: '시스템 구성이 업무 지시와 현장 위치를 잇고, Robot IMS가 그 좌표로 차량과 작업을 운영합니다.',
        nav: [
          { id: 'software-system', title: 'System Architecture' },
          { id: 'software-robot', title: 'Robot IMS' },
        ],
        system: {
          kicker: 'SYSTEM ARCHITECTURE',
          title: '공간 지능 솔루션',
          intro: 'REST API · MQTT · SSE로 네 계층을 연결합니다. 지시와 미션은 아래로, 위치와 상태는 위로 흐릅니다.',
          down: '지시 · 미션 ↓',
          up: '↑ 위치 · 상태',
          foot: '',
          layers: [
            {
              number: '04',
              title: 'BUSINESS SYSTEMS',
              items: [
                { name: 'MES', note: '생산 지시 · 실적' },
                { name: 'WMS', note: '재고 · 위치 · 출고' },
                { name: 'POS · ORDER', note: '주문 · 결제 · 픽업' },
                { name: 'OPERATOR', note: '운영 정책 · 모니터링' },
              ],
            },
            {
              number: '03',
              title: 'APP & DATA',
              items: [
                { name: 'LOCKER FRONTEND', note: '픽업 UX' },
                { name: 'CENTRAL SERVER', note: '비즈니스 로직' },
                { name: 'BACKEND MANAGER', note: '관리 콘솔 · API' },
                { name: 'MONGODB', note: '위치 로그 · 속성' },
                { name: 'REDIS · ZK · ZMQ', note: '상태 · 이벤트' },
              ],
            },
            {
              number: '02',
              title: 'RTLS & API',
              items: [
                { name: 'API LAYER', note: 'API Gateway · Flask API' },
                { name: 'MESSAGE & RTLS', note: 'RTLS Broker · Socket Daemon' },
                { name: 'REALTIME STREAM', note: 'SSE · Bridge/Codec · Web Tracker' },
              ],
            },
            {
              number: '01',
              title: 'EDGE & FIELD',
              items: [
                { name: 'SPATIAL GATEWAY', note: '현장 신호 수집' },
                { name: 'SPATIAL TAG', note: '위치 신호 송신' },
                { name: 'SPATIAL ANCHOR', note: '위치 기준점' },
                { name: 'AMR · AGV', note: '미션 수신 · 실행' },
                { name: 'FIELD DEVICES', note: '로봇 · Signage' },
              ],
            },
          ],
        },
        robot: {
          kicker: 'ROBOT SOFTWARE',
          title: '위치 좌표를 로봇 미션으로 넘깁니다.',
          intro:
            'Robot IMS가 차량·미션·이력을 한 화면에서 운영하고, AMR 키오스크가 현장에서 픽업·추가·빼기를 마무리합니다.',
          items: [
            {
              title: 'Robot IMS',
              description:
                '설비·경로·AMR 위치를 확인하고, Fleet 연결·운행·배터리를 모니터링합니다. 대상과 목적지를 지정해 미션을 전달하고, 진행·완료·예외를 이력으로 남깁니다. 관제는 오아식스가, 주행과 안전 제어는 Fleet Manager가 맡습니다.',
              imageAlt: 'AMR 위치와 운송 오더를 함께 보는 Robot IMS 관제 화면',
            },
            {
              title: 'AMR 키오스크',
              description:
                '픽업·추가·빼기를 로봇 화면에서 순서대로 마무리합니다. LED가 대상 카트를 표시하고, 수량을 확인한 뒤 작업을 완료합니다. 현장 피킹의 오피킹률을 95% 이상 줄입니다.',
              imageAlt: '픽업·추가·빼기 단계와 이동 경로가 표시된 AMR 키오스크',
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
            { label: '무선 규격', value: 'UWB (IEEE 802.15.4z), 2.4GHz (IEEE 802.15.4), 60GHz FMCW RADAR' },
            { label: '통신 범위', value: '반경 50m 이상' },
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
            { label: '부가 기능', value: 'USB 인터페이스, 다기능버튼, 멀티칼라 LED' },
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
        {
          id: 'cart',
          mark: 'C',
          title: 'Spatial Cart',
          imageAlt: '디스플레이 포스트가 올라간 OAXIS Spatial Cart',
          note: '디자인은 상황에 따라 변경될 수 있습니다.',
          views: [
            { label: '표준형', imageAlt: '디스플레이 포스트가 없는 OAXIS Spatial Cart 표준형' },
            { label: 'Display Post 확장형', imageAlt: '디스플레이 포스트가 올라간 OAXIS Spatial Cart 확장형' },
          ],
          specs: [
            { label: '모델 · 형태', value: '표준형 · Display Post 확장형' },
            { label: '크기 · 회전', value: '780 × 506 × 270mm / 회전 직경 840mm' },
            { label: '하중 · 리프트', value: '최대 300kg, Lift optional' },
            { label: '속도 · 정밀도', value: '최대 1.5m/s, 만재 1.2m/s / 도착 ±40mm·2°, 말단 ±10mm·1°' },
            { label: '주행 · 센서', value: 'Laser SLAM, Visual SLAM 옵션 / Depth Camera' },
            { label: '배터리 · 운용', value: 'LFP 24V 30Ah / 무부하 12h, 일반 운용 4.5h / 30→80% 약 2h' },
            { label: '통신', value: '4G · Wi-Fi · LoRa · Bluetooth' },
          ],
        },
      ],
    },
    technology: {
      title: ['엣지부터 클라우드까지,', '운영 아키텍처를 설계합니다.'],
      intro: '현장의 데이터를 모으고, 해석하고, 바로 실행할 수 있는 하나의 플랫폼입니다.',
      overview: [
        '실시간 위치 측위 시스템(RTLS)은 태그·앵커·레이더 하드웨어, 좌표를 산출하고 시각화하는 소프트웨어, 그리고 현장 인프라가 하나의 체계로 동작할 때 완성됩니다. 오아식스는 이 세 요소를 자체 기술로 설계·연동합니다. 식별이 필요한 대상에는 태그를 부착하고, 태그가 없는 대상은 고성능 레이더로 추적하며, 주요 지점에 Spatial Anchor를 배치하면 신호 송수신부터 좌표 계산·화면 표시까지 자사 스택 안에서 처리됩니다.',
        '핵심은 초광대역(UWB) 기반의 정밀 측위와 고성능 레이더를 결합한 Hybrid Spatial Engine입니다. UWB가 태그를 식별해 cm급 좌표를 내고, 레이더가 태그가 없는 대상을 실시간으로 추적합니다. 다중 Spatial Anchor 시각 동기와 오차 보정을 적용해 실내에서도 식별·비식별 객체를 하나의 공간으로 안정적으로 제공합니다.',
      ],
      pillars: ['Hardware', 'Software', 'Infrastructure'],
      architecture: [
        { title: 'EDGE SERVER', note: '정제 · 연산', imageAlt: '현장 데이터를 정제하고 연산하는 엣지 서버' },
        { title: 'AI CORE', note: '보정 · 하이브리드 탐지', imageAlt: '위치 보정과 식별·비식별 객체를 계산하는 AI 코어' },
        { title: 'MIDDLEWARE', note: '레거시 연동', imageAlt: 'WMS·MES·ERP와 연동하는 미들웨어' },
        { title: 'ADAPTIVE CLOUD', note: '3D 공간 연산', imageAlt: '3D 공간 연산을 수행하는 어댑티브 클라우드' },
      ],
      hybrid: {
        kicker: 'HYBRID SPATIAL ENGINE',
        title: '식별과 비식별을 하나의 공간으로 읽습니다.',
        copy: '일반 RTLS는 태그가 있는 대상만 봅니다. Hybrid Spatial Engine은 식별이 필요한 대상과, 태그가 없어 이름 없이 움직이는 대상을 같은 공간 모델에서 읽습니다. 누가인지는 UWB가 담당하고, 태그가 없는 존재와 경로는 고성능 레이더가 실시간으로 추적합니다. 물류·제조·리테일·헬스케어처럼 태그를 붙일 수 있는 대상과 붙이지 않는 대상이 한 공간에 섞인 현장에, 두 데이터를 한 시각으로 맞춰 운영합니다.',
        imageAlt: '식별 객체와 비식별 대상이 한 공간에서 함께 추적되는 하이브리드 현장',
        points: [
          {
            title: 'UWB 식별 측위',
            description:
              'Spatial Tag를 부착한 사람·자산·재고를 ID와 함께 읽고, ToA/TDoA로 cm급 실시간 좌표를 냅니다. 작업 지시, 이력, 권한, 자산 관리처럼 “누구·무엇”이 필요한 대상에 씁니다.',
            example: '예: 물류 피킹 작업자·셀 재고, 제조 재공품·공정 대차, 매장 고가 상품·병원 의료기기를 이름과 좌표로 표시합니다.',
          },
          {
            title: '고성능 레이더 추적',
            description:
              '태그가 없는 사람·설비·이동체도 60GHz FMCW 레이더로 탐지·추적합니다. 신원을 묻지 않고 위치와 움직임만 읽어, 태그를 붙일 수 없거나 붙일 필요가 없는 대상을 놓치지 않습니다.',
            example: '예: 창고 방문객, 라인 통과 인원, 매장 고객·병원 보호자처럼 태그 없는 동선을 궤적으로 실시간 추적합니다.',
          },
        ],
        merits: [
          {
            title: '빈 공간 없는 가시화',
            description: '태그가 없는 대상까지 레이더로 읽어, 식별·비식별 흐름을 한 지도에서 봅니다. 태그 전용 RTLS가 놓치는 사각을 현장 유형과 관계없이 줄입니다.',
            example: '예: 피킹 통로, 공정 통로, 매장 통로·병동 복도에 태그 없는 사람이 들어와도 혼잡·충돌 구간으로 표시됩니다.',
          },
          {
            title: '실시간 융합',
            description: 'UWB 좌표와 레이더 궤적을 같은 시각에 맞춰 하나의 운영 화면으로 합칩니다. 식별된 이동체와 비식별 보행자가 같은 통로에 있어도 교차 상황을 한눈에 봅니다.',
            example: '예: 물류 AGV, 공정 AMR, 병원 이송 카트가 태그 없는 사람과 경로가 겹치면 관제·현장 화면에 함께 경고합니다.',
          },
          {
            title: '식별이 필요할 때만 태그',
            description: 'ID가 필요한 대상은 UWB로, 존재와 경로만 필요한 대상은 레이더로 처리합니다. 모든 사람·물건에 태그를 붙이지 않고도 공간 운영이 가능합니다.',
            example: '예: 정규 작업자·자산·의료기기는 태그, 방문객·고객·보호자는 레이더 동선만으로 관리합니다.',
          },
        ],
        cases: [
          {
            title: '스마트 물류 & 풀필먼트',
            description: '셀 재고·피킹 작업자는 UWB로 식별하고, 통로의 방문객과 태그 없는 팔레트는 레이더로 추적해 동선 충돌과 병목을 줄입니다.',
          },
          {
            title: '스마트 제조 & 공정 관리',
            description: '재공품·대차·작업자는 태그로 공정을 따라가고, 라인을 지나는 임시 인원과 적재는 레이더로 읽어 AGV/AMR 교차와 병목을 방지합니다.',
          },
          {
            title: '스마트 리테일 & 헬스케어',
            description: '직원·의료기기·고가 상품은 식별하고, 고객·보호자 동선은 태그 없이 레이더로 읽어 혼잡·대기·자산 위치를 함께 운영합니다.',
          },
        ],
      },
      diff: {
        kicker: 'Differentiation',
        title: '차별화',
        intro: '비콘·RFID 및 태그 전용 UWB RTLS 대비 오아식스만의 세 가지 경쟁 우위. 식별은 UWB로, 비식별 실시간 추적은 고성능 레이더로 보완합니다.',
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
      stat: '태그 동시 관제와 실시간 업데이트로 더 빠른 의사결정을 지원합니다.',
      statAlt: '수천 개 태그를 동시에 관제하는 실시간 관제 화면',
      robot: {
        kicker: 'ROBOT SOLUTION',
        jump: '로봇 솔루션 보기',
        title: ['찾기, 이동, 확인을', '하나의 흐름으로.'],
        intro:
          '실내 위치 솔루션이 대상을 찾고, 로봇 솔루션이 이동·픽업·운반을 실행합니다. 고정 좌표가 아니라 자산의 현재 위치가 AMR의 목적지와 작업 지시가 됩니다.',
        imageAlt: 'AMR의 UWB 위치 추적과 이동·고정 자산에 부착된 UWB 태그를 보여주는 물류센터 장면',
        loop: [
          { number: '01', title: '업무 요청', note: 'WMS·MES에서 작업과 대상을 지정' },
          { number: '02', title: '현재 위치', note: 'Tag·Anchor가 자산 좌표와 상태를 수집' },
          { number: '03', title: '동적 미션', note: 'AI Core가 현재 좌표로 목적지를 설정' },
          { number: '04', title: '탐색·운반', note: 'AMR이 대상을 확인하고 픽업·이송' },
          { number: '05', title: '결과 기록', note: '진행과 완료를 관제와 이력에 반영' },
        ],
        items: [
          {
            title: 'Spatial Cart',
            description:
              'UWB로 AMR과 이동·고정 자산의 위치를 추적해 픽업 대상을 찾습니다. 주행은 Laser SLAM이 맡고, Spatial Tag 화면과 LED로 작업자와 로봇이 같은 대상을 확인합니다.',
            imageAlt: '장애물과 경로를 인식하며 창고를 주행하는 OAXIS AMR',
            points: [
              '780 × 506 × 270mm · 회전 직경 840mm',
              '최대 300kg · 리프트 선택',
              '주행 최대 1.5m/s · Laser SLAM',
              '표준형 · Display Post 확장형',
            ],
          },
          {
            title: 'Robot IMS',
            description:
              '설비·경로·AMR 위치를 한 화면에서 보고, Fleet 상태와 배터리, 미션 배정, 실행 이력을 함께 운영합니다.',
            imageAlt: 'AMR 위치와 운송 오더를 함께 보는 Robot IMS 관제 화면',
            points: ['공간·차량 관제', 'Fleet 연결·운행·배터리', '대상·목적지 미션 배정', '진행·완료·예외 이력'],
          },
          {
            title: 'AMR 키오스크',
            description:
              '픽업·추가·빼기를 로봇 화면에서 마무리합니다. LED로 대상 카트를 표시해 현장에서 피킹 대상을 바로 확인합니다.',
            imageAlt: '픽업·추가·빼기 단계와 이동 경로가 표시된 AMR 키오스크',
            points: ['피킹·분배 원스톱', 'LED로 대상 카트 표시', '수량 확인 후 추가·빼기 완료', '오피킹률 95% 이상 감소'],
          },
        ],
      },
    },
    news: {
      kicker: 'NEWSROOM',
      title: '오아식스 소식',
      intro: '제품·기술·파트너십 관련 공지와 새 소식을 게시판에서 확인하세요.',
      write: '소식 등록',
      writeTitle: '새 소식 등록',
      writeIntro: '제목과 본문을 입력하면 소식 게시판에 바로 올라갑니다. 이미지, 유튜브·비메오 링크, 동영상 파일도 함께 첨부할 수 있습니다. 로컬에서 등록한 글과 파일은 배포 후 모든 방문자에게 보입니다.',
      loading: '소식을 불러오는 중입니다.',
      empty: '등록된 소식이 없습니다.',
      missing: '해당 소식을 찾을 수 없습니다.',
      back: '목록으로',
      remove: '삭제',
      confirmDelete: '이 소식을 삭제할까요?',
      required: '제목과 내용을 입력해 주세요.',
      forbidden: '권한이 없어 등록하거나 삭제할 수 없습니다.',
      loginTitle: '관리자 로그인',
      loginIntro: '소식을 등록하거나 삭제하려면 관리자 비밀번호가 필요합니다.',
      password: '비밀번호',
      loginSubmit: '로그인',
      loginError: '비밀번호가 올바르지 않습니다.',
      logout: '로그아웃',
      relatedKicker: 'RELATED',
      related: '관련 콘텐츠',
      columns: { no: '번호', category: '구분', title: '제목', date: '날짜' },
      categories: { notice: '공지', news: '소식', media: '미디어' },
      form: {
        category: '구분',
        date: '날짜',
        title: '제목',
        titleEn: 'Title (EN)',
        body: '내용',
        bodyEn: 'Body (EN)',
        submit: '등록',
        cancel: '취소',
        media: '이미지 · 영상',
        mediaHint: '이미지 URL, YouTube/Vimeo 링크, 또는 이미지·동영상 파일을 추가할 수 있습니다.',
        mediaUrl: '미디어 URL',
        mediaCaption: '캡션 (선택)',
        mediaAdd: 'URL 추가',
        mediaFile: '파일 첨부',
        mediaRemove: '제거',
        mediaInvalid: '지원하는 이미지·영상 주소가 아닙니다.',
        mediaError: '파일을 첨부하지 못했습니다. 이미지이거나 로컬 개발 서버에서 다시 시도해 주세요.',
      },
    },
    contact: {
      kicker: 'Partnership / PoC / SI',
      title: ['현장의 다음 장면을', '함께 만들어 보세요.'],
      copy: '스마트 물류·공장의 RTLS–AMR 현장 실증, WMS/MES/ERP 연동, 로봇 자동화 공동 사업까지 논의할 수 있습니다.',
      visualAlt: '밝은 회의실에서 WMS·MES·위치 지도를 함께 보며 시스템 연동을 논의하는 장면',
      related: [
        {
          title: '현장 PoC',
          imageAlt: '밝은 공장 통로에서 AGV와 위치 지도를 확인하는 현장 실증',
        },
        {
          title: '시스템 연동',
          imageAlt: '밝은 사무실에서 WMS·MES·위치 지도를 연동해 보는 화면',
        },
        {
          title: '공동 사업',
          imageAlt: '밝은 물류 현장에서 피킹 동선 지도를 함께 검토하는 장면',
        },
      ],
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
      news: 'News',
      contact: 'Partnership inquiry',
      language: 'Language',
    },
    home: {
      kicker: 'AI Spatial Intelligence · RTLS Platform',
      title: ['Read the space,', 'reshape operations.'],
      copy: 'We read the flow of people, assets, and inventory, and build operations that run from location through to the mission.',
      proofs: ['People · Assets · Inventory', 'UWB identity · radar track', 'Location to mission'],
      cta: 'Explore the platform',
      note: 'OAXIS / SPATIAL INTELLIGENCE PLATFORM',
      visualAlt: 'A site where mint path lines make the space readable and the flow of people and assets visible'
    },
    company: {
      title: ['We connect every flow on site', 'into one language.'],
      intro: 'OAXIS is a spatial platform company that combines AI spatial intelligence with real-time location tracking.',
      factoryAlt: 'OAXIS control room monitoring a live indoor location map overlooking the warehouse',
      values: [
        {
          number: '01 — PRECISION',
          title: 'cm-level ultra-precise tracking',
          description: 'AI deep-learning correction holds 10cm accuracy even in high-multipath, reflective environments.',
          imageAlt: 'Warehouse assets with tags and centimeter-level coordinate overlays',
        },
        {
          number: '02 — EFFICIENCY',
          title: 'One-stop hybrid infrastructure',
          description: 'A unified infrastructure cuts deployment and maintenance cost by 40%.',
          imageAlt: 'Hybrid infrastructure of ceiling anchors and integrated gateways',
        },
        {
          number: '03 — INTELLIGENCE',
          title: 'AI spatial intelligence',
          description: 'Real-time 3D computation and optimal routing maximize on-site efficiency.',
          imageAlt: 'Logistics robots following AI-optimized routes',
        },
      ],
    },
    products: {
      kicker: 'HARDWARE SPECS',
      title: 'Hardware specifications and key details',
      hardware: 'Hardware',
      software: {
        kicker: 'SOFTWARE',
        title: 'From location to mission',
        intro: 'The system stack links work orders with floor locations, and Robot IMS runs vehicles and jobs from those coordinates.',
        nav: [
          { id: 'software-system', title: 'System Architecture' },
          { id: 'software-robot', title: 'Robot IMS' },
        ],
        system: {
          kicker: 'SYSTEM ARCHITECTURE',
          title: 'Spatial Intelligence system',
          intro: 'REST API, MQTT, and SSE connect four layers. Work orders and missions flow down. Location and status flow up.',
          down: 'Orders · missions ↓',
          up: '↑ Location · status',
          foot: '',
          layers: [
            {
              number: '04',
              title: 'BUSINESS SYSTEMS',
              items: [
                { name: 'MES', note: 'Production orders · results' },
                { name: 'WMS', note: 'Inventory · location · outbound' },
                { name: 'POS · ORDER', note: 'Order · payment · pickup' },
                { name: 'OPERATOR', note: 'Operating policy · monitoring' },
              ],
            },
            {
              number: '03',
              title: 'APP & DATA',
              items: [
                { name: 'LOCKER FRONTEND', note: 'Pickup UX' },
                { name: 'CENTRAL SERVER', note: 'Business logic' },
                { name: 'BACKEND MANAGER', note: 'Admin console · API' },
                { name: 'MONGODB', note: 'Location logs · attributes' },
                { name: 'REDIS · ZK · ZMQ', note: 'State · events' },
              ],
            },
            {
              number: '02',
              title: 'RTLS & API',
              items: [
                { name: 'API LAYER', note: 'API Gateway · Flask API' },
                { name: 'MESSAGE & RTLS', note: 'RTLS Broker · Socket Daemon' },
                { name: 'REALTIME STREAM', note: 'SSE · Bridge/Codec · Web Tracker' },
              ],
            },
            {
              number: '01',
              title: 'EDGE & FIELD',
              items: [
                { name: 'SPATIAL GATEWAY', note: 'Field signal collection' },
                { name: 'SPATIAL TAG', note: 'Location signal' },
                { name: 'SPATIAL ANCHOR', note: 'Location reference' },
                { name: 'AMR · AGV', note: 'Receive and run missions' },
                { name: 'FIELD DEVICES', note: 'Robots · signage' },
              ],
            },
          ],
        },
        robot: {
          kicker: 'ROBOT SOFTWARE',
          title: 'Coordinates become robot missions.',
          intro:
            'Robot IMS runs vehicles, missions, and history on one screen. The AMR kiosk finishes pickup, add, and remove on the floor.',
          items: [
            {
              title: 'Robot IMS',
              description:
                'See facilities, routes, and AMR positions, and monitor fleet link, motion, and battery. Assign a target and destination, then keep progress, completion, and exceptions in the history. OAXIS owns monitoring. The Fleet Manager owns driving and safety control.',
              imageAlt: 'Robot IMS screen showing AMR positions and a transport order',
            },
            {
              title: 'AMR Kiosk',
              description:
                'Finish pickup, add, and remove in order on the robot screen. An LED marks the target cart, the quantity is confirmed, and the job is closed. Mis-picks on the floor drop by 95% or more.',
              imageAlt: 'AMR kiosk showing pickup, add, and remove steps with the travel route',
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
            { label: 'Wireless', value: 'UWB (IEEE 802.15.4z), 2.4GHz (IEEE 802.15.4), 60GHz FMCW RADAR' },
            { label: 'Range', value: '50m+ radius' },
            { label: 'Power', value: 'PoE / DC 12V' },
            { label: 'Mounting', value: 'Ceiling / Wall' },
          ],
        },
        {
          id: 'tag',
          mark: 'T',
          title: 'Spatial Tag',
          imageAlt: '4-color Spatial Tag e-paper showing product name, process, quantity, work order, and operator',
          specs: [
            { label: 'Accuracy', value: 'Within 10cm' },
            { label: 'Display', value: '4.2" 4-color e-paper (B/W/R/Y)' },
            { label: 'Battery', value: 'AI sleep mode, 3+ years' },
            { label: 'Features', value: 'USB I/F, multi-function button, multi-color LED' },
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
        {
          id: 'cart',
          mark: 'C',
          title: 'Spatial Cart',
          imageAlt: 'OAXIS Spatial Cart with the display post raised',
          note: 'Appearance may change depending on the site.',
          views: [
            { label: 'Standard', imageAlt: 'OAXIS Spatial Cart standard model without a display post' },
            { label: 'Display Post', imageAlt: 'OAXIS Spatial Cart extended with a display post' },
          ],
          specs: [
            { label: 'Form', value: 'Standard and Display Post' },
            { label: 'Size', value: '780 × 506 × 270mm / 840mm turning diameter' },
            { label: 'Payload', value: 'Up to 300kg, lift optional' },
            { label: 'Speed', value: 'Up to 1.5m/s, 1.2m/s loaded / arrival ±40mm·2°, end ±10mm·1°' },
            { label: 'Navigation', value: 'Laser SLAM, optional Visual SLAM / depth camera' },
            { label: 'Battery', value: 'LFP 24V 30Ah / 12h unloaded, 4.5h typical / 30→80% about 2h' },
            { label: 'Link', value: '4G · Wi-Fi · LoRa · Bluetooth' },
          ],
        },
      ],
    },
    technology: {
      title: ['From edge to cloud,', 'we design the operating architecture.'],
      intro: 'One platform that collects, interprets, and acts on field data immediately.',
      overview: [
        'A real-time location system (RTLS) is complete when tag, anchor, and radar hardware, software that computes and visualizes coordinates, and on-site infrastructure work as one system. OAXIS designs and integrates all three with in-house technology. Attach tags where identity is needed, track untagged targets with high-performance radar, and place Spatial Anchors at key points — then everything from signal transmit/receive to coordinate calculation and on-screen display is handled inside our own stack.',
        'The core is the Hybrid Spatial Engine, which combines Ultra-wideband (UWB) precision positioning with high-performance radar. UWB identifies tagged objects at centimeter-level coordinates, while radar tracks untagged targets in real time. With multi-anchor time synchronization and error correction, identified and unidentified objects stay in one stable indoor space.',
      ],
      pillars: ['Hardware', 'Software', 'Infrastructure'],
      architecture: [
        { title: 'EDGE SERVER', note: 'Cleanse · Compute', imageAlt: 'Edge server refining and computing field data' },
        { title: 'AI CORE', note: 'Correct · Hybrid detection', imageAlt: 'AI core correcting location and detecting identified and unidentified objects' },
        { title: 'MIDDLEWARE', note: 'Legacy Integration', imageAlt: 'Middleware connecting WMS, MES, and ERP' },
        { title: 'ADAPTIVE CLOUD', note: '3D Spatial Compute', imageAlt: 'Adaptive cloud performing 3D spatial compute' },
      ],
      hybrid: {
        kicker: 'HYBRID SPATIAL ENGINE',
        title: 'Read identified and unidentified objects as one space.',
        copy: 'Typical RTLS sees only tagged targets. The Hybrid Spatial Engine reads targets that need identity and targets that move without a tag in the same spatial model. UWB answers who and what; high-performance radar tracks presence and path in real time when there is no tag. On logistics, manufacturing, retail, and healthcare sites — where tagged and untagged subjects share one space — the two streams are time-aligned into one operations view.',
        imageAlt: 'A site where identified objects and unidentified targets are tracked together in one space',
        points: [
          {
            title: 'UWB identified positioning',
            description:
              'People, assets, and inventory with Spatial Tags are read with an ID and located in real time at centimeter level via ToA/TDoA. Use this when work orders, history, permissions, or asset control need a who and a what.',
            example: 'Example: picking operators and cell stock, manufacturing WIP and process carts, and high-value retail goods or hospital devices appear with a name and coordinates.',
          },
          {
            title: 'High-performance radar tracking',
            description:
              'People, equipment, and movers without tags are detected and tracked by 60GHz FMCW radar. It reads position and motion without asking for identity, so targets you cannot or need not tag are not missed.',
            example: 'Example: warehouse visitors, people crossing a production line, store shoppers, and hospital companions are followed as live untagged tracks.',
          },
        ],
        merits: [
          {
            title: 'Visibility without blind spots',
            description: 'Radar reads untagged targets so identified and unidentified flows share one map, closing gaps that tag-only RTLS leaves open across site types.',
            example: 'Example: an untagged person in a picking aisle, process corridor, store aisle, or ward hallway is shown as a congestion or collision zone.',
          },
          {
            title: 'Live fusion',
            description: 'UWB coordinates and radar tracks are time-aligned into a single operations view, so identified movers and unidentified pedestrians in the same path are visible together.',
            example: 'Example: if a logistics AGV, process AMR, or hospital transfer cart crosses an untagged person, monitoring and floor screens warn together.',
          },
          {
            title: 'Tags only when identity is needed',
            description: 'Use UWB when you need an ID, and radar when you only need presence and path. The site can run without tagging every person or object.',
            example: 'Example: regular operators, assets, and medical devices carry tags; visitors, shoppers, and companions are managed by radar path only.',
          },
        ],
        cases: [
          {
            title: 'Smart logistics & fulfillment',
            description: 'Identify cell stock and picking operators with UWB, and track aisle visitors and untagged pallets with radar to cut path conflicts and bottlenecks.',
          },
          {
            title: 'Smart manufacturing & process control',
            description: 'Follow WIP, carts, and operators with tags, and read temporary people and loads on the line with radar to prevent AGV/AMR crossings and bottlenecks.',
          },
          {
            title: 'Smart retail & healthcare',
            description: 'Identify staff, medical devices, and high-value goods, and read shopper or companion flow with radar so crowding, waiting, and asset location run together.',
          },
        ],
      },
      diff: {
        kicker: 'Differentiation',
        title: 'Differentiation',
        intro: 'Three advantages of OAXIS versus beacon/RFID and tag-only UWB RTLS. Identity comes from UWB; real-time tracking of untagged targets is completed by high-performance radar.',
        items: [
          {
            title: 'Precision · NLOS handling',
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
            title: 'On-site display · execution link',
            description:
              'Most RTLS only show location on a monitoring screen. E-paper Spatial Tags and Spatial Dashboards display information on the floor and drive lighting, so location data becomes a work instruction immediately.',
            imageAlt: 'A site where shelf e-paper tags and a Spatial Dashboard confirm work instructions',
          },
        ],
      },
    },
    solutions: {
      title: ['Applied to every site', 'that needs data.'],
      intro: 'Precise location data finds bottlenecks and recommends a better next action.',
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
      stat: 'Simultaneous tag monitoring and real-time updates for faster decisions.',
      statAlt: 'Live control screen tracking thousands of tags at once',
      robot: {
        kicker: 'ROBOT SOLUTION',
        jump: 'See the robot solution',
        title: ['Find, move, and confirm', 'in one flow.'],
        intro:
          'Indoor positioning finds the target, and the robot solution moves, picks, and carries it. The asset’s current location — not a fixed coordinate — becomes the AMR destination and work order.',
        imageAlt: 'Fulfillment aisle showing UWB tracking on the AMR and UWB tags on moving and fixed assets',
        loop: [
          { number: '01', title: 'Work request', note: 'WMS or MES names the job and the target' },
          { number: '02', title: 'Live location', note: 'Tags and anchors collect the asset coordinate and status' },
          { number: '03', title: 'Dynamic mission', note: 'AI Core sets the destination from the current coordinate' },
          { number: '04', title: 'Search and carry', note: 'The AMR confirms the target, then picks up and transfers it' },
          { number: '05', title: 'Result record', note: 'Progress and completion land in monitoring and history' },
        ],
        items: [
          {
            title: 'Spatial Cart',
            description:
              'UWB tracks the AMR and moving or fixed assets to find the pickup target. Laser SLAM handles driving, and the Spatial Tag screen and LED let the operator and the robot confirm the same item.',
            imageAlt: 'An OAXIS AMR reading obstacles and its path while driving a warehouse aisle',
            points: [
              '780 × 506 × 270mm · 840mm turning diameter',
              'Up to 300kg · optional lift',
              'Driving up to 1.5m/s · Laser SLAM',
              'Standard and Display Post models',
            ],
          },
          {
            title: 'Robot IMS',
            description:
              'See facilities, routes, and AMR positions on one screen, and run fleet status, battery, mission assignment, and execution history together.',
            imageAlt: 'Robot IMS screen showing AMR positions and a transport order',
            points: ['Space and vehicle monitoring', 'Fleet link, motion, and battery', 'Target and destination assignment', 'Progress, completion, and exceptions'],
          },
          {
            title: 'AMR Kiosk',
            description:
              'Finish pickup, add, and remove on the robot screen. An LED marks the target cart so the floor can confirm the pick immediately.',
            imageAlt: 'AMR kiosk showing pickup, add, and remove steps with the travel route',
            points: ['One-stop picking and distribution', 'LED marks the target cart', 'Confirm quantity, then complete add or remove', 'Mis-picks reduced by 95% or more'],
          },
        ],
      },
    },
    news: {
      kicker: 'NEWSROOM',
      title: 'OAXIS news',
      intro: 'Check notices and news on products, technology, and partnerships on the board.',
      write: 'Post news',
      writeTitle: 'Post a news item',
      writeIntro: 'Title and body appear on the news board immediately. You can also attach images, YouTube/Vimeo links, and video files. Posts and files saved in local development are shown to every visitor after publish.',
      loading: 'Loading news…',
      empty: 'No posts yet.',
      missing: 'This post could not be found.',
      back: 'Back to list',
      remove: 'Delete',
      confirmDelete: 'Delete this post?',
      required: 'Please enter a title and body.',
      forbidden: 'You do not have permission to post or delete news.',
      loginTitle: 'Admin sign-in',
      loginIntro: 'An admin password is required to post or delete news.',
      password: 'Password',
      loginSubmit: 'Sign in',
      loginError: 'The password is incorrect.',
      logout: 'Sign out',
      relatedKicker: 'RELATED',
      related: 'Related content',
      columns: { no: 'No.', category: 'Type', title: 'Title', date: 'Date' },
      categories: { notice: 'Notice', news: 'News', media: 'Media' },
      form: {
        category: 'Type',
        date: 'Date',
        title: 'Title (KO)',
        titleEn: 'Title (EN)',
        body: 'Body (KO)',
        bodyEn: 'Body (EN)',
        submit: 'Publish',
        cancel: 'Cancel',
        media: 'Images · video',
        mediaHint: 'Add an image URL, a YouTube/Vimeo link, or an image/video file.',
        mediaUrl: 'Media URL',
        mediaCaption: 'Caption (optional)',
        mediaAdd: 'Add URL',
        mediaFile: 'Attach file',
        mediaRemove: 'Remove',
        mediaInvalid: 'That is not a supported image or video address.',
        mediaError: 'The file could not be attached. Use an image, or try again on the local dev server.',
      },
    },
    contact: {
      kicker: 'Partnership / PoC / SI',
      title: ['Let’s build the next scene', 'on site together.'],
      copy: 'We can discuss RTLS–AMR field PoCs for logistics and factories, WMS/MES/ERP integration, and joint work on robot automation.',
      visualAlt: 'A bright meeting room where teams review WMS, MES, and a live location map',
      related: [
        {
          title: 'Field PoC',
          imageAlt: 'Bright factory aisle with AGVs and a live location map during a field PoC',
        },
        {
          title: 'System integration',
          imageAlt: 'Bright office reviewing connected WMS, MES, and location-map screens',
        },
        {
          title: 'Joint business',
          imageAlt: 'Sunlit warehouse meeting reviewing a picking-path map together',
        },
      ],
    },
    footer: { tagline: 'AI SPATIAL INTELLIGENCE & REAL-TIME LOCATION PLATFORM' },
  },
}
