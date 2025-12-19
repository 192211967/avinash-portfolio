import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Medal, Presentation } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Oracle Java SE 17 Certification',
    description: 'Certified Java SE 17 Developer by Oracle',
    category: 'Certification',
    color: 'from-primary to-blue-600',
  },
  {
    icon: Medal,
    title: 'Silver Medal – Coding Competition',
    description: 'Secured 2nd place in college-level coding competition',
    category: 'Achievement',
    color: 'from-chart-3 to-teal-600',
  },
  {
    icon: Presentation,
    title: 'TechFest 2025 Project Presentation',
    description: 'Android project selected for presentation at TechFest 2025',
    category: 'Recognition',
    color: 'from-secondary to-purple-600',
  },
];

export default function Achievements() {
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
      id="achievements"
      ref={sectionRef}
      className="py-16 xl:py-24 bg-background"
    >
      <div className="container mx-auto px-4 xl:px-8">
        <div
          className={`text-center mb-12 xl:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-base xl:text-lg max-w-3xl mx-auto">
            Recognition and certifications that validate my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="glass h-full hover:shadow-2xl transition-smooth hover:scale-105 group cursor-pointer">
                <CardContent className="p-6 xl:p-8 flex flex-col items-center text-center gap-4">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-smooth shadow-lg`}
                  >
                    <achievement.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Category Badge */}
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {achievement.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-bold text-lg xl:text-xl leading-tight">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm xl:text-base text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
