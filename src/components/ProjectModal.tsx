import { useEffect, useRef } from 'react';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeBtn}
          type="button"
          className="modal__close"
          aria-label="Close"
          onClick={onClose}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal__media">
          <img src={project.image} alt={`${project.title} cover`} />
        </div>

        <div className="modal__body">
          <div className="modal__head">
            <span className="modal__year">{project.year}</span>
            <h2 id="modal-title" className="modal__title">
              {project.title}
              {project.isPrivate && (
                <span className="modal__badge" title="Private repository">
                  Private
                </span>
              )}
            </h2>
            <p className="modal__tagline">{project.tagline}</p>
          </div>

          <p className="modal__desc">{project.description}</p>

          <div className="modal__section">
            <h3>Highlights</h3>
            <ul className="modal__list">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="modal__section">
            <h3>Tech stack</h3>
            <ul className="modal__tech">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="modal__actions">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                View on GitHub
              </a>
            ) : (
              <span className="modal__private">
                Private repository — source available on request.
              </span>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
