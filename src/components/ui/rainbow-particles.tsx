import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

const RAINBOW_COLORS = [
  'rgba(167, 139, 250, 0.8)', // violet
  'rgba(96, 165, 250, 0.8)',  // blue
  'rgba(34, 211, 238, 0.8)',  // cyan
  'rgba(244, 114, 182, 0.8)', // pink
  'rgba(134, 239, 172, 0.8)', // light green
];

export default function RainbowParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, moved: false });
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        moved: true,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create particles
    const createParticles = (x: number, y: number) => {
      const particleCount = window.innerWidth < 768 ? 2 : 3; // Fewer particles on mobile
      
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.5 + 0.2;
        
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: Math.random() * 60 + 40,
          color: RAINBOW_COLORS[Math.floor(Math.random() * RAINBOW_COLORS.length)],
          size: Math.random() * 3 + 2,
        });
      }

      // Limit total particles for performance
      const maxParticles = window.innerWidth < 768 ? 50 : 100;
      if (particlesRef.current.length > maxParticles) {
        particlesRef.current = particlesRef.current.slice(-maxParticles);
      }
    };

    // Animation loop
    const animate = (currentTime: number = 0) => {
      const deltaTime = currentTime - lastTimeRef.current;
      
      // Throttle to ~60fps
      if (deltaTime < 16) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastTimeRef.current = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create new particles on mouse move
      if (mouseRef.current.moved) {
        createParticles(mouseRef.current.x, mouseRef.current.y);
        mouseRef.current.moved = false;
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1;

        // Apply slight gravity and friction
        particle.vy += 0.02;
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Calculate opacity based on life
        const opacity = particle.life / particle.maxLife;
        
        if (opacity <= 0) return false;

        // Draw particle with trail effect
        ctx.save();
        ctx.globalAlpha = opacity;
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();

        return true;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
