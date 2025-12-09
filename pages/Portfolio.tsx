import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Azure Cloud Dashboard',
    description: 'A comprehensive cloud resource management dashboard built for enterprise scale. Features real-time cost analysis and resource health monitoring using Azure Monitor API.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Recharts', 'Azure SDK'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    link: 'https://example.com',
    repo: 'https://github.com'
  },
  {
    id: '2',
    title: 'FinTech Analytics Platform',
    description: 'High-performance trading interface with sub-millisecond updates. Implements WebSockets for live data and WebGL for rendering complex financial charts.',
    technologies: ['Next.js', 'WebGL', 'Node.js', 'Redis'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    link: 'https://example.com',
  },
  {
    id: '3',
    title: 'E-Commerce AI Recommendation',
    description: 'A headless e-commerce frontend integrated with a Python-based machine learning engine to provide personalized product recommendations.',
    technologies: ['React', 'Python', 'TensorFlow', 'GraphQL'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    repo: 'https://github.com'
  },
  {
    id: '4',
    title: 'HealthVitals Mobile App',
    description: 'Cross-platform mobile application for tracking patient vitals and medication adherence. Compliant with HIPAA standards.',
    technologies: ['React Native', 'Firebase', 'Redux Toolkit'],
    imageUrl: 'https://picsum.photos/600/400?random=4',
    link: 'https://example.com',
  },
  {
    id: '5',
    title: 'Smart Home Controller',
    description: 'IoT interface for managing smart home devices. Features drag-and-drop automation builder and voice command integration.',
    technologies: ['Vue.js', 'MQTT', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/600/400?random=5',
    link: 'https://example.com',
    repo: 'https://github.com'
  }
];

export const Portfolio: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Featured Projects</h1>
          <p className="text-zinc-400 max-w-2xl">
            A selection of my recent work in web development, data visualization, and UI design.
          </p>
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
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900 aspect-video group-hover:shadow-primary-900/20 transition-all duration-500">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                   <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="flex items-center gap-2 text-primary-400 text-sm font-semibold tracking-wider uppercase">
                   <Code2 size={16} />
                   <span>Project 0{index + 1}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 text-zinc-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-6">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-primary-400 font-medium transition-colors border-b border-transparent hover:border-primary-400 pb-0.5"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                  {project.repo && (
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-zinc-400 hover:text-white font-medium transition-colors"
                    >
                      Source Code <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center pb-12">
            <p className="text-zinc-500">More projects available on <a href="#" className="text-primary-400 hover:underline">GitHub</a></p>
        </div>
      </div>
    </PageTransition>
  );
};