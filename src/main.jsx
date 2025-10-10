import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './pages/shared.css'
import Header from './components/header.jsx'
import HomePage from './pages/Home.jsx'
import ShopPage from './pages/Shop.jsx'
import FormPage from './pages/Form.jsx'
import Footer from './components/footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/shop" element={<ShopPage />}/>
        <Route path="/form" element={<FormPage />}/>
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </HashRouter>
  </StrictMode>,
)