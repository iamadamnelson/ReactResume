import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { ArrowLeft, Github, Layers, Cpu, Code2, Play, Cloud, Database, Globe, Box } from 'lucide-react';
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
              IoT Sensor Dashboard & Weather Enrichment Pipeline
            </h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium mb-8">
              A full-stack IoT solution that creates a Digital Twin of a home environment. 
              This project ingests real-time telemetry from an MXChip sensor, enriches it with 
              live external weather data via Azure Functions, and visualizes the correlation 
              in a 3D Viewer using Autodesk Platform Services (APS).
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
               {['Azure IoT Hub', 'Azure Functions', 'Cosmos DB', 'MXChip AZ3166 DevKit', 'Autodesk APS', 'OpenWeatherMap', 'PowerBI'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-md text-sm font-semibold border border-zinc-200 dark:border-zinc-700">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {/* Internal Link to the Dashboard Demo */}
              <Link 
                to="https://iot-sensor-dashboard.iamadamnelson.com/" 
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary-500/20"
              >
                Launch Dashboard <Play size={18} fill="currentColor" />
              </Link>
              <a 
                href="https://github.com/iamadamnelson/IOT-Sensor-Dashboard" 
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
              <img src="https://www.iamadamnelson.com/images/project-2.JPG" alt="IoT Sensor Dashboard" className="w-full h-full object-contain" />
              
              {/* Play Overlay Hint */}
{/*               <Link to="/portfolio/project-2/demo" className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                   <Play size={32} className="text-white ml-1" fill="currentColor" />
                </div>
              </Link> */}
            </div>
          </motion.div>
        </div>
        {/* Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Cloud className="text-blue-500" />, title: "Real-Time Monitoring", desc: "Live streaming of Temp, Humidity, and Pressure from MXChip AZ3166." },
            { icon: <Globe className="text-emerald-500" />, title: "Data Enrichment", desc: "Azure Function intercepts messages and injects OpenWeatherMap data." },
            { icon: <Box className="text-purple-500" />, title: "3D Digital Twin", desc: "Integration with Autodesk Platform Services (APS) for visualization." },
            { icon: <Layers className="text-amber-500" />, title: "Historical Analysis", desc: "Custom-built SVG charting with dynamic scaling and Min/Max indicators." }
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <div className="mb-4">{feature.icon}</div>
              <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            
            {/* Architecture Section */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <Layers className="text-primary-500" />
                Architecture
              </h2>
              <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-bold font-mono">
                  <div className="px-4 py-2 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">MXChip</div>
                  <div className="text-zinc-400">➡</div>
                  <div className="px-4 py-2 bg-blue-500 text-white rounded">IoT Hub</div>
                  <div className="text-zinc-400">➡</div>
                  <div className="px-4 py-2 bg-emerald-500 text-white rounded">Azure Function (Enrichment)</div>
                  <div className="text-zinc-400">➡</div>
                  <div className="px-4 py-2 bg-amber-500 text-white rounded">Cosmos DB</div>
                  <div className="text-zinc-400">➡</div>
                  <div className="px-4 py-2 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">React App</div>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                  <p><strong>Ingestion:</strong> The MXChip sensor sends telemetry to <strong>Azure IoT Hub</strong>.</p>
                  <p><strong>Enrichment:</strong> The <code>iot-recorder</code> function triggers on messages, fetches local weather data, and merges payloads.</p>
                  <p><strong>Storage:</strong> Combined JSON saved to <strong>Azure Cosmos DB</strong>.</p>
                  <p><strong>Visualization:</strong> React frontend queries <code>iot-telemetry</code> API and overlays onto APS Viewer.</p>
                </div>
              </div>
            </section>

            {/* Implementation Details */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Cpu className="text-primary-500" />
                Technical Implementation
              </h2>
              <ul className="space-y-4 text-zinc-700 dark:text-zinc-300 font-medium">
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Custom Enrichment Pipeline:</strong> Built a serverless Node.js v4 function that correlates internal sensor data with external meteorological data in under 200ms.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p><strong>Digital Twin Mapping:</strong> Implemented 3D model interaction where sensor status changes are reflected in the Autodesk Viewer's theme and overlay states.</p>
                </li>
              </ul>
            </section>

          </div>

          <div className="space-y-8">
            <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Tech Stack</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <Cpu size={16} className="text-zinc-400" />
                   <div>
                     <div className="text-xs font-bold text-zinc-500 uppercase">Hardware</div>
                     <div className="text-zinc-900 dark:text-white font-medium text-sm">MXChip IoT DevKit (AZ3166)</div>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <Cloud size={16} className="text-zinc-400" />
                   <div>
                     <div className="text-xs font-bold text-zinc-500 uppercase">Infrastructure</div>
                     <div className="text-zinc-900 dark:text-white font-medium text-sm">Azure Hub/Cosmos/Functions</div>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <Database size={16} className="text-zinc-400" />
                   <div>
                     <div className="text-xs font-bold text-zinc-500 uppercase">Backend</div>
                     <div className="text-zinc-900 dark:text-white font-medium text-sm">Node.js (Functions v4)</div>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <Box size={16} className="text-zinc-400" />
                   <div>
                     <div className="text-xs font-bold text-zinc-500 uppercase">3D Visualization</div>
                     <div className="text-zinc-900 dark:text-white font-medium text-sm">Autodesk Platform Services</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};
