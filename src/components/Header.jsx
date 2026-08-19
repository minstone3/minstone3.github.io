export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <a className="logo" href="#home">
          OASIX<span>1</span>
        </a>
        <nav className="nav" aria-label="주요 메뉴">
          <a href="#company">Company</a>
          <a href="#solutions">Solutions</a>
          <a href="#industries">Industries</a>
        </nav>
        <a className="header-cta" href="#contact">
          파트너십 문의
        </a>
      </div>
    </header>
  )
}
