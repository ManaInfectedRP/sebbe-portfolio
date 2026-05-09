export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">Hi, I'm Sebastian Larsson</p>
          <h1 className="hero__title">
            Full-Stack Developer<span className="hero__amp"> &amp; </span>
            <span className="hero__accent">AI Enthusiast</span>
          </h1>
          <p className="hero__sub">
            Active full-stack developer and AI enthusiast based in
            Halmstad, Sweden. Looking for Work. I work with
            React, C#, .NET, Python and modern AI tooling.
          </p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View my work
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
          <div className="hero__meta">
            <span>Based in Halmstad, SE</span>
            <span aria-hidden="true">·</span>
            <span>Open to Work</span>
          </div>
        </div>

        <div className="hero__portrait" aria-hidden="true">
          <div className="hero__portrait-frame">
            <img src="/me.jpg" alt="" width="1200" height="1600" />
          </div>
          <div className="hero__portrait-glow"></div>
        </div>
      </div>
    </section>
  );
}
