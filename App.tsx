import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Resume } from './pages/Resume';
// import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';

// Wrapper component to handle route change animations
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-black text-white relative selection:bg-primary-500 selection:text-white">
        
        {/* Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-900/10 blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]"></div>
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10">
          <AnimatedRoutes />
        </main>

        {/* Simple Footer */}
        <footer className="relative z-10 py-6 text-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Adam Nelson. Built with React & Tailwind.</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;