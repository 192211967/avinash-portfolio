import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'reddyavinash748@gmail.com',
    href: 'mailto:reddyavinash748@gmail.com',
    color: 'from-primary to-blue-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 93929 57011',
    href: 'tel:+919392957011',
    color: 'from-chart-3 to-teal-600',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://linkedin.com/in/avinash-reddy-86146b252',
    color: 'from-chart-1 to-blue-700',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View GitHub Profile',
    href: 'https://github.com/192211967',
    color: 'from-foreground to-gray-700',
  },
];

export default function Contact() {
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
      id="contact"
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-base xl:text-lg max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, projects, or collaborations
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <div
                key={contact.label}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="glass h-full hover:shadow-2xl transition-smooth group">
                  <CardContent className="p-6 xl:p-8">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center group-hover:scale-110 transition-smooth shadow-lg flex-shrink-0`}
                      >
                        <contact.icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-muted-foreground mb-1">
                          {contact.label}
                        </p>
                        <a
                          href={contact.href}
                          target={contact.label === 'LinkedIn' || contact.label === 'GitHub' ? '_blank' : undefined}
                          rel={contact.label === 'LinkedIn' || contact.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                          className="text-base xl:text-lg font-medium text-foreground hover:text-primary transition-smooth break-words"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Card className="glass text-center">
              <CardContent className="p-8 xl:p-12">
                <h3 className="text-2xl xl:text-3xl font-bold mb-4">
                  Let's Work Together
                </h3>
                <p className="text-base xl:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm actively seeking opportunities to contribute to innovative projects 
                  and grow as a software developer. Feel free to reach out!
                </p>
                <div className="flex flex-col xl:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="transition-smooth hover:scale-105 glow-primary"
                    asChild
                  >
                    <a href="mailto:reddyavinash748@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="transition-smooth hover:scale-105"
                    asChild
                  >
                    <a
                      href="https://linkedin.com/in/avinash-reddy-86146b252"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
