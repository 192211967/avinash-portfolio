import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Code2,
  Smartphone,
  Database,
  Wrench,
  Brain,
  MessageSquare,
} from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['Java with OOP', 'Python', 'PHP'],
    color: 'from-primary to-blue-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    skills: ['Android (Java)', 'XML Layouts', 'Mobile UI/UX'],
    color: 'from-secondary to-purple-500',
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MySQL', 'Database Design', 'SQL Queries'],
    color: 'from-chart-3 to-teal-500',
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: ['Figma', 'IntelliJ IDEA', 'MySQL Workbench', 'Git'],
    color: 'from-chart-4 to-pink-500',
  },
  {
    icon: Brain,
    title: 'Additional Technologies',
    skills: ['OpenCV', 'TensorFlow', 'Machine Learning', 'Deep Learning'],
    color: 'from-chart-5 to-green-500',
  },
  {
    icon: MessageSquare,
    title: 'Soft Skills',
    skills: ['Communication', 'Time Management', 'Adaptability', 'Teamwork'],
    color: 'from-primary to-secondary',
  },
];

export default function Skills() {
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
      id="skills"
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-base xl:text-lg max-w-3xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="glass h-full hover:shadow-2xl transition-smooth hover:scale-105 group cursor-pointer">
                <CardContent className="p-6 xl:p-8">
                  {/* Icon Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-smooth`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg xl:text-xl">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
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
