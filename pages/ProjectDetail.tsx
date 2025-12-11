import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { ArrowLeft, ExternalLink, Github, Layers, Cpu, Code2 } from 'lucide-react';
import { projects } from './Portfolio';
import { motion } from 'framer-motion';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Project Not Found</h2>
          <Link to="/portfolio" className="text-primary-600 hover:underline">Back to Portfolio</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="relative pb-20">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
        </div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider text-sm mb-4">
              <Code2 size={18} />
              <span>Case Study</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-md text-sm font-semibold border border-zinc-200 dark:border-zinc-700">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.link && !project.link.startsWith('/') && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary-500/20"
                >
                  Visit Live Site <ExternalLink size={18} />
                </a>
              )}
              {project.repo && (
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg font-bold flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all"
                >
                  View Code <Github size={18} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary-500/10 blur-3xl rounded-full transform -translate-y-4"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 aspect-video bg-zinc-100 dark:bg-zinc-900">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Detailed Content (Mock Data for now) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Layers className="text-primary-500" />
                Project Overview
              </h2>
              <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                <p>
                  This project was conceived to address specific scalability issues within the client's infrastructure. 
                  By leveraging modern web technologies, we were able to reduce load times by 40% and improve user retention.
                  The interface was designed with a "data-first" approach, ensuring that critical metrics are always visible 
                  without cluttering the viewport.
                </p>
                <p className="mt-4">
                  Key focus areas included accessibility compliance (WCAG 2.1), responsive design for mobile workforce, 
                  and secure authentication flows using OAuth 2.0 standards.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Cpu className="text-primary-500" />
                Technical Challenges
              </h2>
              <ul className="space-y-4 text-zinc-700 dark:text-zinc-300 font-medium">
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Real-time Data Synchronization:</strong> Managing state across multiple clients required a robust WebSocket implementation to ensure data consistency without polling.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Performance Optimization:</strong> Rendering thousands of data points on charts necessitated the use of WebGL acceleration via custom shaders.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Cross-Platform Compatibility:</strong> Ensuring a seamless experience across iOS, Android, and Desktop browsers required extensive testing and polyfill management.</p>
                </li>
              </ul>
            </section>

          </div>

          <div className="space-y-8">
            <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Project Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Timeline</div>
                  <div className="text-zinc-900 dark:text-white font-medium">3 Months (Q1 2024)</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Role</div>
                  <div className="text-zinc-900 dark:text-white font-medium">Lead Frontend Engineer</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Team Size</div>
                  <div className="text-zinc-900 dark:text-white font-medium">4 Developers, 1 Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};