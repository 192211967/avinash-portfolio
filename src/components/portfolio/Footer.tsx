import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-accent py-8 border-t border-border">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Copyright */}
          <p className="text-sm xl:text-base text-muted-foreground">
            © {currentYear} Kasipathi Avinash Reddy. All rights reserved.
          </p>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> by Avinash Reddy
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 xl:gap-6 text-sm">
            <a
              href="#home"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
