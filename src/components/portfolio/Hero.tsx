import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent to-background opacity-50" />

      <div className="container mx-auto px-4 xl:px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
            <img
              src="https://miaoda-site-img.s3cdn.medo.dev/images/ed6e067d-cf56-418e-8297-c7a60cf239c0.jpg"
              alt="Kasipathi Avinash Reddy"
              className="relative w-48 h-48 xl:w-64 xl:h-64 rounded-full object-cover border-4 border-card shadow-2xl animate-float"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl xl:text-6xl font-bold">
              <span className="gradient-text">Kasipathi Avinash Reddy</span>
            </h1>
            <p className="text-xl xl:text-2xl text-muted-foreground font-medium">
              Computer Science Engineer | Java & Android Developer
            </p>
          </div>

          {/* Tagline */}
          <p className="text-base xl:text-lg text-foreground max-w-2xl leading-relaxed">
            B.Tech CSE Graduate skilled in Java, Android, and Web Development. 
            Eager to apply technical knowledge to real-world projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xl:flex-row gap-4 mt-4">
            <Button
              size="lg"
              className="transition-smooth hover:scale-105 glow-primary"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="transition-smooth hover:scale-105"
              onClick={() => {
                const projectsSection = document.querySelector('#projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Projects
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
