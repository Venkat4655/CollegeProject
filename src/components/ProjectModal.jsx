import { useEffect } from 'react'
import { formatINR } from '../utils/format'
import { siteConfig } from '../data/siteConfig'

export default function ProjectModal({ project, onClose }) {
  // Close on Escape key + lock body scroll while open.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  const waText = encodeURIComponent(
    `Hi, I'm interested in the project "${project.title}" (${formatINR(project.price)}). Please share more details.`,
  )
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${waText}`
  const mailLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    'Enquiry: ' + project.title,
  )}`

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="modal__header">
          <span className="modal__emoji" aria-hidden="true">
            {project.image}
          </span>
          <div>
            <span className="card__category">{project.category}</span>
            <h2 className="modal__title">{project.title}</h2>
          </div>
        </div>

        <div className="modal__price-row">
          <span className="modal__price">{formatINR(project.price)}</span>
          <span className="modal__price-note">Includes source code, report & support</span>
        </div>

        <p className="modal__desc">{project.description}</p>

        <div className="modal__grid">
          <section>
            <h4>Key Features</h4>
            <ul>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>

          <section>
            <h4>You Get</h4>
            <ul>
              {project.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="modal__tech">
          {project.tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="modal__contact">
          <h4>Contact to Order</h4>
          <div className="modal__contact-buttons">
            <a className="btn btn--whatsapp" href={waLink} target="_blank" rel="noreferrer">
              💬 WhatsApp
            </a>
            <a className="btn btn--phone" href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
              📞 {siteConfig.phone}
            </a>
            <a className="btn btn--phone" href={`tel:${siteConfig.phone2.replace(/\s/g, '')}`}>
              📞 {siteConfig.phone2}
            </a>
            <a className="btn btn--email" href={mailLink}>
              ✉️ Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
