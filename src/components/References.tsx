import { references, type Reference } from '../data/references';

function ReferenceCard({ ref: r }: { ref: Reference }) {
  return (
    <article className="ref-card">
      <div className="ref-card__header">
        <div className="ref-card__avatar" aria-hidden="true">
          {r.name.charAt(0)}
        </div>
        <div>
          <h3 className="ref-card__name">{r.name}</h3>
          <p className="ref-card__role">
            {r.role} &middot; {r.company}
          </p>
        </div>
      </div>

      <p className="ref-card__relation">{r.relation}</p>

      <ul className="ref-card__contacts">
        {r.email && (
          <li>
            <a href={`mailto:${r.email}`} className="ref-card__link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {r.email}
            </a>
          </li>
        )}
        {r.phone && (
          <li>
            <a href={`tel:${r.phone.replace(/\s/g, '')}`} className="ref-card__link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
              </svg>
              {r.phone}
            </a>
          </li>
        )}
      </ul>
    </article>
  );
}

export default function References() {
  return (
    <section id="references" className="references">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">References</span>
          <h2 className="section__title">People I've worked with.</h2>
          <p className="section__lead">
            Available on request. Feel free to reach out directly.
          </p>
        </div>

        <div className="references__grid">
          {references.map((r) => (
            <ReferenceCard key={r.id} ref={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
