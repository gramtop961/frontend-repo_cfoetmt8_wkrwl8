import { Bot, Shield, BarChart3, MessageSquare, Github, Code2, Users } from 'lucide-react';

const features = [
  {
    title: 'Portfolio Profiles',
    description: 'Showcase your role, bio, skills, social links, and featured projects with beautiful cards.',
    icon: Users,
  },
  {
    title: 'Project Management',
    description: 'Add, edit, and delete projects with tech stacks, GitHub and live links, and rich images.',
    icon: Code2,
  },
  {
    title: 'GitHub Analytics',
    description: 'Pull repositories, stars, and top languages. Visualize insights with interactive charts.',
    icon: Github,
  },
  {
    title: 'AI Tools',
    description: 'Generate a compelling bio and get resume suggestions using state-of-the-art AI.',
    icon: Bot,
  },
  {
    title: 'Secure Auth',
    description: 'JWT-based authentication keeps your account protected and sessions smooth.',
    icon: Shield,
  },
  {
    title: 'Real-time Chat',
    description: 'Connect instantly with other developers via Socket.io rooms and DMs.',
    icon: MessageSquare,
  },
  {
    title: 'Charts Dashboard',
    description: 'Track profile views, followers, and contributions with clean charts.',
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Everything you need to stand out
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            DevLink brings your developer presence to life — from portfolios to analytics and real-time collaboration.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur p-6 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700 transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
