const industries = [
  {
    number: '01',
    title: '스마트 물류 & 풀필먼트',
    description: '고밀도 셀 창고 추적 및 피킹 동선 최적화',
  },
  {
    number: '02',
    title: '스마트 제조 & 공정 관리',
    description: '재공품 추적과 AGV/AMR 연동으로 병목 방지',
  },
  {
    number: '03',
    title: '스마트 리테일 & 헬스케어',
    description: '고객 동선과 중요 의료기기의 실시간 관리',
  },
]

export default function Industries() {
  return (
    <section className="section" id="industries" aria-labelledby="industries-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="section-label mono">03 / Industries</p>
            <h2 id="industries-title">
              데이터가 필요한
              <br />
              모든 현장에 적용됩니다.
            </h2>
          </div>
          <p className="section-intro">정밀한 위치 데이터로 병목을 발견하고, 더 나은 다음 행동을 제안합니다.</p>
        </div>
        <div className="industries">
          <div className="industry-list">
            {industries.map((industry) => (
              <article className="industry" key={industry.number}>
                <span className="industry-number">{industry.number}</span>
                <div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>
                <span className="industry-arrow">↗</span>
              </article>
            ))}
          </div>
          <div className="stat">
            <strong>10,000+</strong>
            <span>태그 동시 관제와 100ms 이내 실시간 업데이트로 더 빠른 의사결정을 지원합니다.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
