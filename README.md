# Welcome to Your Miaoda Project
Miaoda Application Link URL
    URL:https://medo.dev/projects/app-8c6fknnghekh

# Kasipathi Avinash Reddy - Portfolio Website

A clean, modern, and professional personal portfolio website showcasing skills, projects, achievements, and contact information.

## ✨ Features

### 🎨 Design Highlights
- **Custom Color Scheme**: Soft whitish-blue gradient background with deep blue and soft purple accents
- **Glassmorphism Effects**: Modern glass-like cards with backdrop blur
- **Rainbow Smoke Particles**: Interactive particle system that follows mouse cursor with smooth rainbow trails
- **Smooth Animations**: Fade-in animations on scroll using Intersection Observer API
- **Responsive Design**: Mobile-first approach with seamless adaptation from mobile to desktop

### 📱 Sections
1. **Hero Section**: Profile photo with animated floating effect, name, title, and professional tagline
2. **About Me**: Professional summary with key highlights in interactive cards
3. **Skills**: Technical skills organized by category with hover effects
4. **Projects**: Featured projects with detailed descriptions and GitHub links
   - Smart Plant Care Companion App
   - Finger Vein Detection System
5. **Achievements**: Certifications and recognitions
   - Oracle Java SE 17 Certification
   - Silver Medal in Coding Competition
   - TechFest 2025 Project Presentation
6. **Education**: Academic qualifications with percentages
7. **Contact**: Multiple contact methods with social media links
8. **Footer**: Copyright and quick navigation links

### 🎯 Technical Features
- **Performance Optimized**: 60fps animations with throttled rendering
- **Mobile Responsive**: Optimized particle count for mobile devices
- **Smooth Scrolling**: Native smooth scroll behavior
- **Interactive Elements**: Hover effects with scale transforms and glows
- **Semantic HTML**: Proper HTML5 structure for accessibility

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom utilities
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS animations + Intersection Observer API
- **Particle System**: HTML5 Canvas API

## 📂 Project Structure

```
src/
├── components/
│   ├── portfolio/
│   │   ├── Navigation.tsx      # Top navigation with smooth scroll
│   │   ├── Hero.tsx            # Hero section with profile
│   │   ├── About.tsx           # About me section
│   │   ├── Skills.tsx          # Skills showcase
│   │   ├── Projects.tsx        # Project portfolio
│   │   ├── Achievements.tsx    # Achievements & certifications
│   │   ├── Education.tsx       # Educational background
│   │   ├── Contact.tsx         # Contact information
│   │   └── Footer.tsx          # Footer component
│   └── ui/
│       └── rainbow-particles.tsx # Rainbow smoke particle effect
├── pages/
│   └── Portfolio.tsx           # Main portfolio page
├── index.css                   # Global styles & design system
└── routes.tsx                  # Route configuration
```

## 🎨 Design System

### Color Palette
- **Background**: Soft whitish-blue (HSL: 220 60% 98%)
- **Primary**: Deep blue (HSL: 221 83% 53%)
- **Secondary**: Soft purple (HSL: 258 90% 66%)
- **Accent**: Light blue (HSL: 220 50% 95%)

### Custom Utilities
- `.glass` - Glassmorphism effect with backdrop blur
- `.gradient-text` - Gradient text from primary to secondary
- `.animate-float` - Floating animation for hero image
- `.animate-fade-in` - Fade-in animation for scroll reveals
- `.glow-primary` / `.glow-secondary` - Glow effects for interactive elements

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 20
- npm ≥ 10

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev -- --host 127.0.0.1

# Alternative start command
npx vite --host 127.0.0.1
```

### Development

```bash
# Run linter
npm run lint

# Build for production
npm run build
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (default styles)
- **Desktop**: ≥ 1280px (xl: prefix)

The design uses a two-state responsive approach focusing on mobile and desktop experiences.

## 🎭 Performance Optimizations

1. **Particle System**:
   - Throttled to 60fps
   - Reduced particle count on mobile (2 vs 3 per emission)
   - Maximum particle limit (50 mobile, 100 desktop)
   - Efficient canvas rendering with requestAnimationFrame

2. **Animations**:
   - CSS-based animations for better performance
   - Intersection Observer for scroll-triggered animations
   - Hardware-accelerated transforms

3. **Images**:
   - Lazy loading for images
   - Optimized image sources

## 🔗 Contact Information

- **Email**: reddyavinash748@gmail.com
- **Phone**: +91 93929 57011
- **LinkedIn**: [linkedin.com/in/avinash-reddy-86146b252](https://linkedin.com/in/avinash-reddy-86146b252)
- **GitHub**: [github.com/192211967](https://github.com/192211967)

## 📄 License

© 2025 Kasipathi Avinash Reddy. All rights reserved.

---

Made with ❤️ by Avinash Reddy
