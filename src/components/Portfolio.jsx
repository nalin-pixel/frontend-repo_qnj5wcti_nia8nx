import React from 'react';

const works = [
  { id: 1, title: 'Skyline Residence', tag: 'Residential', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Atrium Workspace', tag: 'Commercial', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'Penthouse Revamp', tag: 'Renovation', img: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, title: 'Boutique Lounge', tag: 'Hospitality', img: 'https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, title: 'Minimal Loft', tag: 'Residential', img: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, title: 'Gallery Lobby', tag: 'Commercial', img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop' },
];

function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Selected Work</h2>
            <p className="text-white/70 mt-2">A glimpse into recent projects across residential and commercial spaces.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10">Start a Project</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w) => (
            <figure key={w.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={w.img} alt={w.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 via-black/0 to-transparent">
                <div>
                  <span className="text-xs text-white/80">{w.tag}</span>
                  <h3 className="text-lg font-medium">{w.title}</h3>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;