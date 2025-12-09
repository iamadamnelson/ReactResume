import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Home', icon: <Home size={20} /> },
  { path: '/resume', label: 'Resume', icon: <FileText size={20} /> },
  // { path: '/portfolio', label: 'Portfolio', icon: <Briefcase size={20} /> },
  { path: '/contact', label: 'Contact', icon: <Mail size={20} /> },
];

export const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md"
    >
      <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-full px-6 py-3 shadow-2xl flex justify-between items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative p-2 rounded-full transition-all duration-300 group flex flex-col items-center justify-center ${
                isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative z-10">{item.icon}</div>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary-600 rounded-full -z-0 opacity-20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {isActive && (
                  <span className="absolute -bottom-1 w-1 h-1 bg-primary-500 rounded-full"></span>
                )}
                
                {/* Tooltip for desktop */}
                <span className="absolute top-full mt-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-zinc-800 px-2 py-1 rounded text-white pointer-events-none hidden md:block whitespace-nowrap">
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
};