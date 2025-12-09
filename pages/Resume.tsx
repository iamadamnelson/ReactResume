import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Download } from 'lucide-react';

export const Resume: React.FC = () => {
  return (
    <PageTransition>
      <div className="flex flex-col gap-8 h-full">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-800 pb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Resume</h1>
            <p className="text-zinc-400">Review my professional journey.</p>
          </div>
          
          <div className="flex gap-3">
            <a 
              href="https://www.iamadamnelson.com/files/Adam%20Nelson%20Resume.docx" 
              download 
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-sm font-medium transition-all"
            >
              <Download size={16} className="text-blue-400" />
              Download .DOCX
            </a>
            <a 
              href="https://www.iamadamnelson.com/files/Adam%20Nelson%20Resume.pdf" 
              download 
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-sm font-medium transition-all"
            >
              <Download size={16} className="text-red-400"/>
              Download .PDF
            </a>
          </div>
        </div>

        {/* Introduction to Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4">
          <div className="lg:col-span-1 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Interactive Resume</h3>
            <p className="text-zinc-400 mb-4 text-sm leading-relaxed">
              Instead of a document, I've visualized my experience using Microsoft Power BI. 
              Interact with the dashboard to explore my skills and experience. Or download a
              tradional copy of my resume in .doxc or .pdf file above.
            </p>
{/*             <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Filter by Technology Stack
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Drill-down into Case Studies
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                View Certification Timeline
              </li>
            </ul> */}
          </div>

          {/* PowerBI Embed Container */}
          <div className="lg:col-span-2 relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-black">
            <div className="absolute top-4 right-4 z-10">
               <span className="px-2 py-1 bg-black/60 text-xs text-white rounded backdrop-blur-md border border-white/10">Live Embed</span>
            </div>
            {/* Note: This is a placeholder src. Replace with actual Power BI Publish to Web URL */}
            <iframe 
              title="Power BI Resume" 
              width="100%" 
              height="100%" 
              src="https://app.powerbi.com/view?r=eyJrIjoiMGZiMDQxMDctZGRhOC00NzlmLWE3M2QtMWM3MWZlZThiNWUyIiwidCI6IjYzMGE3NGI0LWFmOWEtNDVlNi1iOTU3LWM0NGQ5YmE5ZTVkOCJ9" 
              allowFullScreen={true}
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Static Experience Summary (Fallback/Accessible) */}
        <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { role: "Engineering Technician (Civil)", company: "U.S. Army Corp of Engineers Mobile District", period: "October 2024 - June 2025" },
                    { role: "Technical Information Specialist", company: "U.S. Army TRADOC", period: "May 2024 - October 2024" },
                    { role: "Engineering Technician", company: "U.S. Army Corp of Engineers ERDC", period: "March 2021 - January 2024" },
                    { role: "Engineering Technician", company: "U.S. Army Installation Management Command", period: "February 2006 - March 2021" }
                ].map((job, index) => (
                    <div key={index} className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
                        <h4 className="text-lg font-medium text-white">{job.role}</h4>
                        <div className="flex justify-between mt-1 text-sm text-zinc-500">
                            <span>{job.company}</span>
                            <span>{job.period}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </PageTransition>
  );
};