import type { ValueItem } from '../types'
import factoryImage from '../assets/company-factory.png'
import precisionImage from '../assets/value-precision.png'
import efficiencyImage from '../assets/value-efficiency.png'
import autonomyImage from '../assets/value-autonomy.png'

const values: ValueItem[] = [
  {
    number: '01 — PRECISION',
    title: 'cm급 초정밀 위치 추적',
    description: 'AI 딥러닝 보정으로 난반사 환경에서도 10cm 정밀도를 확보합니다.',
    image: precisionImage,
    imageAlt: '창고 자산에 부착된 태그와 cm급 위치 좌표 오버레이',
  },
  {
    number: '02 — EFFICIENCY',
    title: '원스톱 하이브리드 인프라',
    description: '통합 인프라로 구축 및 유지 비용을 40% 절감합니다.',
    image: efficiencyImage,
    imageAlt: '천장 앵커와 통합 게이트웨이로 구성된 하이브리드 인프라',
  },
  {
    number: '03 — AUTONOMY',
    title: 'AI 공간 지능화',
    description: '실시간 3D 연산과 최적 동선 도출로 현장 효율을 극대화합니다.',
    image: autonomyImage,
    imageAlt: 'AI가 도출한 최적 동선을 따라 이동하는 자율 물류 로봇',
  },
]

export default function Company() {
  return (
    <section className="section page-fill" aria-labelledby="company-title">
      <div className="wrap">
        <div className="company-intro">
          <div>
            <p className="section-label mono">01 / Company</p>
            <h2 id="company-title">
              현장의 모든 흐름을
              <br />
              하나의 언어로 연결합니다.
            </h2>
            <p className="section-intro">
              (주)오아식스는 AI 공간 지능과 실시간 위치 추적을 결합한 공간 플랫폼 전문 기업입니다.
            </p>
          </div>
          <figure className="company-visual media-blend">
            <img src={factoryImage} alt="스마트 팩토리에서 실시간 공간 데이터를 관제하는 OASIX 현장" />
          </figure>
        </div>
        <div className="values">
          {values.map((value) => (
            <article className="value" key={value.number}>
              <figure className="value-image media-blend">
                <img src={value.image} alt={value.imageAlt} />
              </figure>
              <div className="value-body">
                <span className="value-number mono">{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
