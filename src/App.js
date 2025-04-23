
import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Features from './Components/Features'
import Servicespage from './Components/Servicespage'
import Price from './Components/Price'
import Faq from './Components/Faq'

const App = () => {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Features />} />
        <Route path="/service" element={<Servicespage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/price" element={<Price />} />
        <Route path="/faq" element={<Faq />} />
        
      </Routes>
     </Router>
    </>
  )
}

export default App
