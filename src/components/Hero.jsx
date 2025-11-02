import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Github, Search, Wand2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlays should not block the 3D scene */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white dark:from-neutral-950/60 dark:via-neutral-950/30 dark:to-neutral-950" />
      </div>

      <div className="absolute inset-x-0 top-0 h-full">
        <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-6xl"
            >
              Build your developer presence with DevLink
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-neutral-700 dark:text-neutral-300"
            >
              A modern portfolio and community platform: showcase projects, analyze your GitHub, chat in real-time, and generate AI-powered bios and resume tips.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#explore"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                <Search size={16} /> Explore developers
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-5 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition"
              >
                <Github size={16} /> Star on GitHub
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300 bg-white/70 dark:bg-neutral-900/60 backdrop-blur"
            >
              <Wand2 size={14} /> AI Resume Analyzer & Bio Generator included
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
