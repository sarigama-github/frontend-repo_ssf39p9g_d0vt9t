import React from 'react'
import { Code2, Cpu, Gauge, Boxes } from 'lucide-react'

const items = [
  {
    title: 'Realtime Job Queue',
    desc: 'C++20 networked job dispatcher with lock-free queues and epoll/kqueue backends.',
    tags: ['C++20', 'Asio', 'Linux', 'MacOS'],
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    title: 'Game Tooling Suite',
    desc: 'Cross‑platform asset pipeline tools, ImGui UI, CMake superbuild, CI integration.',
    tags: ['CMake', 'ImGui', 'Vulkan', 'Win/Linux'],
    icon: <Boxes className="h-5 w-5" />,
  },
  {
    title: 'Header‑only Utility Lib',
    desc: 'Modern utilities: small optional/result types, span, enum flags, formatting.',
    tags: ['Header‑only', 'STL', 'Testing'],
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: 'ECS Prototype',
    desc: 'Cache‑friendly entity component system benchmarked with perf and Tracy.',
    tags: ['ECS', 'Tracy', 'Perf'],
    icon: <Cpu className="h-5 w-5" />,
  },
]

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Projects</h2>
          <p className="mt-2 text-slate-300">A glimpse into systems, tools, and performance work.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <article key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition">
              <div className="flex items-center gap-3 text-white">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                  {p.icon}
                </div>
                <h3 className="font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-white/10 px-2 py-1 text-slate-200 ring-1 ring-white/15">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
