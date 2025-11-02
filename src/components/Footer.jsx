import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} DevLink. Crafted for developers.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@devlink.app"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition"
            >
              <Mail size={16} /> hello@devlink.app
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-1.5 text-sm font-medium hover:opacity-90 transition"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
