import { useRef } from "react";
import BlurText from "./blur-text";

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="flex flex-col justify-center min-h-screen px-6 md:px-24 max-w-screen-2xl mx-auto py-24 relative overflow-hidden text-white"
        >
            {/* Header */}
            <div className="mb-12">
                <BlurText
                    text="01 — ABOUT"
                    delay={30}
                    animateBy="letters"
                    direction="bottom"
                    className="text-sm font-bold tracking-[0.2em] opacity-50"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                {/* Main Headline */}
                <div className="lg:col-span-8">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.05em] leading-[0.9] mb-12 uppercase" style={{ fontFamily: "'Antic', sans-serif" }}>
                        <span className="opacity-40">SO WHO</span> <span className="text-[#C3E41D]">AM I?</span>
                        <br />
                        <span className="text-2xl md:text-4xl lg:text-5xl text-neutral-500 block mt-6 italic lowercase">
                            cs undergrad @ vit vellore.
                        </span>
                        <span className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-[#C3E41D]/40 mt-4 block">
                            Building AI products
                        </span>
                    </h2>

                    <div className="space-y-6 text-xl md:text-3xl text-neutral-200 font-light max-w-3xl" style={{ fontFamily: "'Antic', sans-serif" }}>
                        <p className="leading-tight">
                            I’m <span className="text-white font-normal underline decoration-[#C3E41D]/40 decoration-2 underline-offset-4">fascinated</span> by how AI works and how to turn it into real, scalable software.
                        </p>

                        <p className="leading-tight text-neutral-400">
                            I build systems <span className="text-white">end to end</span>. Clean code. Practical design. Shipped fast.
                        </p>

                        <div className="pt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <span className="text-[#C3E41D] font-bold text-2xl md:text-3xl tracking-widest uppercase" style={{ fontFamily: "'Fira Code', monospace" }}>
                                Always learning
                            </span>
                            <span className="text-neutral-800 hidden sm:block font-thin text-4xl">/</span>
                            <span className="text-white font-bold text-2xl md:text-3xl tracking-widest uppercase" style={{ fontFamily: "'Fira Code', monospace" }}>
                                Always building
                            </span>
                        </div>
                    </div>
                </div>

                {/* Vertical Text Info (Aesthetic) */}
                <div className="hidden lg:flex lg:col-span-4 h-full flex-col justify-between items-end">
                    <div className="text-right space-y-12">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.3em] opacity-40 mb-8">Me in a nutshell</p>
                            <div className="space-y-4">
                                {[
                                    { label: "Fitness Freak", highlight: true },
                                    { label: "Engineer", highlight: true },
                                    { label: "Builder", highlight: false },
                                    { label: "Footballer", highlight: true },
                                    { label: "Explorer", highlight: false },
                                ].map((item) => (
                                    <p
                                        key={item.label}
                                        className={`text-3xl font-bold tracking-tighter transition-all duration-300 cursor-default ${item.highlight ? 'text-[#C3E41D]' : 'text-white hover:text-[#C3E41D]/60'}`}
                                        style={{ fontFamily: "'Antic', sans-serif" }}
                                    >
                                        {item.label}.
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="opacity-20 space-y-2">
                            <p className="font-mono text-xs uppercase tracking-[0.3em]">Full Stack / AI / ML</p>
                            <p className="font-mono text-xs uppercase tracking-[0.3em]">Vellore, Tamil Nadu</p>
                        </div>
                    </div>

                    <div className="mt-auto pt-12">
                        <div className="w-1 px-8 py-24 bg-gradient-to-b from-transparent via-[#C3E41D]/20 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
