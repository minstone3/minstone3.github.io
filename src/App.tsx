import Header from './components/Header'
import Hero from './components/Hero'
import Company from './components/Company'
import Solutions from './components/Solutions'
import Industries from './components/Industries'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
