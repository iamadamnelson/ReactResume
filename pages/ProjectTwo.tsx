import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { ArrowLeft, ExternalLink, Github, Layers, Cpu, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectOne: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative pb-20">

        {/* Navigation */}
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
              <span>Project 02</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight">
              Azure Cloud Resume
            </h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium mb-8">
              A personal and professional website designed to supplement my static resume and LinkedIn profile to provide a more comprehensive view of my experience, skills and technical capabilities.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['React', 'TypeScript', 'Tailwind', 'Azure', 'GitHub', 'DNS', 'CI/CD'].map(tech => (
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
                Live Site <ExternalLink size={18} />
              </a>
              <a
                href="https://github.com/iamadamnelson/ReactResume"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg font-bold flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all"
              >
                Source Code <Github size={18} />
              </a>
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
              <img src="https://www.iamadamnelson.com/images/project-1.png" alt="Resume Website" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">

            {/* Project Overview */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Layers className="text-primary-500" />
                Project Overview
              </h2>
              <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                <p>
                  With a career as a Federal Employee serving the U.S. Army, I found it difficult to convey the full scope of my skills and experience in a standard resume. I wanted a way to showcase my technical competence in Engineering, Infrastructure, CADD, GIS, IT, Data, so on and so forth.
                </p>
                <p className="mt-4">
                  I decided to build this website as a personal project to create a "live" version of my resume that could be accessed directly in a browser, without relying on external programs. I wanted a space to embed some personal projects I've worked on. To achieve this, I purchased and configured a custom domain with CloudFlare, developed the app in VSCode using React, set up a CI/CD pipeline with GitHub Actions, and deployed and hosted the site on Azure Storage.
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Cpu className="text-primary-500" />
                Key Features
              </h2>
              <ul className="space-y-4 text-zinc-700 dark:text-zinc-300 font-medium">
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Custom Domain & DNS:</strong> Hosted under a personal domain to establish a consistent professional identity.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Automated CI/CD:</strong> GitHub Actions handles building, testing, and deployment on every push to main.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Responsive UI:</strong> Designed to be fully usable across mobile, tablet, and desktop form factors.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Expandable Architecture:</strong> Portfolio and content sections were built as modular components for future growth.</p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};