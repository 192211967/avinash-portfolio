import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Technical Skills',
    description: 'Proficient in Java, Android development, and web technologies',
  },
  {
    icon: Lightbulb,
    title: 'Quick Learner',
    description: 'Adaptable and eager to learn new technologies and frameworks',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborative mindset with strong communication skills',
  },
  {
    icon: Zap,
    title: 'Problem Solver',
    description: 'Passionate about applying technical knowledge to real challenges',
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 xl:py-24 bg-gradient-to-b from-background to-accent"
    >
      <div className="container mx-auto px-4 xl:px-8">
        <div
          className={`text-center mb-12 xl:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-base xl:text-lg max-w-3xl mx-auto">
            A passionate Computer Science graduate with a strong foundation in software development
          </p>
        </div>

        {/* Main About Content */}
        <div
          className={`max-w-4xl mx-auto mb-12 xl:mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card className="glass shadow-xl">
            <CardContent className="p-6 xl:p-8">
              <p className="text-base xl:text-lg leading-relaxed text-foreground">
                I am a recent <span className="font-semibold text-primary">Computer Science Engineering graduate</span> from 
                Saveetha School of Engineering, Chennai. My academic journey has equipped me with strong fundamentals in 
                <span className="font-semibold text-primary"> Java programming, Android development, and database management</span>.
              </p>
              <p className="text-base xl:text-lg leading-relaxed text-foreground mt-4">
                I thrive in environments that challenge me to learn and grow. My experience includes developing mobile applications, 
                implementing machine learning models, and working with modern web technologies. I am particularly passionate about 
                creating solutions that make a real-world impact.
              </p>
              <p className="text-base xl:text-lg leading-relaxed text-foreground mt-4">
                As a <span className="font-semibold text-secondary">quick learner and team-oriented individual</span>, I am eager 
                to contribute to innovative projects and continue developing my skills in a professional setting.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <Card className="glass h-full hover:shadow-xl transition-smooth hover:scale-105 cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <highlight.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
