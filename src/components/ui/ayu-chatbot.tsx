import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';

// Portfolio Context
const PORTFOLIO_CONTEXT = `
You are "Ayu", a cute and helpful AI assistant for Ayushman Rout's portfolio.
Your goal is to help recruiters quickly understand Ayushman's skills and experience.
Ayushman is a CS undergrad at VIT Vellore, building AI products end-to-end.

Key Info:
- Name: Ayushman Rout
- Location: Vellore, Tamil Nadu
- Education: B.Tech in CS at VIT Vellore (CGPA: 9.13), Grade 12 (96%), Grade 10 (97.2%).
- Experience:
  1. Fenrir Security (Founding Intern): Built cross-platform AI platform with Electron, TS, React, Node.js, and Mastra. Orchestrated multi-agent layers and built AI-native terminals.
  2. International Institute of SDGs (Web Dev Intern): Led 20+ members, integrated Firebase/MongoDB.
  3. GSSOC (Open Source Contributor): Postman API certification, 15+ GitHub issues resolved.
  4. Odisha Literary Association (Management Head): Leadership and strategic initiatives.
- Projects:
  1. HackRx Backend API: High-throughput RAG pipeline with FastAPI, FAISS, Gemini LLMs.
  2. JobTrackr: Full-stack job tracking dashboard with React, Node, MongoDB, Recharts.
  3. SignBridge: Bidirectional ASL translation system using YOLOv8, PyTorch, Flask.
- Core Skills: AI/ML, Full Stack Developement, React, TypeScript, Node.js, Python, FastAPI, Electron, Mastra, MongoDB, Firebase.
- Personality: Cute, friendly, enthusiastic, slightly Gen-Z. Use emojis! Always be polite and professional but with a fun twist.

Instructions:
- Cute, friendly, and enthusiastic 🫶
- Think like a builder and product engineer
- Clear, honest, and polite
- Emojis welcome ✨
- If unsure about something, say so calmly and help where possible
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
        { role: 'bot', text: "Hi! I'm Ayu! I can help you explore Ayushman's portfolio. What would you like to know?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatRef = useRef<HTMLDivElement>(null);

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
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
            const chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: PORTFOLIO_CONTEXT }],
                    },
                    {
                        role: "model",
                        parts: [{ text: "Got it! I am Ayu, Ayushman's cute AI assistant. I'm ready to help recruiters! 😺" }],
                    },
                ],
            });

            const result = await chat.sendMessage(userMessage);
            const response = await result.response;
            const text = response.text();

            setMessages(prev => [...prev, { role: 'bot', text }]);
        } catch (error) {
            console.error("Gemini Error:", error);
            setMessages(prev => [...prev, { role: 'bot', text: "Oopsie! I hit a snag. 😿 Maybe check if your API key is set up? Anyway, Ayushman is awesome! 🚀" }]);
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
