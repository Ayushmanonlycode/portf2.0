# Ayushman Rout | Portfolio 🚀

Welcome to my personal portfolio! This is a high-performance, dark-themed, and typography-focused web application built to showcase my projects, experience, and passion for AI and Software Engineering.

![Portfolio Preview](/public/lion.png) *(Note: Replace with an actual screenshot if available)*

## 🌟 Key Features

- **Cinematic Autoscroll**: A hands-free exploration mode triggered by the chevron button on the landing page. It provides a smooth, slow-paced tour of the entire portfolio.
- **Micro-Animations**: Custom `BlurText` component for high-impact, scroll-triggered typographic animations.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Strict Dark Aesthetic**: A consistent, premium dark theme with vibrant `#C3E41D` accents and a global "404" background element.
- **Glassmorphic Navigation**: A sleek hamburger menu with backdrop-blur effects for seamless section jumping.
- **🛠️ Project Architecture** - Modular and scalable folder structure.
- **🐾 Ayu AI Chatbot** - A cute, Gemini-powered assistant to help recruiters explore the portfolio.
- **✨ Smooth Animations** - Powered by Framer Motion for a premium feel.
- **Detailed Content Sections**:
    - **About**: A "Gen-Z" vibe intro with a "Me in a nutshell" quick-scan sidebar.
    - **Experience**: Timeline of roles including full-stack development and AI orchestration.
    - **Projects**: Technical deep-dives with direct links to GitHub repositories.
    - **Education**: Academic background with institution logos.
    - **Contact**: Interactive links to Email, LinkedIn, and GitHub.

## 🛠️ Tech Stack

- **React 19 & TypeScript**
- **Vite** for blazing fast development
- **Tailwind CSS** for modern, responsive styling
- **Framer Motion** for complex animations
- **Google Gemini API** for the portfolio AI
- **React Markdown** for rich text responses
- **Lucide React** for premium icons

## 📁 Project Structure

```text
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── ayu-chatbot.tsx      # Gemini-powered AI Assistant
│   │   │   ├── portfolio-hero.tsx   # Landing page & Autoscroll logic
│   │   │   ├── about-section.tsx    # Bio and personal sidebar
│   │   │   ├── experience-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── education-section.tsx
│   │   │   └── contact-section.tsx
│   │   └── demo.tsx                 # Main layout assembler
│   ├── App.tsx                      # Root component
│   └── index.css                    # Global styles & custom scrollbars
├── .env.example                     # Env template for Gemini API
└── tailwind.config.js               # Design tokens & theme
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
4. Set up Environment Variables:
   - Create a `.env` file in the root directory.
   - Copy the content from `.env.example`.
   - Add your [Gemini API Key](https://aistudio.google.com/).
   ```env
   VITE_GEMINI_API_KEY=your_key_here
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
