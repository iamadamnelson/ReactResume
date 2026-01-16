import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { ArrowLeft, Github, Layers, Cpu, Code2, Play, Cloud, Database, Box } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectTwo: React.FC = () => {
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
              <span>Project 01</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight">
              IoT Sensor Dashboard & Weather Enrichment Pipeline
            </h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium mb-8">
              A full-stack IoT solution that creates a representative digital twin of my home environment.
              This project ingests real-time telemetry from an MXChip sensor, enriches it with
              live external weather data via Azure Functions, and visualizes the correlation
              in a 3D Viewer using Autodesk Platform Services (APS).
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Azure IoT Hub', 'Azure Functions', 'Cosmos DB', 'MXChip AZ3166 DevKit', 'Autodesk APS', 'OpenWeatherMap', 'PowerBI', 'React'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-md text-sm font-semibold border border-zinc-200 dark:border-zinc-700">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
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
            </div>
          </motion.div>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
            <Layers className="text-primary-500" />
            Project Overview
          </h2>
          <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
            <p>
              I programmed an MXChip controller to capture telemetry and stream it directly to Azure IoT Hub. To handle the data, I wrote custom Azure Functions in Node.js—one to securely manage Autodesk authentication tokens and another to act as an ingestion engine. This recorder function intercepts the incoming sensor messages, enriches them with real-time conditions from the OpenWeatherMap API, and stores the combined dataset in Cosmos DB.
            </p>
            <p className="mt-4">
              On the frontend, I built a React application to visualize this pipeline, deploying it via GitHub and Vercel, and configuring a custom DNS CNAME. I integrated the Autodesk Platform Services (APS) Viewer to render a representative 3D model of my house and wrote custom extensions to overlay the live data. This involved mapping sensor readings to specific 3D coordinates, rendering interactive sprites, and feeding the enriched historical data into dynamic charts for real-time analysis.
            </p>
          </div>
        </section>


        {/* Technical Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            {/* Implementation Details */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Cpu className="text-primary-500" />
                Future Roadmap
              </h2>
              <ul className="space-y-4 text-zinc-700 dark:text-zinc-300 font-medium">
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p>
                    <strong>Power BI Integration:</strong> Advanced analytics to model thermal efficiency (Indoor vs. Outdoor delta).
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p>
                    <strong>Predictive Alerts:</strong> Machine learning model to predict indoor humidity spikes based on pressure drops (storm fronts).
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p>
                    <strong>Multi-Sensor Support:</strong> Expanding the schema to support multiple rooms/devices.
                  </p>
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
