import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { ArrowUpRight, Mail, Check, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 bg-textMain text-white relative overflow-hidden">

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left: Headline */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8"
            >
              YOUR VISION,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-purple-500">NEURAL LAB'S</span><br />
              INTELLIGENCE.
            </motion.h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-md font-sans leading-relaxed">
              {CONTACT_INFO.consultingText}
            </p>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col justify-center gap-8 lg:pl-20">

            <div className="space-y-6">
              <a
                href={CONTACT_INFO.openKakao}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 md:p-8 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              >
                <div>
                  <span className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Inquiry</span>
                  <span className="text-2xl font-bold">프로젝트 문의하기</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={24} />
                </div>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full group flex items-center justify-between p-6 md:p-8 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer text-left"
              >
                <div>
                  <span className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</span>
                  <span className="text-2xl font-bold break-all">{CONTACT_INFO.email}</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <AnimatePresence mode="wait">
                    {copied ? <Check size={20} className="text-emerald-400" /> : <Copy size={20} />}
                  </AnimatePresence>
                </div>
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
              <span className="text-slate-600 text-sm font-mono">© 2024 Lee Min-seo (Neural Lab). ALL RIGHTS RESERVED.</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;