import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import LanguageSwitch from './LanguageSwitch'
import { useLanguage } from '../i18n/LanguageContext'

export default function Header() {
  const { t } = useLanguage()
  const navItems = [
    { to: '/company', label: t.nav.company },
    { to: '/solutions', label: t.nav.solutions },
    { to: '/industries', label: t.nav.industries },
  ]

  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <NavLink className="logo" to="/" end aria-label={t.nav.homeAria}>
          <Logo />
        </NavLink>
        <nav className="nav" aria-label={t.nav.menuAria}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitch />
          <NavLink
            className={({ isActive }) => (isActive ? 'header-cta active' : 'header-cta')}
            to="/contact"
          >
            {t.nav.contact}
          </NavLink>
        </div>
      </div>
    </header>
  )
}
