import logisticsImage from '../assets/industry-logistics.png'
import manufacturingImage from '../assets/industry-manufacturing.png'
import retailHealthcareImage from '../assets/industry-retail-healthcare.png'
import scaleImage from '../assets/industry-scale.png'
import { useLanguage } from '../i18n/LanguageContext'

const industryImages = [logisticsImage, manufacturingImage, retailHealthcareImage]

export default function Industries() {
  const { t } = useLanguage()

  return (
    <section className="section page-fill" aria-labelledby="industries-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            {/* <p className="section-label mono">03 / Industries</p> */}
            <h2 id="industries-title">
              {t.industries.title[0]}
              <br />
              {t.industries.title[1]}
            </h2>
          </div>
          <p className="section-intro">{t.industries.intro}</p>
        </div>
        <div className="industries">
          <div className="industry-list">
            {t.industries.items.map((industry, index) => (
              <article className="industry" key={industry.number}>
                <figure className="industry-image media-blend">
                  <img src={industryImages[index]} alt={industry.imageAlt} />
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
            <img src={scaleImage} alt={t.industries.statAlt} />
            <div className="stat-copy">
              <strong>10,000+</strong>
              <span>{t.industries.stat}</span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
