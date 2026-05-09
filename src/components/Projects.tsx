import { projects, type Project } from '../data/projects';

interface Props {
  onOpen: (p: Project) => void;
}

export default function Projects({ onOpen }: Props) {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Projects</span>
          <h2 className="section__title">Selected work</h2>
          <p className="section__lead">
            Click any card to open the full case study.
          </p>
        </div>

        <ul className="projects__grid">
          {projects.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                className="card"
                onClick={() => onOpen(p)}
                aria-label={`Open details for ${p.title}`}
              >
                <div className="card__media">
                  <img src={p.image} alt={`${p.title} cover`} loading="lazy" />
                </div>
                <div className="card__body">
                  <div className="card__top">
                    <h3 className="card__title">
                      {p.title}
                      {p.isPrivate && (
                        <span className="card__badge" title="Private repository">
                          Private
                        </span>
                      )}
                    </h3>
                    <span className="card__year">{p.year}</span>
                  </div>
                  <p className="card__tagline">{p.tagline}</p>
                  <ul className="card__tech">
                    {p.tech.slice(0, 4).map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <span className="card__cta">
                    Read more
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
