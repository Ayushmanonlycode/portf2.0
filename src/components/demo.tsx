import Component from "./ui/portfolio-hero";
import ExperienceSection from "./ui/experience-section";

export default function Demo() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
            />
            <div className="w-full bg-[#111] dark:bg-black">
                <Component />
                <ExperienceSection />
            </div>
        </>
    );
}
