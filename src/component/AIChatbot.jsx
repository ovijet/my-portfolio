"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Sparkles,
  RefreshCw,
  User,
  MessageSquare,
  ChevronDown,
  Code2,
  FolderGit2,
  Mail,
  GraduationCap,
} from "lucide-react";

// Portfolio Knowledge Base for AI responses
const knowledgeBase = [
  {
    keywords: ["skill", "stack", "technology", "technologies", "tech", "react", "next", "node", "mongo", "prisma", "postgres", "postgresql", " database", "দক্ষতা", "স্কিল"],
    answer: "Ovijit is a Full Stack Web Developer skilled in:\n\n• **Frontend**: Next.js, React.js, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5, CSS3\n• **Backend**: Node.js, Express.js\n• **Database**: PostgreSQL, Prisma ORM, MongoDB\n• **Tools**: Git, GitHub, Vercel, Postman, Better Auth, Stripe",
  },
  {
    keywords: ["project", "work", "portfolio", "app", "studynook", "digital", "প্রজেক্ট", "কাজ"],
    answer: "Here are Ovijit's featured projects:\n\n1. 📚 **StudyNook**: Full-stack study room booking platform (Next.js, Express, MongoDB).\n2. 💎 **Digital Life Lessons**: Premium life lessons platform with Better Auth & Stripe payment.\n3. ⚡ **Digital WorkFlow**: Digital tools & design assets buying platform (React, Tailwind).",
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire", "social", "github", "linkedin", "যোগাযোগ", "ইমেইল", "ফোন"],
    answer: "You can reach Ovijit directly:\n\n• 📧 **Email**: ovijethalder143@gmail.com\n• 📞 **Phone**: +8801857979055\n• 🐙 **GitHub**: github.com/ovijet\n• 💼 **LinkedIn**: linkedin.com/in/ovijit-halder-1b26a9252\n• 📄 **Resume**: Click the Download Resume button on the navbar!",
  },
  {
    keywords: ["education", "diploma", "study", "cgpa", "school", "jessore", "পড়াশোনা", "শিক্ষাগত"],
    answer: "Ovijit's Educational Background:\n\n🎓 **Diploma in Computer Science & Engineering** (2019 - 2024)\nJessore Polytechnic Institute — CGPA: 3.25 / 4.00\n\n🏫 **Secondary School Certificate (SSC)** (2017 - 2019)\nNoapara Government High School — GPA: 4.25 / 5.00",
  },
  {
    keywords: ["who", "about", "ovijit", "halder", "developer", "experience", "কে", "সম্পর্কে"],
    answer: "Ovijit Halder is a passionate Web Developer from Bangladesh. He specializes in creating responsive, modern full-stack web applications with clean code, micro-interactions, and high performance.",
  },
];

const suggestions = [
  { label: "⚡ Top Skills", query: "What are Ovijit's top skills?" },
  { label: "🚀 Featured Projects", query: "Show me Ovijit's projects" },
  { label: "🎓 Education", query: "What is Ovijit's educational background?" },
  { label: "📬 Contact Details", query: "How can I contact Ovijit?" },
];

const generateResponse = (input) => {
  const lower = input.toLowerCase();

  for (const kb of knowledgeBase) {
    if (kb.keywords.some((kw) => lower.includes(kw))) {
      return kb.answer;
    }
  }

  if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey") || lower.includes("কেমন") || lower.includes("সালাম")) {
    return "Hello! 👋 I am Ovijit's AI Portfolio Assistant. How can I help you today? Ask me about Ovijit's skills, projects, background, or contact info!";
  }

  return "I'm Ovijit's AI Assistant! You can ask me about his **Skills**, **Projects**, **Education**, or **Contact details**. Feel free to pick one of the suggestions below!";
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hi there! 👋 I am Ovijit's AI Assistant. Ask me anything about his skills, projects, or experience!",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend = input) => {
    const text = textToSend.trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const aiAnswer = generateResponse(text);
      const aiMsg = {
        id: Date.now() + 1,
        sender: "ai",
        text: aiAnswer,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "ai",
        text: "Chat reset! What else would you like to know about Ovijit?",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(true)}
            className="relative flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-3.5 rounded-full shadow-2xl shadow-cyan-500/40 border border-white/20 group"
          >
            <div className="relative">
              <Bot size={22} className="group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <span className="font-bold text-xs tracking-wide">Ask AI Assistant</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Modal Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-[92vw] sm:w-[380px] h-[520px] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl rounded-3xl border border-zinc-200 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm flex items-center gap-1.5">
                    Ovijit's AI Assistant
                    <Sparkles size={13} className="text-yellow-300" />
                  </h4>
                  <p className="text-[10px] text-cyan-100 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online & Ready
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  title="Reset Conversation"
                  className="p-1.5 hover:bg-white/20 rounded-xl transition text-white/90"
                >
                  <RefreshCw size={15} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Chat"
                  className="p-1.5 hover:bg-white/20 rounded-xl transition text-white/90"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "ai" && (
                    <div className="w-7 h-7 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={14} />
                    </div>
                  )}

                  <div className={`max-w-[80%] rounded-2xl p-3.5 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-tr-none shadow-md shadow-cyan-500/20"
                      : "bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 rounded-tl-none"
                  }`}>
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span className={`text-[9px] mt-1.5 block ${msg.sender === "user" ? "text-cyan-100" : "text-zinc-400"}`}>
                      {msg.time}
                    </span>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex gap-2 items-center text-zinc-400 pl-2">
                  <Bot size={14} className="text-cyan-500" />
                  <span className="text-[11px] italic">AI is typing...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions Chips */}
            <div className="px-4 py-2 bg-zinc-50 dark:bg-black/40 border-t border-zinc-200/60 dark:border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {suggestions.map((s) => (
                <button
                  key={s.label}
                  onClick={() => handleSend(s.query)}
                  className="whitespace-nowrap px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[10px] font-semibold text-zinc-700 dark:text-zinc-300 hover:border-cyan-500 hover:text-cyan-500 transition shadow-sm flex-shrink-0"
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask AI anything about Ovijit..."
                className="flex-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 dark:text-white outline-none focus:border-cyan-500 transition"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
              >
                <Send size={15} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatbot;
