import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="explore" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/40 dark:to-violet-950/30 p-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Discover talented developers</h2>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                Search by name or filter by skills to find collaborators, mentors, and teammates.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Search by name..."
                className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <select className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>All skills</option>
                <option>React</option>
                <option>Node.js</option>
                <option>Python</option>
                <option>Go</option>
              </select>
              <button className="w-full rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-3 text-sm font-medium hover:opacity-90 transition">
                Search
              </button>
            </div>
          </div>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
