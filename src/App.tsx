import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Pricing from './pages/Pricing';
import Portfolio from './pages/Portfolio';
import Teams from './pages/Teams';
import Warranty from './pages/Warranty';
import ServiceArea from './pages/ServiceArea';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/warranty" element={<Warranty />} />
              <Route path="/service-area" element={<ServiceArea />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reviews" element={<Reviews />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppWidget />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;