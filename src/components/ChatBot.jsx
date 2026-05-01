import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `You are a helpful assistant on Magobo Lesaomako's portfolio website. Answer questions about Magobo only. Be concise and friendly.

About Magobo:
- Full name: Magobo Lesaomako
- Finance graduate (BAccSci, University of the Witwatersrand 2017–2020) turned software engineer
- Also briefly studied BSc Actuarial Science at University of Pretoria (2016)
- Completed WeThinkCode_ Software Engineering Programme (2024–2025)
- Self-taught: 20+ projects, DevOps, Game Dev
- Skills: Full-stack development, systems programming (Rust, C++), DevOps, cloud infrastructure
- Interests: game development, systems programming, cloud/DevOps
- GitHub: https://github.com/skynet-hub
- Has a CV available for download on the portfolio
- Philosophy: "Finance meets code — building things that are both technically sound and business-smart."
- Traits: Analytical mindset, rapid learner, combines business + tech knowledge

If asked anything unrelated to Magobo, politely redirect the conversation back to questions about him.`;

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Magobo's assistant. Ask me anything about him 👋" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const chatRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // initialise chat session once
  useEffect(() => {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    chatRef.current = model.startChat({
      history: [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        { role: 'model', parts: [{ text: 'Understood. I will only answer questions about Magobo Lesaomako.' }] },
      ],
    });
  }, []);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text }]);
    setLoading(true);
    try {
      const result = await chatRef.current.sendMessage(text);
      const reply = result.response.text();
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, something went wrong. Try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-500/40 flex items-center justify-center transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-[#0d0d18] border border-indigo-500/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: '70vh' }}
          >
            {/* Header */}
            <div className="px-4 py-3 bg-indigo-600/10 border-b border-indigo-500/20 flex items-center gap-3">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              <span className="text-white font-semibold text-sm">Ask about Magobo</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-sm'
                      : 'bg-white/5 text-gray-300 rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 text-gray-400 px-3 py-2 rounded-xl rounded-bl-sm text-xs flex gap-1 items-center">
                    <span className="animate-bounce">•</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.15s' }}>•</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>•</span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-indigo-500/20 flex gap-2">
              <input
                className="flex-1 bg-white/5 text-white text-sm rounded-xl px-3 py-2 outline-none border border-white/10 focus:border-indigo-500/50 placeholder-gray-600 transition-colors"
                placeholder="Ask me anything..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="w-9 h-9 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white rounded-xl flex items-center justify-center transition-colors shrink-0"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
