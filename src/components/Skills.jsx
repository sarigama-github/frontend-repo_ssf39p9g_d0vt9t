import React from 'react'

const skills = [
  { group: 'Languages', items: ['C++17/20/23', 'C', 'Python', 'Rust (learning)'] },
  { group: 'Systems', items: ['Linux', 'Networking', 'Concurrency', 'Profiling'] },
  { group: 'Graphics & Games', items: ['Vulkan', 'OpenGL', 'SDL2', 'Dear ImGui'] },
  { group: 'Build & Tooling', items: ['CMake', 'Conan/Vcpkg', 'Ninja', 'GitHub Actions'] },
  { group: 'Libs', items: ['Asio', 'fmt', 'Catch2', 'GoogleTest', 'spdlog'] },
]

const Skills = () => {
  return (
    <section id="skills" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Skills</h2>
          <p className="mt-2 text-slate-300">Technologies and tools I use regularly.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div key={s.group} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-semibold text-white">{s.group}</h3>
              <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 inline-block" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
