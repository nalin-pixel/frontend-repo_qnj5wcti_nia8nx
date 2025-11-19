import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/80 bg-white/10 backdrop-blur rounded-full px-3 py-1 border border-white/20">
          Luxury • Contemporary • Urban
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight">
          Interior Design For Modern Living
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-white/85">
          We craft refined, functional spaces in the heart of the city — from high-rise residences to boutique commercial interiors.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a href="#portfolio" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-lg shadow-black/20 hover:shadow-black/30 transition">View Portfolio</a>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/40 text-white hover:bg-white/10 transition">Book a Consultation</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;