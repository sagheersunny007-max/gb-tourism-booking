import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Destinations from './components/home/Destinations';
import FeaturedStays from './components/home/FeaturedStays';
import TrustSection from './components/home/TrustSection';
import About from './components/home/About';
import Reviews from './components/home/Reviews';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="font-sans antialiased text-gray-900 bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Destinations />
          <FeaturedStays />
          <TrustSection id="guides" />
          <Reviews />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
