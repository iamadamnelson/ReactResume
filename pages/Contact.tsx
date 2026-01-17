import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { Mail, MapPin, Send, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { DataStreamBackground } from '../components/DataStreamBackground';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mrbykogv", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 3000);
      }
    } catch (error) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <PageTransition>
      <div className="relative">

        {/* Background Layer */}
        <div className="absolute inset-[-100px] z-0 opacity-50 pointer-events-none">
          <DataStreamBackground />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Let's work together.</h1>
              <p className="text-zinc-700 dark:text-zinc-300 text-lg font-medium">
                I'm currently available for full-time opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 shadow-sm backdrop-blur-sm">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-500 dark:text-zinc-400">Email</h3>
                  <p className="text-zinc-900 dark:text-white font-bold">iamadamnelson@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 shadow-sm backdrop-blur-sm">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-500 dark:text-zinc-400">Phone</h3>
                  <p className="text-zinc-900 dark:text-white font-bold">+1 (414) 534-2604</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 shadow-sm backdrop-blur-sm">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-500 dark:text-zinc-400">Location</h3>
                  <p className="text-zinc-900 dark:text-white font-bold">Newton, Alabama</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-700 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden shadow-xl">

            {/* Success Overlay */}
            {formState === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 z-20"
              >
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Message Sent!</h3>
                <p className="text-zinc-600 dark:text-zinc-300 mt-2 text-center px-4 font-medium">Thank you for reaching out. I'll get back to you shortly.</p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-6 px-6 py-2 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors text-sm font-bold"
                >
                  Send Another
                </button>
              </motion.div>
            )}

            {/* Error Overlay */}
            {formState === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-0 left-0 right-0 bg-red-100 dark:bg-red-900/30 border-b border-red-200 dark:border-red-500/20 p-4 flex items-center justify-center gap-2 text-red-700 dark:text-red-200 z-20 font-bold"
              >
                <AlertCircle size={18} />
                <span>Something went wrong. Please try again.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contactName" className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Name <span className="text-primary-600 dark:text-primary-400">*</span></label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-black/50 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-zinc-900 dark:text-white transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500 font-medium"
                    placeholder="Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contactEmail" className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Email <span className="text-primary-600 dark:text-primary-400">*</span></label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-black/50 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-zinc-900 dark:text-white transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500 font-medium"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contactSubject" className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Subject</label>
                <input
                  type="text"
                  id="contactSubject"
                  name="contactSubject"
                  className="w-full px-4 py-3 bg-white dark:bg-black/50 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-zinc-900 dark:text-white transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500 font-medium"
                  placeholder="Subject"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contactMessage" className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Message <span className="text-primary-600 dark:text-primary-400">*</span></label>
                <textarea
                  id="contactMessage"
                  name="contactMessage"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-black/50 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-zinc-900 dark:text-white transition-all resize-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500 font-medium"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg"
              >
                {formState === 'submitting' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};