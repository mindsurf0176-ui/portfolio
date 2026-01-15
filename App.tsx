import React, { useEffect } from 'react';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import MobileApps from './components/MobileApps';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'tech', 'projects', 'mobile-apps', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'hero' : section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'tech', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'mobile-apps', label: 'Mobile Apps' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-textMain selection:bg-primary/20 selection:text-primary relative">
      
      {/* Floating Pill Navigation */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center">
        <nav className="glass-panel px-1.5 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-black/5 max-w-fit overflow-x-auto no-scrollbar">
          <a 
            href="#" 
            className="px-4 py-2 rounded-full font-display font-bold text-sm text-textMain hover:bg-black/5 transition-all whitespace-nowrap"
          >
            Neural Lab
          </a>
          <div className="w-px h-4 bg-black/10 mx-1 hidden sm:block"></div>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeSection === item.id 
                  ? 'text-textMain' 
                  : 'text-textSub hover:text-textMain hover:bg-black/5'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white shadow-sm border border-black/5 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
          <div className="w-px h-4 bg-black/10 mx-1 hidden sm:block"></div>
          <a 
            href="#contact" 
            className="hidden sm:block px-4 py-2 bg-textMain text-white rounded-full text-sm font-bold hover:bg-black/80 transition-colors shadow-md shadow-black/20 whitespace-nowrap"
          >
            Inquiry
          </a>
        </nav>
      </div>

      <main>
        <div id="hero">
          <Hero />
        </div>
        <TechStack />
        <Projects />
        <MobileApps />
        <Contact />
      </main>
    </div>
  );
};

export default App;