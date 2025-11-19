import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur px-4 py-3">
            <a href="#" className="text-white font-semibold tracking-wide">Aurelia Interiors</a>
            <nav className="hidden md:flex items-center gap-6 text-white/80">
              <a href="#portfolio" className="hover:text-white">Work</a>
              <a href="#contact" className="hover:text-white">Contact</a>
              <a href="#about" className="hover:text-white">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero with Spline background */}
      <Hero />

      {/* Feature blocks */}
      <Features />

      {/* Portfolio grid */}
      <Portfolio />

      {/* Contact form */}
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between text-white/60">
          <p>© {new Date().getFullYear()} Aurelia Interiors. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Pinterest</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
