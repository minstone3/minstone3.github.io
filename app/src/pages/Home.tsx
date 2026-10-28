import { Link } from 'react-router-dom'
import heroImage from '../assets/home-hero.jpg'
import logisticsImage from '../assets/solution-logistics.jpg'
import manufacturingImage from '../assets/solution-manufacturing.jpg'
import retailHealthcareImage from '../assets/solution-retail-healthcare.jpg'
import robotAmrImage from '../assets/robot-amr.jpg'
import { useLanguage } from '../i18n/LanguageContext'

const solutionImages = [logisticsImage, manufacturingImage, retailHealthcareImage]

export default function Home() {
  const { t } = useLanguage()
  const robot = t.solutions.robot

  return (
    <>
      <section className="hero page-fill" aria-labelledby="hero-title">
        <figure className="hero-visual">
          <img src={heroImage} alt={t.home.visualAlt} />
        </figure>
        <div className="wrap">
          <div className="hero-copy-col">
            <p className="kicker mono">{t.home.kicker}</p>
            <h1 id="hero-title">
              {t.home.title[0]}
              <br />
              <em>{t.home.title[1]}</em>
            </h1>
            <p className="hero-copy">{t.home.copy}</p>
            <ul className="hero-proofs">
              {t.home.proofs.map((proof) => (
                <li key={proof} className="mono">
                  {proof}
                </li>
              ))}
            </ul>
            <Link className="button" to="/solutions">
              {t.home.cta}
            </Link>
            <p className="hero-note">{t.home.note}</p>
          </div>
        </div>
      </section>

      <section className="section robot-solution" aria-labelledby="home-robot-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="product-kicker mono">{robot.kicker}</p>
              <h2 id="home-robot-title">
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
          <Link className="robot-jump mono" to="/solutions">
            {robot.jump}
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="home-industries-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2 id="home-industries-title">
                {t.solutions.title[0]}
                <br />
                {t.solutions.title[1]}
              </h2>
            </div>
            <p className="section-intro">{t.solutions.intro}</p>
          </div>
          <div className="industry-list home-industries">
            {t.solutions.items.map((item, index) => (
              <Link className="industry" to="/solutions#industries" key={item.number}>
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
        </div>
      </section>
    </>
  )
}
