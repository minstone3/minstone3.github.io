import { Fragment } from 'react'
import anchorImage from '../assets/solution-anchor.png'
import tagImage from '../assets/solution-tag.png'
import dashboardImage from '../assets/solution-dashboard.png'
import edgeServerImage from '../assets/arch-edge-server.png'
import aiCoreImage from '../assets/arch-ai-core.png'
import middlewareImage from '../assets/arch-middleware.png'
import adaptiveCloudImage from '../assets/arch-adaptive-cloud.png'
import { useLanguage } from '../i18n/LanguageContext'

const solutionImages = [anchorImage, tagImage, dashboardImage]
const architectureImages = [edgeServerImage, aiCoreImage, middlewareImage, adaptiveCloudImage]

export default function Solutions() {
  const { t } = useLanguage()

  return (
    <section className="section dark-section page-fill" aria-labelledby="solutions-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            {/* <p className="section-label mono">02 / Solutions</p> */}
            <h2 id="solutions-title">
              {t.solutions.title[0]}
              <br />
              {t.solutions.title[1]}
            </h2>
          </div>
          <p className="section-intro">{t.solutions.intro}</p>
        </div>
        <div className="solution-grid">
          {t.solutions.items.map((solution, index) => (
            <article className="solution" key={solution.mark}>
              <figure className="solution-image media-blend">
                <img src={solutionImages[index]} alt={solution.imageAlt} />
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
          {t.solutions.architecture.map((layer, index) => (
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
  )
}
