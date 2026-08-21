import logisticsImage from '../assets/solution-logistics.jpg'
import manufacturingImage from '../assets/solution-manufacturing.jpg'
import retailHealthcareImage from '../assets/solution-retail-healthcare.jpg'
import scaleImage from '../assets/solution-scale.jpg'
import { useLanguage } from '../i18n/LanguageContext'

const solutionImages = [logisticsImage, manufacturingImage, retailHealthcareImage]

export default function Solutions() {
  const { t } = useLanguage()

  return (
    <section className="section page-fill" aria-labelledby="solutions-title">
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
              <article className="industry" key={item.number}>
                <figure className="industry-image">
                  <img src={solutionImages[index]} alt={item.imageAlt} />
                </figure>
                <span className="industry-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="industry-arrow">↗</span>
              </article>
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
  )
}
