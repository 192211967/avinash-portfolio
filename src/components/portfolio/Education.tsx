import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Saveetha School of Engineering',
    location: 'Chennai',
    year: '2026',
    percentage: '87.3%',
    icon: '🎓',
  },
  {
    degree: 'Intermediate (12th)',
    institution: 'Narayana Jr. College',
    location: 'Kadapa',
    year: '2022',
    percentage: '83.5%',
    icon: '📚',
  },
  {
    degree: 'SSC (10th)',
    institution: 'Nagarjuna Model School',
    location: 'Kadapa',
    year: '2020',
    percentage: '95.67%',
    icon: '🏫',
  },
];

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="py-16 xl:py-24 bg-gradient-to-b from-accent to-background"
    >
      <div className="container mx-auto px-4 xl:px-8">
        <div
          className={`text-center mb-12 xl:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-base xl:text-lg max-w-3xl mx-auto">
            Academic journey and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="glass hover:shadow-2xl transition-smooth group">
                <CardContent className="p-6 xl:p-8">
                  <div className="flex flex-col xl:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl xl:text-4xl group-hover:scale-110 transition-smooth shadow-lg">
                        {edu.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-2">
                        <div>
                          <h3 className="text-xl xl:text-2xl font-bold group-hover:text-primary transition-smooth">
                            {edu.degree}
                          </h3>
                          <p className="text-base xl:text-lg font-medium text-muted-foreground">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-lg xl:text-xl shadow-md">
                          <GraduationCap className="w-5 h-5" />
                          {edu.percentage}
                        </div>
                      </div>

                      <div className="flex flex-col xl:flex-row gap-4 text-sm xl:text-base text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-secondary" />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
