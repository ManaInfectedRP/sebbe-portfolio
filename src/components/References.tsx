import { references, type Reference } from '../data/references';

const MY_EMAIL = 'sebbelarsson9601@gmail.com';

function ReferenceCard({ reference: r }: { reference: Reference }) {
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

      <a
        href={`mailto:${MY_EMAIL}?subject=Reference request — ${r.name}`}
        className="ref-card__request"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        Available on request
      </a>
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
            Contact details available on request — reach out via email.
          </p>
        </div>

        <div className="references__grid">
          {references.map((r) => (
            <ReferenceCard key={r.id} reference={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
