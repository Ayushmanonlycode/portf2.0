# Ayushman Rout | Portfolio 🚀

Welcome to my personal portfolio! This is a high-performance, dark-themed, and typography-focused web application built to showcase my projects, experience, and passion for AI and Software Engineering.

![Portfolio Preview](/public/lion.png) *(Note: Replace with an actual screenshot if available)*

## 🌟 Key Features

- **Cinematic Autoscroll**: A hands-free exploration mode triggered by the chevron button on the landing page. It provides a smooth, slow-paced tour of the entire portfolio.
- **Micro-Animations**: Custom `BlurText` component for high-impact, scroll-triggered typographic animations.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Strict Dark Aesthetic**: A consistent, premium dark theme with vibrant `#C3E41D` accents and a global "404" background element.
- **Glassmorphic Navigation**: A sleek hamburger menu with backdrop-blur effects for seamless section jumping.
- **Detailed Content Sections**:
    - **About**: A "Gen-Z" vibe intro with a "Me in a nutshell" quick-scan sidebar.
    - **Experience**: Timeline of roles including full-stack development and AI orchestration.
    - **Projects**: Technical deep-dives with direct links to GitHub repositories.
    - **Education**: Academic background with institution logos.
    - **Contact**: Interactive links to Email, LinkedIn, and GitHub.

## 🛠️ Tech Stack

- **Frontend**: [React 18](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: 
    - `Antic`: For body text and elegant headings.
    - `Fira Code`: For technical accents, labels, and code-like aesthetics.

## 📁 Project Structure

```text
src/
├── components/
│   ├── ui/
│   │   ├── portfolio-hero.tsx      # Landing page, Navigation, Autoscroll logic
│   │   ├── about-section.tsx       # Bio and personal "nutshell"
│   │   ├── experience-section.tsx  # Career timeline
│   │   ├── projects-section.tsx    # Technical projects showcase
│   │   ├── education-section.tsx   # Academic history
│   │   ├── contact-section.tsx     # Contact links and Footer
│   │   └── blur-text.tsx           # Reusable scroll-animation component
│   └── demo.tsx                    # Main layout assembler
├── App.tsx                         # Root component
└── index.css                       # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ayushmanonlycode/portf2.0.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-upgraded
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

### Build

Create a production-ready build in the `dist/` folder:
```bash
npm run build
```

## 📄 License

Designed and Developed by **Ayushman Rout**.  
© 2025 Ayushman Rout. All rights reserved.
