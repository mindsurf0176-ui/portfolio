import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { useLanguage } from '../i18n';

const TECH_MARQUEE = [
  "React", "Next.js", "TypeScript", "Node.js", "Go", "Flutter", "Python", "AWS", "Docker", "Firebase", "GraphQL", "TailwindCSS", "Figma", "OpenAI", "Git"
];

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-background pt-32 pb-10">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-gradient-to-bl from-primary/5 to-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 pl-1">
            <span className="w-12 h-[1px] bg-textMain/30"></span>
            <span className="text-[10px] md:text-xs font-bold text-textMain/60 tracking-[0.2em] uppercase">Available for new projects</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="font-display font-black text-4xl sm:text-5xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] text-textMain mb-8 whitespace-pre-line break-words"
            >
              {t.hero.headline}
            </motion.h1>
          </div>

          <div className="lg:col-span-4 pb-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-textSub text-base md:text-lg font-sans font-medium leading-relaxed break-keep mb-8 max-w-md ml-auto lg:ml-0"
            >
              {t.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 border-b border-textMain pb-1 text-textMain font-bold text-lg hover:text-primary hover:border-primary transition-all"
              >
                {t.hero.cta}
                <ArrowDownRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Modern Minimal Marquee */}
      <div className="w-full relative mt-auto border-t border-black/5 pt-8">
        <div className="flex w-max animate-marquee items-center">
          {[...TECH_MARQUEE, ...TECH_MARQUEE].map((item, i) => (
            <React.Fragment key={i}>
              <span className="mx-6 text-xl md:text-2xl font-display font-bold text-black/10 uppercase tracking-widest cursor-default select-none">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;