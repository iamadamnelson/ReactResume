import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { ExternalLink, Github, Code2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../types';

export const projects: Project[] = [
  
];

export const Portfolio: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        
        <div className="relative z-10 max-w-6xl mx-auto pb-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Portfolio</h1>
{            <p className="text-zinc-700 dark:text-zinc-300 max-w-2xl font-medium text-lg">
              Coming Soon.
            </p>}
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center group`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 aspect-video group-hover:shadow-primary-500/20 transition-all duration-500">
                     <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
                     <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 text-sm font-bold tracking-wider uppercase">
                     <Code2 size={16} />
                     <span>Project 0{index + 1}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons Section - Updated to 3 Buttons */}
                  <div className="flex flex-wrap gap-4 pt-6">
                    {/* 1. View Project Details (Internal) */}
                    <Link 
                      to={project.link || '#'}
                      className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg font-bold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all shadow-lg"
                    >
                      View Project Details <ArrowRight size={16} />
                    </Link>

                    {/* 2. Live Demo (External) */}
                    <a 
                      href={project.liveUrl || '#'} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg font-bold hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all shadow-sm"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>

                    {/* 3. Source Code (External) */}
{                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg font-bold hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all shadow-sm"
                    >
                      Source Code <Github size={16} />
                    </a>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </PageTransition>
  );
};
