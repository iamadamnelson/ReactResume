import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { InterestItem } from '../types';

const interests: InterestItem[] = [

];

export const Interests: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        
        <div className="relative z-10 max-w-6xl mx-auto pb-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Life & Interests</h1>
            <p className="text-zinc-700 dark:text-zinc-300 max-w-2xl font-medium text-lg">
            {} Coming Soon!
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/90 dark:bg-black/80 text-zinc-900 dark:text-white rounded-full backdrop-blur-md shadow-sm border border-zinc-200 dark:border-zinc-700">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Optional Footer/Quote */}
          <div className="mt-24 text-center pb-12 opacity-80">
          {}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};