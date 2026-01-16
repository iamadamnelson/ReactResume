import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Resume } from './pages/Resume';
import { Portfolio } from './pages/Portfolio';
import { Interests } from './pages/Interests';
import { Contact } from './pages/Contact';
import { DataStreamBackground } from './components/DataStreamBackground';

// Import independent project pages
import { ProjectTwo } from './pages/ProjectOne';
import { ProjectOne } from './pages/ProjectTwo';

// Wrapper component to handle route change animations
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />   
        <Route path="/portfolio/project-1" element={<ProjectTwo />} />
        <Route path="/portfolio/project-2" element={<ProjectOne />} />   
        <Route path="/interests" element={<Interests />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Initialize Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (systemPrefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white relative selection:bg-primary-500 selection:text-white transition-colors duration-300">
        
        {/* Background Elements - Fixed Viewport Coverage */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Ambient Color Blobs */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-500/10 dark:bg-primary-900/10 blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 dark:bg-blue-900/10 blur-[120px]"></div>
          
          {/* Animated Data Stream Overlay */}
          <DataStreamBackground />
        </div>

        {/* Navigation */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Main Content Area */}
        <main className="relative z-10">
          <AnimatedRoutes />
        </main>

        {/* Simple Footer */}
        <footer className="relative z-10 py-6 text-center text-zinc-500 dark:text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Adam Nelson. Built with React & Tailwind.</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;