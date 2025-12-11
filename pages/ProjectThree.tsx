import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { ArrowLeft, ExternalLink, Github, Layers, Cpu, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectThree: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative pb-20">
        <div className="mb-8">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider text-sm mb-4">
              <Code2 size={18} />
              <span>Project 03</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight">
              E-Commerce AI Engine
            </h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium mb-8">
              A headless e-commerce frontend integrated with a Python-based machine learning engine to provide personalized product recommendations.
            </p>
             <div className="flex flex-wrap gap-3 mb-8">
               {['React', 'Python', 'TensorFlow', 'GraphQL'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-md text-sm font-semibold border border-zinc-200 dark:border-zinc-700">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="https://shop.iamadamnelson.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary-500/20">
                Live Demo <ExternalLink size={18} />
              </a>
              <a href="#" className="px-6 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg font-bold flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all">
                Source Code <Github size={18} />
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
             <div className="relative rounded-xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 aspect-video bg-zinc-100 dark:bg-zinc-900">
              <img src="https://picsum.photos/600/400?random=3" alt="E-Commerce" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
             <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2"><Layers className="text-primary-500" />Project Overview</h2>
              <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                <p>This project bridges the gap between traditional shopping carts and AI. The goal was to increase Average Order Value (AOV) by suggesting relevant add-ons in real-time.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};