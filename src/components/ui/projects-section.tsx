import { useRef } from "react";
import { Github } from "lucide-react";
import BlurText from "./blur-text";

interface ProjectItem {
    title: string;
    role: string;
    period: string;
    tech: string[];
    description: string[];
    github: string;
}

const projectsData: ProjectItem[] = [
    {
        title: "HackRx Backend API",
        role: "Backend Developer",
        period: "August 2025",
        tech: ["FastAPI", "FAISS", "Gemini LLMs", "Python", "Docker", "Tesseract OCR"],
        description: [
            "Architected high-throughput asynchronous RAG pipeline using FastAPI and LangChain, implementing semantic vector similarity search with cosine distance calculations and query-document relevance scoring for context-aware information retrieval.",
            "Built multi-format document processing engine with binary parsing for PDF/DOCX/PPTX/XLSX/EML and computer vision-based Tesseract OCR integration, featuring automated content extraction and structured data normalization pipelines.",
            "Implemented FAISS HNSW indexing with L2-normalized embeddings and hierarchical navigable small world graphs, achieving O(log n) search complexity with configurable ef construction parameters for optimized retrieval performance.",
            "Engineered scalable backend with JWT-based stateless authentication, sliding window rate limiting using token bucket algorithms, and asyncio coroutine pools with semaphore-controlled concurrency management.",
            "Orchestrated LLM inference pipeline with batched tensor operations, exponential backoff with jitter, and semaphore-controlled concurrency, ensuring fault-tolerant and efficient processing of LLM requests."
        ],
        github: "https://github.com/Ayushmanonlycode/HackrxBackend"
    },
    {
        title: "JobTrackr",
        role: "Full-Stack Developer",
        period: "May 2025",
        tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
        description: [
            "Spearheaded the development of a job application dashboard featuring a multi-parameter filtering system, enabling users to sort applications by date, role, and status; cut time spent on application tracking by 60%.",
            "Integrated responsive charts (pie, bar, area) using Recharts to visualize analytics such as status distribution and offer rates.",
            "Built a real-time backend with Node.js, Express.js, and MongoDB, ensuring live dashboard updates with optimized API endpoints.",
            "Implemented smooth UI transitions using Framer Motion and responsive design with Tailwind CSS"
        ],
        github: "https://github.com/Ayushmanonlycode/JobTrackr"
    },
    {
        title: "SignBridge",
        role: "AI/ML Developer",
        period: "Mar 2025",
        tech: ["PyTorch (YOLOv8)", "OpenCV", "Python", "Flask", "HTML/JS"],
        description: [
            "Built a real-time bidirectional ASL translation system supporting both Sign-to-Text and Text-to-Sign workflows, achieving 67ms latency.",
            "Leveraged Google Colab GPUs to train a YOLOv8 model on 5,000+ images of custom ASL datasets, improving the model’s ability to recognize and translate 40+ common ASL gestures with high precision.",
            "Architected and deployed RESTful APIs with Flask/FastAPI, handling multiple requests per minute with sub-50ms latency"
        ],
        github: "https://github.com/pieyush-9090/SignBridge"
    }
];

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="flex flex-col justify-center min-h-screen px-6 md:px-24 max-w-screen-2xl mx-auto py-24 relative overflow-hidden text-white"
        >
            {/* Header */}
            <div className="mb-16 md:mb-24">
                <BlurText
                    text="04 — PROJECTS"
                    delay={30}
                    animateBy="letters"
                    direction="bottom"
                    className="text-sm font-bold tracking-[0.2em] opacity-50"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                />
            </div>

            {/* Projects List */}
            <div className="space-y-24">
                {projectsData.map((project, index) => (
                    <div key={index} className="group">
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6">
                            <div>
                                <div className="flex items-center gap-4 mb-2">
                                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:text-[#C3E41D] transition-colors duration-300" style={{ fontFamily: "'Antic', sans-serif" }}>
                                        {project.title}
                                    </h3>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-500 hover:text-white transition-colors"
                                        aria-label={`View ${project.title} source on GitHub`}
                                    >
                                        <Github size={24} className="md:w-8 md:h-8" />
                                    </a>
                                </div>
                                <p className="text-lg md:text-xl text-neutral-400 font-medium" style={{ fontFamily: "'Fira Code', monospace" }}>
                                    {project.role}
                                </p>
                            </div>
                            <span className="text-sm font-mono text-neutral-500 mt-2 md:mt-0">
                                {project.period}
                            </span>
                        </div>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((tech) => (
                                <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/5 text-[#C3E41D]/80 border border-white/10 hover:border-[#C3E41D]/30 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Points */}
                        <ul className="space-y-4 text-neutral-400 font-light leading-relaxed max-w-4xl" style={{ fontFamily: "'Antic', sans-serif" }}>
                            {project.description.map((point, i) => (
                                <li key={i} className="relative pl-6">
                                    <span className="absolute left-0 top-3 w-1.5 h-1.5 rounded-full bg-[#C3E41D]/40" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
