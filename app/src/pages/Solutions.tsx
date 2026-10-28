import { Link } from 'react-router-dom'
import logisticsImage from '../assets/solution-logistics.jpg'
import manufacturingImage from '../assets/solution-manufacturing.jpg'
import retailHealthcareImage from '../assets/solution-retail-healthcare.jpg'
import scaleImage from '../assets/solution-scale.jpg'
import robotAmrImage from '../assets/robot-amr.jpg'
import robotCartImage from '../assets/robot-cart.jpg'
import robotImsImage from '../assets/robot-ims.png'
import robotKioskImage from '../assets/robot-kiosk.png'
import { useLanguage } from '../i18n/LanguageContext'

const solutionImages = [logisticsImage, manufacturingImage, retailHealthcareImage]
const robotImages = [robotCartImage, robotImsImage, robotKioskImage]

export default function Solutions() {
  const { t } = useLanguage()
  const robot = t.solutions.robot

  return (
    <>
    <section className="section robot-solution" id="robot" aria-labelledby="robot-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="product-kicker mono">{robot.kicker}</p>
            <h2 id="robot-title">
              {robot.title[0]} {robot.title[1]}
            </h2>
          </div>
          <p className="section-intro">{robot.intro}</p>
        </div>

        <div className="robot-stage">
          <figure className="robot-visual">
            <img src={robotAmrImage} alt={robot.imageAlt} />
          </figure>
          <ol className="robot-loop">
            {robot.loop.map((step) => (
              <li key={step.number}>
                <span className="mono">{step.number}</span>
                <div>
                  <strong>{step.title}</strong>
                  <span>{step.note}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="robot-grid">
          {robot.items.map((item, index) => (
            <article className="robot-card" key={item.title}>
              <figure className={index === 0 ? 'robot-card-image' : 'robot-card-image is-ui'}>
                <img src={robotImages[index]} alt={item.imageAlt} />
              </figure>
              <div className="robot-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="robot-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>

    <section className="section" id="industries" aria-labelledby="solutions-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h2 id="solutions-title">
              {t.solutions.title[0]}
              <br />
              {t.solutions.title[1]}
            </h2>
          </div>
          <p className="section-intro">{t.solutions.intro}</p>
        </div>
        <div className="industries">
          <div className="industry-list">
            {t.solutions.items.map((item, index) => (
              <Link className="industry" to="/contact" key={item.number}>
                <figure className="industry-image">
                  <img src={solutionImages[index]} alt={item.imageAlt} />
                </figure>
                <span className="industry-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="industry-arrow">↗</span>
              </Link>
            ))}
          </div>
          <figure className="stat">
            <img src={scaleImage} alt={t.solutions.statAlt} />
            <div className="stat-copy">
              <strong>10,000+</strong>
              <span>{t.solutions.stat}</span>
            </div>
          </figure>
        </div>
      </div>
    </section>
    </>
  )
}
