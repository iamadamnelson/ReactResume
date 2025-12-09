import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Linkedin} from 'lucide-react';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <PageTransition>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 min-h-[70vh]">
        
        {/* Text Content */}
        <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-primary-500 font-semibold tracking-wide uppercase text-sm mb-4">
              Data, design, engineering and technology specialist
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500 mb-6 leading-tight">
              I am Adam Nelson.
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Highly accomplished and versatile Engineering and IT professional with a proven history of success in mission-critical environments. 
              As a U.S. Army Veteran and former DoD Civil Servant with an active T3 Secret Clearance, my career has been defined by a commitment 
              to service and ensuring mission success. Seeking a strategic role that leverages my extensive expertise to solve highly complex, 
              multi-disciplinary technical challenges and deliver high-impact, transformative results.
            </p>

{/*             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/portfolio"
                className="group relative px-8 py-3 bg-white text-black font-semibold rounded-full overflow-hidden flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                View Work 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/resume"
                className="px-8 py-3 bg-zinc-800/50 border border-zinc-700 text-white font-semibold rounded-full hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Resume
                <Download size={18} />
              </Link>
            </div> */}

            <div className="mt-12 flex gap-6 justify-center lg:justify-start">
              {/* <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github size={24} /></a> */}
              <a href="http://www.linkedin.com/in/adam-w-nelson" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
              {/* <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={24} /></a> */}
            </div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 order-1 lg:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 1, rotate: -5 }}
            animate={{ opacity: 1, scale: 1.2, rotate: 0 }}
            transition={{ delay: 0.4, type: 'spring', duration: 1.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-blue-600 rounded-[2rem] blur-2xl opacity-40 -z-10 transform translate-y-4"></div>
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-[2rem] overflow-hidden border-4 border-zinc-800/50 shadow-2xl bg-zinc-900 relative group">
              <img 
                src="https://www.iamadamnelson.com/images/profilepic.jpg" 
                alt="Adam Nelson" 
                className="w-half h-half object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </PageTransition>
  );
};