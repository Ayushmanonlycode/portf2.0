import { useRef } from "react";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import BlurText from "./blur-text";

const contactLinks = [
    {
        label: "Email",
        value: "Mail me!",
        href: "mailto:ayushman.onlycode69@gmail.com",
        icon: Mail
    },
    {
        label: "LinkedIn",
        value: "Let's connect on Linkedin!",
        href: "https://www.linkedin.com/in/ayushman-rout10/",
        icon: Linkedin
    },
    {
        label: "GitHub",
        value: "Let's fork it!",
        href: "https://github.com/Ayushmanonlycode",
        icon: Github
    }
];

export default function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="flex flex-col justify-center min-h-[80vh] px-6 md:px-24 max-w-screen-2xl mx-auto py-24 relative overflow-hidden text-white"
        >
            {/* Header */}
            <div className="mb-12">
                <BlurText
                    text="05 — CONTACT"
                    delay={30}
                    animateBy="letters"
                    direction="bottom"
                    className="text-sm font-bold tracking-[0.2em] opacity-50"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                <div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8" style={{ fontFamily: "'Antic', sans-serif" }}>
                        LET'S <span className="text-[#C3E41D]">BUILD</span> SOMETHING <span className="italic">TOGETHER</span>.
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-md leading-relaxed" style={{ fontFamily: "'Antic', sans-serif" }}>
                        I'm always open to new opportunities, collaborations, or just a friendly chat about code and design.
                        
                    </p>
                    <br />  
                    <p className="text-lg md:text-xl text-neutral-400 max-w-md leading-relaxed" style={{ fontFamily: "'Antic', sans-serif" }}>
                      Open to SDE, AI, and backend-focused roles.
                    </p>
                </div>

                <div className="space-y-6">
                    {contactLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-6 border border-white/10 hover:border-[#C3E41D]/30 rounded-lg transition-all duration-300 bg-white/5 hover:bg-white/[0.08]"
                        >
                            <div className="flex items-center gap-6">
                                <div className="p-3 rounded-full bg-black border border-white/10 group-hover:border-[#C3E41D]/40 transition-colors">
                                    <link.icon size={24} className="group-hover:text-[#C3E41D] transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">
                                        {link.label}
                                    </p>
                                    <p className="text-lg md:text-xl font-medium group-hover:text-[#C3E41D] transition-colors" style={{ fontFamily: "'Antic', sans-serif" }}>
                                        {link.value}
                                    </p>
                                </div>
                            </div>
                            <ExternalLink size={20} className="text-neutral-600 group-hover:text-[#C3E41D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Footer Credit */}
            <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40">
                <p className="text-sm font-mono">
                    DESIGNED & DEVELOPED BY AYUSHMAN ROUT
                </p>
                <p className="text-sm font-mono uppercase tracking-tighter">
                    © 2025 ALL RIGHTS RESERVED
                </p>
            </div>
        </section>
    );
}
