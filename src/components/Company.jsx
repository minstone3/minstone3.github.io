const values = [
  {
    number: '01 — PRECISION',
    title: 'cm급 초정밀 위치 추적',
    description: 'AI 딥러닝 보정으로 난반사 환경에서도 10cm 정밀도를 확보합니다.',
  },
  {
    number: '02 — EFFICIENCY',
    title: '원스톱 하이브리드 인프라',
    description: '통합 인프라로 구축 및 유지 비용을 40% 절감합니다.',
  },
  {
    number: '03 — AUTONOMY',
    title: 'AI 공간 지능화',
    description: '실시간 3D 연산과 최적 동선 도출로 현장 효율을 극대화합니다.',
  },
]

export default function Company() {
  return (
    <section className="section" id="company" aria-labelledby="company-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="section-label mono">01 / Company</p>
            <h2 id="company-title">
              현장의 모든 흐름을
              <br />
              하나의 언어로 연결합니다.
            </h2>
          </div>
          <p className="section-intro">
            (주)오아식스1은 AI 공간 지능과 실시간 위치 추적을 결합한 공간 플랫폼 전문 기업입니다.
          </p>
        </div>
        <div className="values">
          {values.map((value) => (
            <article className="value" key={value.number}>
              <span className="value-number mono">{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
