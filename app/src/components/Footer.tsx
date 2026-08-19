import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer>
      <div className="wrap">
        <NavLink className="footer-logo" to="/" end aria-label={t.nav.homeAria}>
          <Logo />
        </NavLink>
        <span className="mono">{t.footer.tagline}</span>
      </div>
    </footer>
  )
}
