const skills = [
  'C#',
  '.NET',
  'React',
  'TypeScript',
  'Python',
  'AI / ML',
  'WebRTC',
  'REST APIs',
  'SQL',
  'Git',
];

const experience = [
  {
    period: '2024 — Present',
    role: 'Software Development Student (AI specialization)',
    place: 'NBI/Handelsakademin, Halmstad',
  },
  {
    period: '2026 - 2026',
    role: '2nd LIA Full-Stack Developer',
    place: 'Podmanager.AI',
  },
  {
    period: '2025 — 2025',
    role: 'Full-Stack Developer LIA Intern',
    place: 'Podmanager.AI',
  },
  {
    period: '2023',
    role: 'Warehouse Worker & Picker',
    place: 'Enyroom AB, Halmstad',
  },
  {
    period: '2019 — 2020',
    role: 'Mechanic',
    place: 'Göstorps Nissan Bil AB, Laholm',
  }
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">About</span>
          <h2 className="section__title">A developer with a hands-on past.</h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I started my career as a mechanic and warehouse worker in the
              automotive industry. That background taught me how to break down
              problems, follow procedures, and ship results — skills I now apply
              to building software.
            </p>
            <p>
              Today I'm focused on full-stack development and AI. I enjoy building
              real things people can use: video conferencing apps, REST APIs,
              desktop games, and AI experiments. I'm actively looking for Work.
            </p>

            <div className="about__skills">
              <h3>Technical skills</h3>
              <ul>
                {skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="about__timeline">
            <h3>Experience</h3>
            <ol>
              {experience.map((e) => (
                <li key={e.period}>
                  <span className="about__period">{e.period}</span>
                  <strong>{e.role}</strong>
                  <span className="about__place">{e.place}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
