import type { IndustryItem } from '../types'
import logisticsImage from '../assets/industry-logistics.png'
import manufacturingImage from '../assets/industry-manufacturing.png'
import retailHealthcareImage from '../assets/industry-retail-healthcare.png'
import scaleImage from '../assets/industry-scale.png'

const industries: IndustryItem[] = [
  {
    number: '01',
    title: '스마트 물류 & 풀필먼트',
    description: '고밀도 셀 창고 추적 및 피킹 동선 최적화',
    image: logisticsImage,
    imageAlt: '고밀도 셀 창고에서 피킹 동선이 표시된 스마트 물류 현장',
  },
  {
    number: '02',
    title: '스마트 제조 & 공정 관리',
    description: '재공품 추적과 AGV/AMR 연동으로 병목 방지',
    image: manufacturingImage,
    imageAlt: 'AGV가 재공품을 이송하는 스마트 제조 공정',
  },
  {
    number: '03',
    title: '스마트 리테일 & 헬스케어',
    description: '고객 동선과 중요 의료기기의 실시간 관리',
    image: retailHealthcareImage,
    imageAlt: '매장 고객 동선과 병원 의료기기를 함께 관제하는 현장',
  },
]

export default function Industries() {
  return (
    <section className="section page-fill" aria-labelledby="industries-title">
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
                <figure className="industry-image media-blend">
                  <img src={industry.image} alt={industry.imageAlt} />
                </figure>
                <span className="industry-number">{industry.number}</span>
                <div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>
                <span className="industry-arrow">↗</span>
              </article>
            ))}
          </div>
          <figure className="stat">
            <img src={scaleImage} alt="수천 개 태그를 동시에 관제하는 실시간 관제 화면" />
            <div className="stat-copy">
              <strong>10,000+</strong>
              <span>태그 동시 관제와 100ms 이내 실시간 업데이트로 더 빠른 의사결정을 지원합니다.</span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
