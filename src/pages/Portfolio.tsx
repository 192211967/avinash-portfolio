import RainbowParticles from '@/components/ui/rainbow-particles';
import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Achievements from '@/components/portfolio/Achievements';
import Education from '@/components/portfolio/Education';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Rainbow Particle Effect */}
      <RainbowParticles />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
