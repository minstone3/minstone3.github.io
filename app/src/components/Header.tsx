import { NavLink } from 'react-router-dom'

type HeaderProps = {
  overlay?: boolean
}

const navItems = [
  { to: '/company', label: 'Company' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/industries', label: 'Industries' },
] as const

export default function Header({ overlay = false }: HeaderProps) {
  return (
    <header className={overlay ? 'site-header' : 'site-header site-header-solid'}>
      <div className="header-inner wrap">
        <NavLink className="logo" to="/" end>
          OASIX<span>1</span>
        </NavLink>
        <nav className="nav" aria-label="주요 메뉴">
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
        <NavLink
          className={({ isActive }) => (isActive ? 'header-cta active' : 'header-cta')}
          to="/contact"
        >
          파트너십 문의
        </NavLink>
      </div>
    </header>
  )
}
