import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const PROJECTS = [
  {
    title: 'Style Haven',
    category: 'E-Commerce',
    description:
      'A modern online fashion store with a seamless checkout flow, product filtering, and a fully responsive design.',
    emoji: '🛍️',
    gradient: 'from-pink-500 to-rose-500',
    tags: ['React', 'Tailwind CSS', 'Stripe'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Brand Identity Suite',
    category: 'Branding',
    description:
      'A complete visual identity including logo, color system, typography, and brand guidelines for a startup.',
    emoji: '🎯',
    gradient: 'from-purple-500 to-pink-500',
    tags: ['Logo Design', 'Brand Guidelines'],
    liveUrl: '',
    sourceUrl: '',
  },
  {
    title: 'FinTrack App',
    category: 'UI/UX',
    description:
      'End-to-end mobile app design for a personal finance tracker focusing on simplicity and delightful interactions.',
    emoji: '📱',
    gradient: 'from-rose-400 to-orange-400',
    tags: ['Figma', 'Prototyping', 'Mobile UI'],
    liveUrl: '#',
    sourceUrl: '',
  },
  {
    title: 'Foodies Blog',
    category: 'Web Development',
    description:
      'A fast, content-rich recipe blog with search, categories, and an elegant reading experience.',
    emoji: '🍲',
    gradient: 'from-amber-400 to-pink-400',
    tags: ['React', 'Contentful', 'SEO'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Travel Planner',
    category: 'Web App',
    description:
      'Interactive trip planning dashboard with maps, itineraries, and collaborative checklists for groups.',
    emoji: '✈️',
    gradient: 'from-sky-400 to-purple-500',
    tags: ['React', 'Map API', 'UI Design'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Wellness Landing Page',
    category: 'Landing Page',
    description:
      'A conversion-focused marketing landing page with animations and a clean, calming visual direction.',
    emoji: '🌿',
    gradient: 'from-emerald-400 to-sky-400',
    tags: ['Tailwind CSS', 'Copywriting', 'Motion'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];

const FILTERS = ['All', ...new Set(PROJECTS.map((project) => project.category))];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = PROJECTS.filter(
    (project) => activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-pink-600 dark:border-pink-500/30 dark:bg-pink-500/10 dark:text-pink-400">
          My Work
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Projects I've <span className="text-pink-500">built with love</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          A selection of design and development projects. Each one taught me something
          new and brought a little more joy into the world.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-2">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
              activeFilter === filter
                ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30'
                : 'border border-gray-200 bg-white text-gray-700 hover:border-pink-500 hover:text-pink-600 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:hover:border-pink-500 dark:hover:text-pink-400'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-gray-500 dark:text-gray-400">
          No projects in this category yet. Check back soon!
        </p>
      )}

      <section className="mt-20 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-14 text-center sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Like what you see?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pink-100">
          Let's create something amazing together for your brand or business.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-pink-600 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-50"
        >
          Start a Project
        </Link>
      </section>
    </div>
  );
}

export default Projects;