import { useMemo, useState } from 'react'
import { projects, categories } from './data/projects'
import { siteConfig } from './data/siteConfig'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'

export default function App() {
  const [selected, setSelected] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <div className="app">
      {/* Top bar */}
      <header className="topbar">
        <div className="container topbar__inner">
          <div className="brand">
            <span className="brand__logo">🎓</span>
            <span className="brand__name">{siteConfig.brand}</span>
          </div>
          <a className="btn btn--sm btn--phone" href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
            📞 {siteConfig.phone}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">{siteConfig.tagline}</h1>
          <p className="hero__sub">
            Browse ready-to-submit final year projects for CSE, IT, ECE & more. Click any project to
            see full details, price and contact us instantly.
          </p>

          <div className="search">
            <input
              type="search"
              placeholder="Search projects, tech (React, Python, IoT…)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search projects"
            />
          </div>
        </div>
      </section>

      {/* Category filter */}
      <div className="container">
        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`chip ${activeCategory === cat ? 'chip--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        {filtered.length > 0 ? (
          <div className="grid">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelected} />
            ))}
          </div>
        ) : (
          <p className="empty">No projects match your search. Try a different keyword.</p>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <strong>{siteConfig.brand}</strong>
            <p>{siteConfig.location}</p>
          </div>
          <div className="footer__contact">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>📞 {siteConfig.phone}</a>
            <a href={`tel:${siteConfig.phone2.replace(/\s/g, '')}`}>📞 {siteConfig.phone2}</a>
            <a href={`mailto:${siteConfig.email}`}>✉️ {siteConfig.email}</a>
          </div>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
        </p>
      </footer>

      {/* Details modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
