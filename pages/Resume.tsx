import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Download } from 'lucide-react';

export const Resume: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen">

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col gap-8 h-full pb-12">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-300 dark:border-zinc-700 pb-8 transition-colors duration-300">
            <div>
              <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">Resume</h1>
              <p className="text-zinc-700 dark:text-zinc-300 font-medium">Review my professional journey.</p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.iamadamnelson.com/files/Adam%20Nelson%20Resume.docx"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-white text-sm font-bold transition-all shadow-sm"
              >
                <Download size={16} className="text-blue-600 dark:text-blue-400" />
                Download .DOCX
              </a>
              <a
                href="https://www.iamadamnelson.com/files/Adam%20Nelson%20Resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-white text-sm font-bold transition-all shadow-sm"
              >
                <Download size={16} className="text-red-600 dark:text-red-400" />
                Download .PDF
              </a>
            </div>
          </div>

          {/* Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4">
            <div className="lg:col-span-1 p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 backdrop-blur-md shadow-sm">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Interactive Resume</h3>
              <p className="text-zinc-800 dark:text-zinc-200 mb-4 text-sm leading-relaxed font-medium">
                Instead of scrolling a list, I've visualized my experience using Microsoft Power BI.
                Interact with the dashboard to explore my skills and experience. Or download a
                traditional copy of my resume in .docx or .pdf file above.
              </p>
            </div>

            {/* PowerBI Embed Container */}
            <div className="lg:col-span-2 relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-700 shadow-xl bg-white dark:bg-black">
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
        </div>
      </div>
    </PageTransition>
  );
};