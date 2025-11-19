import React from 'react';

const features = [
  {
    title: 'Residential',
    desc: 'Tailored interiors for apartments, penthouses, and townhomes with a focus on light, flow, and materiality.',
  },
  {
    title: 'Commercial',
    desc: 'Brand-forward spaces for offices, hospitality, and retail — blending functionality with a distinct aesthetic.',
  },
  {
    title: 'Renovations',
    desc: 'From concept to completion, we modernize legacy spaces with precise planning and artisanal finishes.',
  },
];

function Features() {
  return (
    <section className="relative bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:bg-white/10">
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
