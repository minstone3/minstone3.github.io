import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section className="contact page-fill" aria-labelledby="contact-title">
      <div className="wrap">
        <div>
          <p className="mono">{t.contact.kicker}</p>
          <h2 id="contact-title">
            {t.contact.title[0]}
            <br />
            {t.contact.title[1]}
          </h2>
        </div>
        <div>
          <p>{t.contact.copy}</p>
          <a className="button" href="mailto:contact@oaxis.co.kr">
            contact@oaxis.co.kr
          </a>
        </div>
      </div>
    </section>
  )
}
