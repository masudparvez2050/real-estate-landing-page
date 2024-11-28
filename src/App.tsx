import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Properties } from './components/Properties';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Properties />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;