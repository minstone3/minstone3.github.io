import { Fragment } from 'react'
import edgeServerImage from '../assets/arch-edge-server.png'
import aiCoreImage from '../assets/arch-ai-core.png'
import middlewareImage from '../assets/arch-middleware.png'
import adaptiveCloudImage from '../assets/arch-adaptive-cloud.png'
import precisionImage from '../assets/diff-precision.jpg'
import onestopImage from '../assets/diff-onestop.jpg'
import onsiteImage from '../assets/diff-onsite.jpg'
import { useLanguage } from '../i18n/LanguageContext'

const architectureImages = [edgeServerImage, aiCoreImage, middlewareImage, adaptiveCloudImage]
const diffImages = [precisionImage, onestopImage, onsiteImage]

function DiffIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="7" cy="8" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="8" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="17" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 9.2 15 9.2M8.4 10.2 10.8 15M15.6 10.2 13.2 15" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 5v2M12 17v2M5 12h2M17 12h2M7.2 7.2l1.4 1.4M15.4 15.4l1.4 1.4M7.2 16.8l1.4-1.4M15.4 8.6l1.4-1.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export default function Technology() {
  const { t } = useLanguage()

  return (
    <>
      <section className="section dark-section" aria-labelledby="technology-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2 id="technology-title">
                {t.technology.title[0]}
                <br />
                {t.technology.title[1]}
              </h2>
            </div>
            <p className="section-intro">{t.technology.intro}</p>
          </div>
          <div className="tech-overview">
            <div className="tech-pillars">
              {t.technology.pillars.map((pillar) => (
                <span className="tech-pillar mono" key={pillar}>
                  {pillar}
                </span>
              ))}
            </div>
            {t.technology.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="architecture mono">
            {t.technology.architecture.map((layer, index) => (
              <Fragment key={layer.title}>
                {index > 0 && <i />}
                <article className="architecture-node">
                  <figure className="architecture-image media-blend">
                    <img src={architectureImages[index]} alt={layer.imageAlt} />
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

      <section className="section" aria-labelledby="diff-title">
        <div className="wrap">
          <div className="products-head">
            <p className="product-kicker mono">{t.technology.diff.kicker}</p>
            <h2 id="diff-title">{t.technology.diff.title}</h2>
            <p className="section-intro software-intro">{t.technology.diff.intro}</p>
          </div>
          <div className="diff-grid">
            {t.technology.diff.items.map((item, index) => (
              <article className="diff-card" key={item.title}>
                <div className="diff-copy">
                  <span className="diff-icon">
                    <DiffIcon index={index} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <figure className="diff-image">
                  <img src={diffImages[index]} alt={item.imageAlt} />
                </figure>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
