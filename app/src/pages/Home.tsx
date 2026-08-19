import { Link } from 'react-router-dom'
import dashboardImage from '../assets/home-spatial-dashboard.png'
import { useLanguage } from '../i18n/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <section className="hero page-fill" aria-labelledby="hero-title">
      <div className="wrap">
        <div>
          <p className="kicker mono">{t.home.kicker}</p>
          <h1 id="hero-title">
            {t.home.title[0]}
            <br />
            <em>{t.home.title[1]}</em>
          </h1>
          <p className="hero-copy">{t.home.copy}</p>
          <Link className="button" to="/solutions">
            {t.home.cta}
          </Link>
          <p className="hero-note">{t.home.note}</p>
        </div>
        <div className="visual" aria-label={t.home.dashboardAria}>
          <div className="visual-top mono">
            <span>SPATIAL DASHBOARD</span>
            <span className="live">LIVE</span>
          </div>
          <figure className="map">
            <img src={dashboardImage} alt={t.home.dashboardAlt} />
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
