import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Background gradient accents */}
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div className="absolute -top-32 inset-x-0 h-[500px] bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 inset-x-0 h-[300px] bg-gradient-to-t from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} C++ Portfolio. All rights reserved.</p>
          <div className="text-xs text-slate-500">Built with modern web tech and a 3D interactive hero.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
