import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';

// Portfolio Context
const PORTFOLIO_CONTEXT = `
You are "Ayu", a chill AI for Ayushman Rout's portfolio.
Answer brief and exactly. No yap. No emojis under any circumstances.
Use quirky, Gen Z, friendly language but keep it professional.

Ayushman (VIT Vellore CS undergrad, CGPA 9.13) builds AI products.
Experience:
- Fenrir Security: AI platform, Mastra, Electron, Node.js.
- JobTrackr: Full-stack, React, MongoDB.
- HackRx: RAG pipeline, FastAPI, Gemini.
- SignBridge: ASL translation, YOLOv8, PyTorch.
Skills: AI/ML, Full Stack, TS, Python, FastAPI, MongoDB.

Rating Task:
If a Job Description (JD) is provided, rate Ayushman's profile out of 10 based on his skills and experience. Provide a concise justification for the score. 

Constraints:
- No emojis.
- Brief responses.
- Gen Z vibe (but don't overdo it, keep it sharp).
`;

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");

const CatIcon = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
    <div className={`relative ${className}`}>
        {/* Cute Minimal Cat Head SVG */}
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Body/Head */}
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill={color}
            />
            {/* Ears */}
            <path d="M19 7L22 1L15 4L19 7Z" fill={color} />
            <path d="M5 7L2 1L9 4L5 7Z" fill={color} />

            {/* Features (Black Dots) */}
            <circle cx="9" cy="11" r="1.5" fill="black" />
            <circle cx="15" cy="11" r="1.5" fill="black" />
            <path
                d="M10 15C10 15 11 16 12 16C13 16 14 15 14 15"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    </div>
);

export default function AyuChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
        { role: 'bot', text: "Yo, I'm Ayu. Ask me about Ayushman's work or drop a JD for a quick rating." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatRef_api = useRef<any>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatRef = useRef<HTMLDivElement>(null);

    const getChatSession = () => {
        if (chatRef_api.current) return chatRef_api.current;

        // Note: gemini-1.5-flash is stable and high-limit. 2.5/3.0 don't exist yet.
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        chatRef_api.current = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: PORTFOLIO_CONTEXT }],
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. No emojis. Brief and Gen-Z focused. Ready to rate." }],
                },
            ],
        });
        return chatRef_api.current;
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);

        try {
            const chat = getChatSession();
            const result = await chat.sendMessage(userMessage);
            const response = await result.response;
            const text = response.text();

            setMessages(prev => [...prev, { role: 'bot', text }]);
        } catch (error: any) {
            console.error("Gemini Error:", error);
            const errorMessage = error?.message?.includes('429')
                ? "Rate limit hit. Wait a sec and try again. Ayushman's projects are worth the wait."
                : "Server's acting up. My bad. Ayushman's still the GOAT though.";
            setMessages(prev => [...prev, { role: 'bot', text: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end justify-end pointer-events-none">
            {/* 
              Note: You might see a "Accessing element.ref was removed in React 19" warning in the console.
              This is a known issue with React DevTools interaction with React 19 and does not affect the app.
              Your code correctly uses useRef which is the standard pattern.
            */}
            <AnimatePresence mode="popLayout">
                {isOpen ? (
                    <motion.div
                        key="chat-window"
                        layoutId="chatbot"
                        ref={chatRef}
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="w-[320px] md:w-[380px] h-[480px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden origin-bottom-right pointer-events-auto"
                        style={{ marginBottom: '1rem' }}
                    >
                        {/* Header */}
                        <div className="p-5 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#C3E41D] flex items-center justify-center shadow-[0_0_15px_rgba(195,228,29,0.2)]">
                                    <CatIcon color="black" className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-white text-sm tracking-tight">Ayu</h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-neutral-500 hover:text-white transition-colors p-1"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto px-5 py-2 space-y-4 custom-scrollbar">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${msg.role === 'user'
                                        ? 'bg-[#C3E41D] text-black font-medium rounded-tr-none'
                                        : 'bg-white/5 text-neutral-200 border border-white/5 rounded-tl-none leading-relaxed'
                                        }`}>
                                        <div className="prose prose-invert prose-sm max-w-none chatbot-markdown">
                                            <ReactMarkdown
                                                components={{
                                                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                                    ul: ({ children }) => <ul className="list-disc ml-4 mb-2 space-y-1">{children}</ul>,
                                                    ol: ({ children }) => <ol className="list-decimal ml-4 mb-2 space-y-1">{children}</ol>,
                                                    li: ({ children }) => <li className="marker:text-[#C3E41D]">{children}</li>,
                                                    strong: ({ children }) => <strong className="text-white font-bold">{children}</strong>,
                                                    a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#C3E41D] hover:underline underline-offset-4">{children}</a>
                                                }}
                                            >
                                                {msg.text}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1.5">
                                        <div className="w-1 h-1 bg-[#C3E41D]/60 rounded-full animate-bounce" />
                                        <div className="w-1 h-1 bg-[#C3E41D]/60 rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <div className="w-1 h-1 bg-[#C3E41D]/60 rounded-full animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-5">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="relative flex items-center"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about Ayushman..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-[#C3E41D]/30 focus:bg-white/10 transition-all placeholder:text-neutral-600"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 text-[#C3E41D] p-2 hover:scale-110 active:scale-95 transition-all disabled:opacity-0"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                ) : (
                    <motion.button
                        key="chat-trigger"
                        layoutId="chatbot"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="w-14 h-14 flex items-center justify-center transition-all duration-300 pointer-events-auto origin-bottom-right"
                    >
                        <div className="w-12 h-12">
                            <CatIcon color="#C3E41D" className="w-full h-full" />
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
