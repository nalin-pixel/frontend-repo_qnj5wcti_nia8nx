import React, { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });
      const data = await res.json();
      if (res.ok) setStatus('We received your message. We will get back to you shortly.');
      else setStatus(data?.detail || 'Something went wrong.');
    } catch (err) {
      setStatus('Network error. Please try again.');
    }
  }

  return (
    <section id="contact" className="bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold">Book a Consultation</h2>
        <p className="text-white/70 mt-2 mb-8">Tell us about your project and we’ll arrange a call.</p>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/80">Name</label>
            <input name="name" required placeholder="Your name" className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/80">Email</label>
            <input type="email" name="email" required placeholder="you@domain.com" className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-white/80">Message</label>
            <textarea name="message" required rows="5" placeholder="Tell us about your space, timeline, and goals" className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-medium">Send Message</button>
            <span className="text-sm text-white/70">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;