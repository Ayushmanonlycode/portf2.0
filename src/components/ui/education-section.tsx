import { useRef } from "react";
import BlurText from "./blur-text";

interface EducationItem {
    institution: string;
    degree: string;
    period: string;
    CGPA: string;
    
}

const educationData: EducationItem[] = [
    {
        institution: "Vellore Institute of Technology",
        degree: "Bachelor of Technology - BTech, Computer Science",
        period: "Aug 2023 – Aug 2027",
        CGPA: "9.13",
       
    },
    {
        institution: "DAV Schools Network",
        degree: "Grade 12",
        period: "Completed",
        CGPA: "96%",    
       
    },
    {
        institution: "DAV Schools Network",
        degree: "Grade 10",
        period: "Completed",
        CGPA: "97.2%"
    }
];

export default function EducationSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section
            id="education"
            ref={sectionRef}
            className="flex flex-col justify-center min-h-screen px-6 md:px-24 max-w-screen-2xl mx-auto py-24 relative overflow-hidden text-white"
        >
            {/* Header */}
            <div className="mb-16 md:mb-24">
                <BlurText
                    text="03 — EDUCATION"
                    delay={30}
                    animateBy="letters"
                    direction="bottom"
                    className="text-sm font-bold tracking-[0.2em] opacity-50"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                />
            </div>

            {/* Education List */}
            <div className="space-y-16 md:space-y-24">
                {educationData.map((edu, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:justify-between items-start gap-4">
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: "'Antic', sans-serif" }}>
                                {edu.institution}
                            </h3>
                            <p className="text-lg md:text-xl text-[#C3E41D] font-medium mb-2" style={{ fontFamily: "'Fira Code', monospace" }}>
                                {edu.degree}
                            </p>
                            <div className="flex items-center gap-4 text-neutral-400">
                                <span className="text-sm border border-neutral-800 px-2 py-0.5 rounded">
                                    CGPA: {edu.CGPA}
                                </span>
                                <span className="text-sm font-mono opacity-60">
                                    {edu.period}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
