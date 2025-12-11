import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { ArrowLeft, /* ExternalLink, Github, */ Layers, Cpu, Code2, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectTwo: React.FC = () => {
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
              <span>Project 02</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight">
              Personal Smart Home Digital Twin
            </h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium mb-8">
{/*               "I didn't just want a list of numbers; I wanted to see my home."
              <br/><br/> */}
              A IoT command center designed to visualize telemetry from three custom-configured Azure MXChip DevKits deployed across my residence.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
               {['React Three Fiber', 'Azure IoT Hub', 'MXChip DevKit', 'Power BI', 'WebGL'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-md text-sm font-semibold border border-zinc-200 dark:border-zinc-700">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {/* Internal Link to the Dashboard Demo */}
              <Link 
                to="/portfolio/project-2/demo" 
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary-500/20"
              >
                Launch Dashboard <Play size={18} fill="currentColor" />
              </Link>
              {/* <a 
                href="https://github.com/iamadamnelson/" 
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
              <img src="https://www.iamadamnelson.com/images/project-2.jpg" alt="Smart Home Dashboard" className="w-full h-full object-cover" />
              
              {/* Play Overlay Hint */}
              <Link to="/portfolio/project-2/demo" className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                   <Play size={32} className="text-white ml-1" fill="currentColor" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Content specific to Smart Home */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Layers className="text-primary-500" />
                Project Overview (Coming Soon)
              </h2>
{/*               <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                <p>
                  This project utilizes a custom React Three Fiber rendering engine to map sensor data (Temperature, Humidity, Pressure) from 3 physical MXChip IoT nodes onto a spatially accurate 3D model of my actual floorplan.
                </p>
                <p className="mt-4">
                  The architecture demonstrates a complete Azure IoT lifecycle: Hardware sensors transmit MQTT payloads to <strong>Azure IoT Hub</strong>, which triggers serverless functions to update a high-frequency JSON state store. This drives the real-time WebGL frontend while simultaneously logging historical data to Azure SQL for the embedded Power BI analytics dashboard.
                </p>
              </div> */}
            </section>
             <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Cpu className="text-primary-500" />
                Technical Implementation (Coming Soon)
              </h2>
{/*               <ul className="space-y-4 text-zinc-700 dark:text-zinc-300 font-medium">
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Hardware Integration:</strong> 3x MXChip IoT DevKits configured to monitor Garage, Main Floor, and Second Floor environments.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Declarative 3D Scenes:</strong> The entire 3D scene is built with React components, allowing the 3D state to stay perfectly synced with the App state without imperative DOM manipulation.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Analytics Pipeline:</strong> Data is ingested via MQTT, processed by Azure Functions, and visualized via both Real-time WebGL and Historical Power BI reports.</p>
                </li>
              </ul> */}
            </section>
          </div>
          
          {/* <div className="space-y-8">
             <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Project Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Status</div>
                  <div className="text-green-600 dark:text-green-400 font-medium flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Live Prototype</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Architecture</div>
                  <div className="text-zinc-900 dark:text-white font-medium">Client-Side SPA (WebGL)</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Performance</div>
                  <div className="text-zinc-900 dark:text-white font-medium">60 FPS @ 1080p</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </PageTransition>
  );
};
