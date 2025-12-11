import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { ArrowLeft, ExternalLink, Github, Layers, Cpu, Code2, /* Globe, ShieldCheck, Zap */ } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectOne: React.FC = () => {
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
              <span>Project 01</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight">
              Azure Cloud Resume
            </h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium mb-8">
              An Azure cloud resume built to showcase my experience, skills and portfolio. This website features source control and CI/CD through GitHub, a custom DNS through Cloudflare, and security through Azure CDN.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
               {['React', 'TypeScript', 'Tailwind', 'HTML', 'CSS', 'Azure', 'GitHub', 'Cloudflare'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-md text-sm font-semibold border border-zinc-200 dark:border-zinc-700">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a 
                href="https://www.iamadamnelson.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary-500/20"
              >
                Live Demo <ExternalLink size={18} />
              </a>
{/*               <a 
                href="https://github.com/iamadamnelson/ReactResume" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg font-bold flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all"
              >
                Source Code <Github size={18} />
              </a> */}
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
              <img src="https://picsum.photos/600/400?random=1" alt="Azure Cloud Resume Website" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Content specific to Azure Cloud Resume */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            
            {/* Project Overview - Revised */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Layers className="text-primary-500" />
                Project Overview (Coming Soon)
              </h2>
              <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
{/*                 <p>
                  I built this website not just as a static resume, but as a dedicated avenue to demonstrate my full-stack capabilities in UX/UI design, web development, and data visualization. 
                </p>
                <p className="mt-4">
                  Moving beyond simple templates, I architected this site as a modern cloud application. It serves as a live proof-of-concept for deploying secure, scalable frontend architectures on Azure, integrating professional-grade DevOps practices like CI/CD and version control directly into the workflow.
                </p> */}
              </div>
            </section>

             {/* Key Features - Revised */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Cpu className="text-primary-500" />
                Technical Implementation (Coming Soon)
              </h2>
{/*               <ul className="space-y-4 text-zinc-700 dark:text-zinc-300 font-medium">
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Cloud Infrastructure & Security:</strong> Hosted as an Azure Static Web App with traffic managed via Cloudflare DNS. Security is enforced at the edge using Azure CDN to protect against threats and optimize content delivery.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Automated CI/CD:</strong> Fully integrated source control with GitHub. I utilized GitHub Actions to create a CI/CD pipeline where every push to the main branch automatically builds and deploys the latest version of the site.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Responsive UI & Theming:</strong> Designed with a focus on user experience, featuring a seamless Dark/Light mode toggle, custom dynamic backgrounds, and fully responsive layouts powered by Tailwind CSS.</p>
                </li>
              </ul> */}
            </section>
          </div>
          
          {/* <div className="space-y-8">
             <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Project Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Stack</div>
                  <div className="text-zinc-900 dark:text-white font-medium">React, Azure, GitHub Actions</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Role</div>
                  <div className="text-zinc-900 dark:text-white font-medium">Cloud Engineer & Developer</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </PageTransition>
  );
};