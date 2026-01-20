import React from 'react';
import { motion } from 'framer-motion';
import {
   Database, Cpu, Zap, Layers,
   Smartphone, LayoutTemplate
} from 'lucide-react';
import { useLanguage } from '../i18n';

interface TechBadgeProps {
   children: React.ReactNode;
}

const TechBadge: React.FC<TechBadgeProps> = ({ children }) => (
   <span className="px-3 py-1.5 rounded-lg bg-surface border border-slate-200 text-xs font-bold text-slate-600 shadow-sm whitespace-nowrap">
      {children}
   </span>
);

const TechStack: React.FC = () => {
   const { t } = useLanguage();

   return (
      <section id="tech" className="py-32 bg-white relative overflow-hidden">
         {/* Background Decor */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl opacity-60" />
         </div>

         <div className="container mx-auto px-6 relative z-10 max-w-7xl">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6"
            >
               <div className="max-w-2xl">
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-textMain mb-4 tracking-tight word-keep-all">
                     {t.tech.title} <span className="text-primary">{t.tech.titleHighlight}</span>
                  </h2>
                  <p className="text-textSub font-sans text-lg break-keep leading-relaxed">
                     {t.tech.subtitle}
                  </p>
               </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[minmax(280px,auto)]">

               {/* 1. Frontend Ecosystem (Large Box) */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="md:col-span-2 bg-surfaceHighlight rounded-[2rem] p-6 md:p-8 border border-border relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
               >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                     <LayoutTemplate size={120} className="text-primary" />
                  </div>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                     <div>
                        <div className="flex items-center gap-3 mb-4">
                           <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                              <Layers size={20} />
                           </div>
                           <h3 className="font-display text-2xl font-bold text-textMain">{t.tech.frontend.title}</h3>
                        </div>
                        <p className="text-textSub font-sans mb-8 max-w-md">
                           {t.tech.frontend.description}
                        </p>
                     </div>

                     <div className="flex flex-wrap gap-3">
                        {['React 18', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'React Query'].map((tech) => (
                           <TechBadge key={tech}>{tech}</TechBadge>
                        ))}
                     </div>
                  </div>
               </motion.div>

               {/* 2. AI Integration (Tall Box) */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="md:col-span-1 md:row-span-2 bg-white rounded-[2rem] p-8 border border-border relative overflow-hidden group hover:border-purple-400/50 transition-colors duration-500 shadow-sm"
               >
                  {/* Animated Gradient Blob */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-100 rounded-full blur-[80px] group-hover:bg-purple-200 transition-colors duration-700" />

                  <div className="relative z-10 h-full flex flex-col">
                     <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm">
                           <Cpu size={20} />
                        </div>
                        <h3 className="font-display text-xl font-bold text-textMain">{t.tech.ai.title}</h3>
                     </div>

                     <p className="text-textSub font-sans text-sm mb-8 leading-relaxed">
                        {t.tech.ai.description}
                     </p>

                     {/* Abstract Visual */}
                     <div className="flex-1 flex items-center justify-center py-6">
                        <div className="relative w-32 h-32">
                           <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-0 border border-dashed border-purple-200 rounded-full"
                           />
                           <motion.div
                              animate={{ rotate: -360 }}
                              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-4 border border-dashed border-purple-300 rounded-full"
                           />
                           <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-200">
                                 <Zap size={20} fill="currentColor" />
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-wrap gap-2 mt-auto">
                        {['OpenAI API', 'Gemini SDK', 'LangChain', 'Vercel AI SDK'].map((tech) => (
                           <TechBadge key={tech}>{tech}</TechBadge>
                        ))}
                     </div>
                  </div>
               </motion.div>

               {/* 3. Backend & Infra (Standard Box) */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="md:col-span-1 bg-white rounded-[2rem] p-8 border border-border relative overflow-hidden group hover:border-green-400/50 transition-colors duration-500 shadow-sm"
               >
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-50 rounded-tl-[4rem] -z-0" />

                  <div className="relative z-10">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
                           <Database size={20} />
                        </div>
                        <h3 className="font-display text-xl font-bold text-textMain">{t.tech.backend.title}</h3>
                     </div>

                     <div className="space-y-4">
                        <div>
                           <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t.tech.backend.serverless}</h4>
                           <div className="flex flex-wrap gap-2">
                              <TechBadge>Supabase</TechBadge>
                              <TechBadge>Firebase</TechBadge>
                              <TechBadge>PostgreSQL</TechBadge>
                           </div>
                        </div>
                        <div>
                           <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t.tech.backend.runtime}</h4>
                           <div className="flex flex-wrap gap-2">
                              <TechBadge>Node.js</TechBadge>
                              <TechBadge>Python</TechBadge>
                              <TechBadge>Docker</TechBadge>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* 4. Cross Platform & Mobile (Standard Box) */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="md:col-span-1 bg-white rounded-[2rem] p-8 border border-border relative overflow-hidden group hover:border-orange-400/50 transition-colors duration-500 shadow-sm"
               >
                  <div className="relative z-10">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
                           <Smartphone size={20} />
                        </div>
                        <h3 className="font-display text-xl font-bold text-textMain">{t.tech.crossPlatform.title}</h3>
                     </div>

                     <p className="text-textSub font-sans text-sm mb-6">
                        {t.tech.crossPlatform.description}
                     </p>

                     <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-surface hover:bg-surfaceHighlight transition-colors">
                           <div className="w-2 h-2 rounded-full bg-blue-400" />
                           <span className="text-sm font-bold text-slate-700">Flutter</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-surface hover:bg-surfaceHighlight transition-colors">
                           <div className="w-2 h-2 rounded-full bg-cyan-400" />
                           <span className="text-sm font-bold text-slate-700">React Native</span>
                        </div>
                     </div>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>
   );
};

export default TechStack;