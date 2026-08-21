import visualImage from '../assets/contact-systems.jpg'
import pocImage from '../assets/contact-poc.jpg'
import integrationImage from '../assets/contact-integration.jpg'
import ventureImage from '../assets/contact-venture.jpg'
import { useLanguage } from '../i18n/LanguageContext'

const relatedImages = [pocImage, integrationImage, ventureImage]

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section className="contact page-fill" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="contact-main">
          <div className="contact-copy">
            <p className="mono">{t.contact.kicker}</p>
            <h2 id="contact-title">
              {t.contact.title[0]}
              <br />
              {t.contact.title[1]}
            </h2>
            <p>{t.contact.copy}</p>
            <a className="button" href="mailto:contact@oaxis.co.kr">
              contact@oaxis.co.kr
            </a>
          </div>
          <figure className="contact-visual">
            <img src={visualImage} alt={t.contact.visualAlt} />
          </figure>
        </div>
        <div className="contact-related">
          {t.contact.related.map((item, index) => (
            <article className="contact-related-card" key={item.title}>
              <figure className="contact-related-image">
                <img src={relatedImages[index]} alt={item.imageAlt} />
              </figure>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
