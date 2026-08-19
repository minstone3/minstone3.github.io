import { Fragment } from 'react'
import type { ArchitectureLayer, SolutionItem } from '../types'
import anchorImage from '../assets/solution-anchor.png'
import tagImage from '../assets/solution-tag.png'
import dashboardImage from '../assets/solution-dashboard.png'
import edgeServerImage from '../assets/arch-edge-server.png'
import aiCoreImage from '../assets/arch-ai-core.png'
import middlewareImage from '../assets/arch-middleware.png'
import adaptiveCloudImage from '../assets/arch-adaptive-cloud.png'

const solutions: SolutionItem[] = [
  {
    mark: 'A',
    title: 'Spatial Anchor',
    description: '50m 커버리지와 PoE를 지원하는 UWB 앵커 게이트웨이',
    image: anchorImage,
    imageAlt: '창고 천장에 설치된 UWB Spatial Anchor 게이트웨이',
  },
  {
    mark: 'T',
    title: 'Spatial Tag',
    description: '10cm 정밀 측위, 4.2" E-paper 디스플레이, 3년+ 배터리 수명',
    image: tagImage,
    imageAlt: 'E-paper 디스플레이가 있는 Spatial Tag',
  },
  {
    mark: 'D',
    title: 'Spatial Dashboard',
    description: 'Stripe LCD를 통한 3D 위치 지도와 터치 제어',
    image: dashboardImage,
    imageAlt: '3D 위치 지도를 표시하는 Spatial Dashboard',
  },
]

const architecture: ArchitectureLayer[] = [
  {
    title: 'EDGE SERVER',
    note: '정제 · 연산',
    image: edgeServerImage,
    imageAlt: '현장 데이터를 정제하고 연산하는 엣지 서버',
  },
  {
    title: 'AI CORE',
    note: '보정 · 동선',
    image: aiCoreImage,
    imageAlt: '위치 보정과 동선을 계산하는 AI 코어',
  },
  {
    title: 'MIDDLEWARE',
    note: '레거시 연동',
    image: middlewareImage,
    imageAlt: 'WMS·MES·ERP와 연동하는 미들웨어',
  },
  {
    title: 'ADAPTIVE CLOUD',
    note: '3D 공간 연산',
    image: adaptiveCloudImage,
    imageAlt: '3D 공간 연산을 수행하는 어댑티브 클라우드',
  },
]

export default function Solutions() {
  return (
    <section className="section dark-section page-fill" aria-labelledby="solutions-title">
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
              <figure className="solution-image media-blend">
                <img src={solution.image} alt={solution.imageAlt} />
              </figure>
              <div className="solution-body">
                <div className="solution-mark">{solution.mark}</div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="architecture mono">
          {architecture.map((layer, index) => (
            <Fragment key={layer.title}>
              {index > 0 && <i />}
              <article className="architecture-node">
                <figure className="architecture-image media-blend">
                  <img src={layer.image} alt={layer.imageAlt} />
                </figure>
                <div className="architecture-copy">
                  {layer.title}
                  <br />
                  <small>{layer.note}</small>
                </div>
              </article>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
