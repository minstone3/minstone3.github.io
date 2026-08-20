import factoryImage from '../assets/company-factory.jpg'
import precisionImage from '../assets/value-precision.png'
import efficiencyImage from '../assets/value-efficiency.png'
import autonomyImage from '../assets/value-autonomy.png'
import { useLanguage } from '../i18n/LanguageContext'

const valueImages = [precisionImage, efficiencyImage, autonomyImage]

export default function Company() {
  const { t } = useLanguage()

  return (
    <section className="section page-fill" aria-labelledby="company-title">
      <div className="wrap">
        <div className="company-intro">
          <div>
            {/* <p className="section-label mono">01 / Company</p> */}
            <h2 id="company-title">
              {t.company.title[0]}
              <br />
              {t.company.title[1]}
            </h2>
            <p className="section-intro">{t.company.intro}</p>
          </div>
          <figure className="company-visual media-blend">
            <img src={factoryImage} alt={t.company.factoryAlt} />
          </figure>
        </div>
        <div className="values">
          {t.company.values.map((value, index) => (
            <article className="value" key={value.number}>
              <figure className="value-image media-blend">
                <img src={valueImages[index]} alt={value.imageAlt} />
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
