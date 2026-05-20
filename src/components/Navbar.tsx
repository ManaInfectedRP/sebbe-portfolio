import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#references', label: 'References' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <img
            src="/me.jpg"
            alt="Sebastian Larsson"
            className="nav__logo"
            width="34"
            height="34"
          />
          <span className="nav__name">Sebastian Larsson</span>
        </a>
        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/ManaInfectedRP"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__cta"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
