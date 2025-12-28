import Navbar from '@/components/Navigation/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <main>
      {/* Liquid Gradient Background */}
      <div className="liquid-gradient" />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <section id="home">
        <Hero />
      </section>

      <About />

      <Skills />

      <Projects />

      <Contact />
    </main>
  );
}
