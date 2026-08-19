import { NavLink } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <NavLink className="footer-logo" to="/" end aria-label="OAXIS 홈">
          <Logo />
        </NavLink>
        <span className="mono">AI SPATIAL INTELLIGENCE & REAL-TIME LOCATION PLATFORM</span>
      </div>
    </footer>
  )
}
