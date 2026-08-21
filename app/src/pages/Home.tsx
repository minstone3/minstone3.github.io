import { Link } from 'react-router-dom'
import heroImage from '../assets/home-hero.jpg'
import { useLanguage } from '../i18n/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
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
          <Link className="button" to="/technology">
            {t.home.cta}
          </Link>
          <p className="hero-note">{t.home.note}</p>
        </div>
      </div>
    </section>
  )
}
