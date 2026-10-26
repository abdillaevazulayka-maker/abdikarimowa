import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Accommodation from './pages/Accommodation'
import Meals from './pages/Meals'
import Supervision from './pages/Supervision'
import Education from './pages/Education'
import GalleryPage from './pages/GalleryPage'
import FAQ from './pages/FAQ'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/supervision" element={<Supervision />} />
          <Route path="/education" element={<Education />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
