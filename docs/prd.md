# Personal Portfolio Website Requirements Document

## 1. Website Overview

### 1.1 Website Name
Kasipathi Avinash Reddy - Portfolio

### 1.2 Website Description
A clean, modern, and professional personal portfolio website for a Computer Science Engineering fresher, showcasing skills, projects, achievements, and contact information to potential employers.

### 1.3 Target Users
Recruiters, hiring managers, and professionals in the IT industry looking to evaluate a fresher candidate's profile.

## 2. Core Features

### 2.1 Hero Section
- Display uploaded profile photo as main hero image
- Name: Kasipathi Avinash Reddy
- Title: Computer Science Engineer | Java & Android Developer
- Professional tagline:'B.Tech CSE Graduate skilled in Java, Android, and Web Development. Eager to apply technical knowledge to real-world projects.'
- Smooth scroll-down indicator

### 2.2 About Me Section
- Professional summary highlighting:\n  - Computer Science graduate background
  - Core skills: Java, web development, databases
  - Key traits: Adaptable, quick learner, team-oriented
  - Passion for applying technical knowledge to real-world challenges

### 2.3 Skills Section
- Programming Languages: Java with Object-Oriented Programming
- Mobile Development: Android (Java, XML)\n- Databases: MySQL
- Tools & Platforms: Figma, IntelliJ IDEA, MySQL Workbench, PHP
- Additional: Python, OpenCV, TensorFlow\n- Soft Skills: Communication, Time Management, Adaptability
- Display as interactive skill cards with icons

### 2.4 Projects Section
**Project 1: Smart Plant Care Companion App**
- Duration: Jan–Apr 2025
- Description: Android app for plant care with watering schedules, health checks, and notifications\n- Technologies: Java, XML, PHP, MySQL, Figma\n- GitHub Link: https://github.com/192211967/PLANT
\n**Project 2: Finger Vein Detection System**
- Duration: Jul–Nov 2022
- Description: Deep learning (VGG) model for biometric authentication using vein patterns
- Technologies: Python, OpenCV, TensorFlow
\n### 2.5 Achievements & Certifications Section
- Oracle Java SE 17 Certification
- Silver Medal – Coding Competition (College)
- Android project selected for presentation at TechFest 2025

### 2.6 Education Section
- B.Tech (CSE) - Saveetha School of Engineering, Chennai (2026) - 87.3%
- Intermediate (12th) - Narayana Jr. College, Kadapa (2022) - 83.5%
- SSC (10th) - Nagarjuna Model School, Kadapa (2020) - 95.67%

### 2.7 Contact Section\n- Email: reddyavinash748@gmail.com\n- Phone: +91 93929 57011
- LinkedIn: linkedin.com/in/avinash-reddy-86146b252
- Interactive contact form (optional)
- Social media icons with hover effects

## 3. Design Style

### 3.1 Color Scheme
- Background: Soft whitish-blue gradient (#f4f8ff → #eaf2ff)
- Primary accent: Deep blue (#2563eb)
- Secondary accent: Soft purple (#8b5cf6)
- Text: Dark gray (#1f2937) for body, near-black (#111827) for headings
- Card backgrounds: White with subtle transparency (rgba(255, 255, 255, 0.7))

### 3.2 Visual Style
- Minimal, elegant, and premium aesthetic
- Glassmorphism effect on cards (backdrop-filter blur with soft shadows)
- Rounded corners (border-radius: 16px-24px)
- Soft box shadows (04px 6px rgba(0, 0, 0, 0.07))
- Modern sans-serif typography (Inter, Poppins, or similar)
- Ample white space for breathing room

### 3.3 Interactive Effects
\n**Rainbow Smoke Particle Effect (Critical Feature):**
- Smooth particle system that follows mouse cursor
- Particles emit in soft rainbow colors: violet (#a78bfa), blue (#60a5fa), cyan (#22d3ee), pink (#f472b6), light green (#86efac)
- Effect appears on mouse movement across the page
- Particles fade naturally with smooth trails
- Lightweight implementation using Canvas or CSS + JavaScript
- No performance lag, optimized rendering

**Hover Effects:**
- Buttons: Subtle glow, soft rainbow smoke trail, scale transform (1.05)\n- Cards: Lift effect with enhanced shadow, gentle rainbow border glow
- Profile image: Soft glow ring, slight scale-up (1.03)
- Links: Smooth color transition with underline animation
- All transitions:0.3s ease-in-out

### 3.4 Animations
- Smooth scroll behavior
- Fade-in animations on scroll (Intersection Observer)
- Staggered entrance for skill cards and project items
- Floating animation for hero profile image
- Smooth page transitions

## 4. Technical Requirements

### 4.1 Technology Stack
- Frontend Framework: React (Vite) OR Pure HTML + CSS + JavaScript
- Particle System: Canvas API / lightweight particle library
- Animations: CSS transitions + Intersection Observer API
- Responsive Design: CSS Grid + Flexbox
\n### 4.2 Code Quality
- Clean, well-structured, and commented code
- Component-based architecture (if using React)
- Semantic HTML5 markup
- Modular CSS with BEM naming convention or CSS modules
- Performance optimized (lazy loading, debounced scroll events)

### 4.3 Responsiveness
- Mobile-first approach
- Breakpoints: Mobile (<640px), Tablet (640px-1024px), Desktop (>1024px)
- Touch-friendly interactions on mobile
- Optimized particle effects for mobile (reduced particle count)

### 4.4 Performance
- Optimized images (WebP format, lazy loading)
- Minimal JavaScript bundle size
- Smooth60fps animations
- Particle effect should not cause lag or high CPU usage
- Fast initial load time (<2 seconds)

## 5. Content Guidelines

### 5.1 Tone & Voice
- Professional yet approachable
- Confident but humble
- Tech-focused and achievement-oriented
- Suitable for fresher job applications

### 5.2 Image Assets
- Use uploaded profile photo as hero image
- Project screenshots (to be added if available)
- Skill icons (use icon libraries like Lucide, Heroicons, or Font Awesome)
- Certification badges
\n## 6. Overall Experience

- Professional and modern aesthetic suitable for IT industry
- Calm and focused atmosphere with subtle interactive delight
- Tech-forward presentation showcasing technical skills
- Memorable visual experience through unique rainbow smoke effect
- Easy navigation with smooth scrolling\n- Perfect for impressing recruiters and hiring managers

## 7. Reference Files
1. Resumedocument: Kasipathi Avinash Reddy resume (provided in chat)
2. Profile photo: Uploaded image (to be used as hero image)