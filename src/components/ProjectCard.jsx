import { formatINR } from '../utils/format'

export default function ProjectCard({ project, onSelect }) {
  return (
    <button className="card" onClick={() => onSelect(project)}>
      <div className="card__media">
        <span className="card__emoji" aria-hidden="true">
          {project.image}
        </span>
        <span className="card__category">{project.category}</span>
      </div>

      <div className="card__body">
        <h3 className="card__title">{project.title}</h3>
        <p className="card__short">{project.short}</p>

        <div className="card__tech">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="card__footer">
        <span className="card__price">{formatINR(project.price)}</span>
        <span className="card__link">View details →</span>
      </div>
    </button>
  )
}
