import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! I will get back to you soon.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Contact</h2>
          <p className="mt-2 text-slate-300">Have a project in mind? Let’s talk.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl bg-slate-900/60 px-3 py-2 text-white ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-400 outline-none" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl bg-slate-900/60 px-3 py-2 text-white ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-400 outline-none" />
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-300">Message</label>
            <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl bg-slate-900/60 px-3 py-2 text-white ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-400 outline-none" />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-white/20">
              Send Message
            </button>
            <p className="text-sm text-slate-300">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
