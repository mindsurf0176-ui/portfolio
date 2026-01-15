import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '안녕하세요! 저는 포트폴리오 AI 어시스턴트입니다. 개발자에 대해 궁금한 점을 물어봐 주세요.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    // Pass limited history context
    const history = messages.slice(-10); // keep last 10 messages for context
    const responseText = await sendMessageToGemini(userMessage, history);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
              onClick={() => setIsOpen(true)}
              className="bg-primary text-white p-4 rounded-full shadow-xl shadow-primary/30 hover:bg-primary/90 transition-colors"
            >
              <MessageSquare size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[380px] h-[500px] bg-white border border-border rounded-2xl shadow-2xl shadow-slate-300/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary/5 p-4 border-b border-border flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot size={20} className="text-primary" />
                <span className="font-bold text-textMain">AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-textSub hover:text-textMain transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-white border border-border text-textMain rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                   <div className="bg-white border border-border p-3 rounded-xl rounded-bl-none flex items-center gap-2 shadow-sm">
                     <Loader2 size={16} className="animate-spin text-primary" />
                     <span className="text-xs text-textSub">답변 생성 중...</span>
                   </div>
                 </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="무엇이든 물어보세요..."
                  className="flex-1 bg-surfaceHighlight border border-border rounded-lg px-4 py-2 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-primary hover:bg-primary/90 text-white p-2 rounded-lg transition-colors disabled:opacity-50 shadow-sm"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;