import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <PageTransition>
      {/* Background Animation - Container relative to ensure absolute positioning works within page bounds */}
      <div className="relative">

        {/* Content Layer: z-10 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 min-h-[70vh] relative z-10">
          
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-primary-600 dark:text-primary-400 font-bold tracking-wide uppercase text-sm mb-4">
                Data, design, engineering and technology specialst
              </h2>
              <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-black via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-400 mb-6 leading-tight pb-2">
                I am Adam Nelson.
              </h1>
              {/* Updated paragraph color for high contrast */}
              <p className="text-zinc-800 dark:text-zinc-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
                Highly accomplished and versatile Engineering and IT professional with a proven history of success in mission-critical environments. 
                As a U.S. Army Veteran and former DoD Civil Servant with an active T3 Secret Clearance, my career has been defined by a commitment 
                to service and ensuring mission success. Seeking a strategic role that leverages my extensive expertise to solve highly complex, 
                multi-disciplinary technical challenges and deliver high-impact, transformative results.
              </p>

              <div className="mt-12 flex gap-6 justify-center lg:justify-start">
                <a href="https://linkedin.com/in/adam-w-nelson" target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-primary-600 dark:text-zinc-300 dark:hover:text-white transition-colors"><Linkedin size={28} /></a>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 1, rotate: -5 }}
              animate={{ opacity: 1, scale: 1.25, rotate: 0 }}
              transition={{ delay: 0.4, type: 'spring', duration: 1.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-blue-600 rounded-[2rem] blur-2xl opacity-30 dark:opacity-50 -z-10 transform translate-y-4"></div>
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-[2rem] overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl bg-zinc-200 dark:bg-zinc-900 relative group">
                <img 
                  src="https://www.iamadamnelson.com/images/profilepic.jpg" 
                  alt="Adam Nelson" 
                  className="w-full h-falf object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};