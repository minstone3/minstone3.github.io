import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import LanguageSwitch from './LanguageSwitch'
import { useLanguage } from '../i18n/LanguageContext'

export default function Header() {
  const { t } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const [productsOpen, setProductsOpen] = useState(false)
  const productsMenuRef = useRef<HTMLDivElement>(null)
  const productsActive = location.pathname.startsWith('/products')
  const hash = location.hash

  useEffect(() => {
    if (!productsOpen) return

    const onPointerDown = (event: PointerEvent) => {
      if (!productsMenuRef.current?.contains(event.target as Node)) {
        setProductsOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setProductsOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [productsOpen])

  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <NavLink className="logo" to="/" end aria-label={t.nav.homeAria}>
          <Logo />
        </NavLink>
        <nav className="nav" aria-label={t.nav.menuAria}>
          <NavLink to="/company" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            {t.nav.company}
          </NavLink>
          <div className="nav-item" ref={productsMenuRef}>
            <button
              type="button"
              className={productsActive || productsOpen ? 'active' : undefined}
              aria-expanded={productsOpen}
              aria-haspopup="true"
              aria-controls="products-menu"
              onClick={() => {
                setProductsOpen((open) => !open)
                if (location.pathname !== '/products') {
                  navigate('/products')
                }
              }}
            >
              {t.nav.products}
            </button>
            <div
              className="nav-menu"
              id="products-menu"
              hidden={!productsOpen}
              role="menu"
              aria-label={t.nav.productsMenuAria}
            >
              <NavLink
                to="/products#hardware"
                role="menuitem"
                className={() => (hash === '#hardware' || hash === '' ? 'active' : undefined)}
                onClick={() => setProductsOpen(false)}
              >
                {t.nav.hardware}
              </NavLink>
              <div className="nav-menu-children">
                {t.products.items.map((product) => (
                  <NavLink
                    key={product.id}
                    to={`/products#${product.id}`}
                    role="menuitem"
                    className={() =>
                      location.hash === `#${product.id}` ? 'nav-menu-sub active' : 'nav-menu-sub'
                    }
                    onClick={() => setProductsOpen(false)}
                  >
                    {product.title}
                  </NavLink>
                ))}
              </div>
              <NavLink
                to="/products#software"
                role="menuitem"
                className={() =>
                  hash === '#software' || t.products.software.nav.some((item) => hash === `#${item.id}`)
                    ? 'active'
                    : undefined
                }
                onClick={() => setProductsOpen(false)}
              >
                {t.nav.software}
              </NavLink>
              <div className="nav-menu-children">
                {t.products.software.nav.map((item) => (
                  <NavLink
                    key={item.id}
                    to={`/products#${item.id}`}
                    role="menuitem"
                    className={() =>
                      location.hash === `#${item.id}` ? 'nav-menu-sub active' : 'nav-menu-sub'
                    }
                    onClick={() => setProductsOpen(false)}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <NavLink to="/technology" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            {t.nav.technology}
          </NavLink>
          <NavLink to="/solutions" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            {t.nav.solutions}
          </NavLink>
          <NavLink to="/news" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            {t.nav.news}
          </NavLink>
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
