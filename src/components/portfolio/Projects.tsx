import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Smart Plant Care Companion App',
    duration: 'Jan–Apr 2025',
    description:
      'Developed a comprehensive Android application for plant enthusiasts featuring automated watering schedules, plant health monitoring, and timely notifications. The app helps users maintain their plants with intelligent reminders and care tips.',
    technologies: ['Java', 'XML', 'PHP', 'MySQL', 'Figma'],
    githubUrl: 'https://github.com/192211967/PLANT',
    highlights: [
      'Automated watering schedule system',
      'Plant health check features',
      'Push notification integration',
      'User-friendly interface designed in Figma',
    ],
  },
  {
    title: 'Finger Vein Detection System',
    duration: 'Jul–Nov 2022',
    description:
      'Implemented a deep learning-based biometric authentication system using VGG neural network architecture. The system analyzes finger vein patterns for secure user identification, achieving high accuracy in authentication.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
    githubUrl: '',
    highlights: [
      'VGG model implementation for pattern recognition',
      'Image preprocessing with OpenCV',
      'High accuracy biometric authentication',
      'Secure user identification system',
    ],
  },
];

export default function Projects() {
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
      id="projects"
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base xl:text-lg max-w-3xl mx-auto">
            Real-world applications showcasing technical expertise and problem-solving skills
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="glass hover:shadow-2xl transition-smooth group">
                <CardHeader>
                  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mb-2">
                    <CardTitle className="text-2xl xl:text-3xl group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-base xl:text-lg leading-relaxed text-foreground">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="text-secondary mt-1">▸</span>
                          <span className="text-sm xl:text-base">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="px-3 py-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  {project.githubUrl && (
                    <div className="flex flex-col xl:flex-row gap-3 pt-4">
                      <Button
                        variant="default"
                        className="transition-smooth hover:scale-105 glow-primary"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          View on GitHub
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
