const skills = [
  'React',
  'React Native',
  'TypeScript',
  'JavaScript',
  'HTML / CSS',
  'Tailwind CSS',
  'Vite',
  'Node.js',
  'Express',
  'FastAPI',
  'Python',
  'C#',
  '.NET',
  'REST APIs',
  'WebRTC',
  'SQL',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Unity',
  'PyTorch',
  'AI / ML',
  'Git',
];

const experience = [
  {
    period: '2026 - present',
    role: 'Founder & Full-Stack Developer',
    place: 'www.Kodstigen.se',
  },
  {
    period: '2026 - present',
    role: 'Out of Work',
    place: 'Home',
  },
  {
    period: '2024 — 2026',
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
              I’m a full-stack developer and AI enthusiast based in Halmstad, Sweden.
              I have a hands-on background in mechanics and warehouse work, which has given me a practical understanding of problem-solving and efficiency.
              My passion for technology led me to pursue software development, where I specialize in building web applications and exploring the potential of AI.
              I’m always eager to learn new technologies and take on challenges that push my skills further.
            </p>
            <p>
              Today I'm focused on full-stack development and AI.
              I enjoy building real things people can use: video conferencing apps, REST APIs, desktop games, and AI experiments.
              I'm actively looking for Work.
            </p>

            <p>
              In 2026 i founded the Website www.Kodstigen.se, where i am the Solo Developer.
              A Learning Platform for people who want to learn programming in all type of technologies.
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
