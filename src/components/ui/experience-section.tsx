import { useRef } from "react";
import BlurText from "./blur-text";

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
    tech?: string[];
}

const experiences: ExperienceItem[] = [
    {
        company: "Fenrir Security Private Limited",
        role: "Founding Intern - Full Stack Developer",
        period: "June 2025 - July 2025",
        location: "Remote",
        description: [
            "Architected the core infrastructure of a cross-platform AI cybersecurity platform using Electron, TypeScript, and React; authored 20,000+ LOC across frontend, backend, and low-level IPC modules.",
            "Designed and integrated a scalable multi-agent orchestration layer powered by Mastra, supporting concurrent agent sessions and persistent threads.",
            "Implemented developer-facing features including AI-native terminals and autonomous code editors.",
            "Developed selective AST-based code scanning combined with a .fenrirignore parser for high-performance parsing.",
            "Spearheaded a resilient interrupt control pipeline using Electron's IPC Main–Renderer bridge.",
            "Refactored IPC architecture using typed protocol handlers, reducing logic bugs by over 30%."
        ],
        tech: ["Electron", "TypeScript", "React", "Node.js", "Mastra"]
    },
    {
        company: "IISPPR",
        role: "Web Developer Intern, NGO",
        period: "May 2025 - July 2025",
        location: "Remote",
        description: [
            "Led a team of 20+ members, coordinating project execution and ensuring on-time delivery of all milestones.",
            "Expedited debugging processes using Chrome DevTools and Postman, decreasing defect resolution time by 15 hours per week.",
            "Integrated Firebase for authentication and MongoDB for data storage, enabling secure access for 15+ users."
        ],
        tech: ["React", "Firebase", "MongoDB", "Postman"]
    },
    {
        company: "GirlScript Summer of Code (GSSOC)",
        role: "Open Source Contributor",
        period: "2024",
        location: "Remote",
        description: [
            "Earned Postman API Fundamentals Certification, mastering API development and testing.",
            "Resolved 15+ GitHub issues including bug fixes and API endpoint implementations with 100% acceptance rate.",
            "Enhanced collaboration skills through Git workflows and open-source contribution best practices."
        ],
        tech: ["Git", "GitHub", "API Testing"]
    },
    {
        company: "Odisha Literary Association",
        role: "Management Head",
        period: "Sep 2023 - Present",
        location: "Vellore, Tamil Nadu",
        description: [
            "Oversee strategic initiatives and operational management to foster literature's growth and cultural impact.",
            "Leveraging leadership skills to support the association's mission of promoting literary arts and community engagement."
        ],
        tech: ["Persuasive Speaking", "Marketing", "Mentoring", "Creative Problem Solving", "Public Speaking", "Skill Development", "People Development", "Performance Management", "People Management", "Team Leadership", "Leadership"]
    }
];

export default function ExperienceSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="flex flex-col justify-center min-h-screen px-6 md:px-24 max-w-screen-2xl mx-auto py-24"
            style={{
                backgroundColor: "var(--background)",
                color: "var(--foreground)"
            }}
        >
            {/* Header */}
            <div className="mb-16 md:mb-24">
                <BlurText
                    text="02 — EXPERIENCE"
                    delay={30}
                    animateBy="letters"
                    direction="bottom"
                    className="text-sm font-bold tracking-[0.2em] opacity-50"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                />
            </div>

            {/* Experience List */}
            <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-16">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-16 group">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-neutral-800 border border-neutral-600 group-hover:bg-[#C3E41D] group-hover:border-[#C3E41D] transition-colors duration-300" />

                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: "'Antic', sans-serif" }}>
                                {exp.company}
                            </h3>
                            <span className="text-sm font-mono text-neutral-500 mt-1 md:mt-0">
                                {exp.period}
                            </span>
                        </div>

                        <p className="text-lg text-[#C3E41D]/90 mb-4 font-medium" style={{ fontFamily: "'Fira Code', monospace" }}>
                            {exp.role} <span className="text-neutral-600 px-2">•</span> <span className="text-neutral-400 text-sm">{exp.location}</span>
                        </p>

                        <ul className="space-y-2 mb-6 text-neutral-400 font-light leading-relaxed list-disc list-outside ml-4" style={{ fontFamily: "'Antic', sans-serif" }}>
                            {exp.description.map((desc, i) => (
                                <li key={i} className="pl-2">
                                    {desc}
                                </li>
                            ))}
                        </ul>

                        {exp.tech && (
                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech) => (
                                    <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 text-white/60 border border-white/5 hover:border-[#C3E41D]/30 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
