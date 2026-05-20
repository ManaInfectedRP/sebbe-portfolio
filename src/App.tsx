import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { Project } from './data/projects';

export default function App() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects onOpen={setActive} />
        <References />
        <Contact />
      </main>
      <Footer />
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </>
  );
}
