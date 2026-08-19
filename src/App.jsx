import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Company from './components/Company.jsx'
import Solutions from './components/Solutions.jsx'
import Industries from './components/Industries.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Company />
        <Solutions />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
