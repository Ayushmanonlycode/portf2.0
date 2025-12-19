import Component from "./ui/portfolio-hero";
import ExperienceSection from "./ui/experience-section";
import EducationSection from "./ui/education-section";
import ProjectsSection from "./ui/projects-section";

export default function Demo() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
            />
            <div className="fixed inset-0 z-0 select-none pointer-events-none overflow-hidden flex items-center justify-center bg-black">
                <span
                    className="text-[20rem] md:text-[30rem] font-bold text-white/5 rotate-[-12deg] whitespace-nowrap blur-sm"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                >
                    404
                </span>
            </div>

            <div className="w-full relative z-10">
                <Component />
                <ExperienceSection />
                <EducationSection />
                <ProjectsSection />
            </div>
        </>
    );
}
