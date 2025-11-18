import React from 'react'
import { Github, Mail, Linkedin } from 'lucide-react'

const Navbar = () => {
  const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg ring-1 ring-white/20" />
              <span className="text-sm font-semibold tracking-wide text-white/90">C++ Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/25 ring-1 ring-white/20">
                <Mail className="h-4 w-4" /> Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
