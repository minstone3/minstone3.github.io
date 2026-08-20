import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import Layout from './Layout'
import Home from './pages/Home'
import Company from './pages/Company'
import Products from './pages/Products'
import Technology from './pages/Technology'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/products" element={<Products />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/use-cases" element={<Navigate to="/solutions" replace />} />
            <Route path="/industries" element={<Navigate to="/solutions" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
