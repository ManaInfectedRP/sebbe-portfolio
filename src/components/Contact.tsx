export default function Contact() {
  const links = [
    {
      label: 'Email',
      value: 'sebbelarsson9601@gmail.com',
      href: 'mailto:sebbelarsson9601@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sebastian-larsson',
      href: 'https://www.linkedin.com/in/sebastian-larsson-b45803246/',
    },
    {
      label: 'GitHub',
      value: 'github.com/ManaInfectedRP',
      href: 'https://github.com/ManaInfectedRP',
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Contact</span>
          <h2 className="section__title">Let's build something together.</h2>
          <p className="section__lead">
            Looking for an AI-focused developer for an LIA internship in 2026 — or
            just want to chat about a project? Reach out.
          </p>
        </div>

        <ul className="contact__list">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                <div className="contact__text">
                  <span className="contact__label">{l.label}</span>
                  <span className="contact__value">{l.value}</span>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
