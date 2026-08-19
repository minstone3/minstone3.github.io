import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function Layout() {
  const { pathname } = useLocation()
  const overlay = pathname === '/'

  return (
    <>
      <ScrollToTop />
      <Header overlay={overlay} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
