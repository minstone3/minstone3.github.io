import { Link } from 'react-router-dom'
import dashboardImage from '../assets/home-spatial-dashboard.png'

export default function Home() {
  return (
    <section className="hero page-fill" aria-labelledby="hero-title">
      <div className="wrap">
        <div>
          <p className="kicker mono">AI Spatial Intelligence · RTLS Platform</p>
          <h1 id="hero-title">
            공간을 읽고,
            <br />
            <em>운영을 바꿉니다.</em>
          </h1>
          <p className="hero-copy">
            AI 공간 지능 엔진과 cm급 실시간 위치 추적 기술로 사람·자산·재고의 흐름을 실시간으로 가시화하여 완전한 자율 운영 체계를 구축합니다.
          </p>
          <Link className="button" to="/solutions">
            플랫폼 살펴보기
          </Link>
          <p className="hero-note">OASIX / SPATIAL INTELLIGENCE PLATFORM</p>
        </div>
        <div className="visual" aria-label="실시간 공간 모니터링 화면 예시">
          <div className="visual-top mono">
            <span>SPATIAL DASHBOARD</span>
            <span className="live">LIVE</span>
          </div>
          <figure className="map">
            <img src={dashboardImage} alt="실시간 3D 공간 위치 대시보드" />
          </figure>
          <div className="visual-bottom mono">
            <span>
              ACTIVE TAGS<strong>1,248</strong>
            </span>
            <span>
              UPDATE<strong>100ms</strong>
            </span>
            <span>
              PRECISION<strong>10cm</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
