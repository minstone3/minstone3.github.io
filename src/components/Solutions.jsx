import { Fragment } from 'react'

const solutions = [
  {
    mark: 'A',
    title: 'Spatial Anchor',
    description: '50m 커버리지와 PoE를 지원하는 UWB 앵커 게이트웨이',
  },
  {
    mark: 'T',
    title: 'Spatial Tag',
    description: '10cm 정밀 측위, 4.2" E-paper 디스플레이, 3년+ 배터리 수명',
  },
  {
    mark: 'D',
    title: 'Spatial Dashboard',
    description: 'Stripe LCD를 통한 3D 위치 지도와 터치 제어',
  },
]

const architecture = [
  { title: 'EDGE SERVER', note: '정제 · 연산' },
  { title: 'AI CORE', note: '보정 · 동선' },
  { title: 'MIDDLEWARE', note: '레거시 연동' },
  { title: 'ADAPTIVE CLOUD', note: '3D 공간 연산' },
]

export default function Solutions() {
  return (
    <section className="section dark-section" id="solutions" aria-labelledby="solutions-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="section-label mono">02 / Solutions</p>
            <h2 id="solutions-title">
              하드웨어부터 AI SaaS까지,
              <br />
              운영의 전 과정을 설계합니다.
            </h2>
          </div>
          <p className="section-intro">현장의 데이터를 모으고, 해석하고, 바로 실행할 수 있는 하나의 플랫폼입니다.</p>
        </div>
        <div className="solution-grid">
          {solutions.map((solution) => (
            <article className="solution" key={solution.mark}>
              <div className="solution-mark">{solution.mark}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </article>
          ))}
        </div>
        <div className="architecture mono">
          {architecture.map((layer, index) => (
            <Fragment key={layer.title}>
              {index > 0 && <i />}
              <span>
                {layer.title}
                <br />
                <small>{layer.note}</small>
              </span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
