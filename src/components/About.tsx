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
    role: 'Full-Stack Developer & CTO',
    place: 'Vanirix',
  },
  {
    period: '2026 - present',
    role: 'Co-Founder',
    place: 'UnseenWorldsUnveiled.com',
  },
  {
    period: '2024, 2026',
    role: 'Software Development Student (AI specialization)',
    place: 'NBI/Handelsakademin, Halmstad',
  },
  {
    period: '2026 - 2026',
    role: '2nd LIA Full-Stack Developer',
    place: 'Podmanager.AI',
  },
  {
    period: '2025, 2025',
    role: 'Full-Stack Developer LIA Intern',
    place: 'Podmanager.AI',
  },
  {
    period: '2023',
    role: 'Warehouse Worker & Picker',
    place: 'Enyroom AB, Halmstad',
  },
  {
    period: '2019, 2020',
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
              I enjoy building real things people can use: SEO and analytics tools, video conferencing apps, REST APIs and AI experiments.
            </p>

            <p>
              In 2026 I joined Vanirix, a growth intelligence company, as Full-Stack Developer and CTO.
              I built the public website vanirix.com and lead the development of Vanirix Orbital Command, a tools platform for SEO, analytics and business intelligence.
              It offers more than 25 tools, including SEO Intelligence, Site Intelligence, BI Studio, Visitor Lab and Lead Intelligence, with team workspaces and role-based access.
              It is built with Next.js, React, TypeScript, PostgreSQL with Drizzle and the Anthropic API.
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
                <li key={`${e.period}-${e.place}`}>
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
