import { Link } from 'react-router-dom';
import HomeImage from '../assets/HomeImage.jpeg';
import Typewriter from '../components/Typewriter';

const HERO_SKILLS = ['UI/UX Designer', 'Frontend Developer', 'Brand Designer'];

const STATS = [
  { value: '3+', label: 'Years of Experience' },
  { value: '25+', label: 'Projects Delivered' },
  { value: '15+', label: 'Happy Clients' },
];

const FEATURED_SKILLS = [
  { name: 'UI/UX Design', icon: '🎨', desc: 'Clean, user-centered interfaces built with modern design systems.' },
  { name: 'Web Development', icon: '⚡', desc: 'Fast, responsive websites powered by React and Tailwind CSS.' },
  { name: 'Brand Identity', icon: '✨', desc: 'Memorable logos and visual identities that tell your story.' },
];

const FEATURED_PROJECTS = [
  {
    title: 'E-Commerce Store',
    category: 'Web App',
    emoji: '🛍️',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Brand Identity Suite',
    category: 'Branding',
    emoji: '🎯',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Mobile App UI',
    category: 'UI/UX',
    emoji: '📱',
    gradient: 'from-rose-400 to-orange-400',
  },
];

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl dark:bg-pink-500/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-500/10"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-24 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-pink-600 dark:border-pink-500/30 dark:bg-pink-500/10 dark:text-pink-400">
              Welcome to my portfolio
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-pink-500">Omeire Gift Chidiebube</span>
            </h1>

            <p className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-200">
              {HERO_SKILLS.join(' • ')}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
              <Typewriter
                text="I craft delightful digital experiences that blend beautiful design with clean, performant code. Let's turn your ideas into something people love."
                speed={35}
              />
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/projects"
                className="rounded-full bg-pink-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-600"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="rounded-full border-2 border-pink-500 px-8 py-3 text-sm font-semibold text-pink-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-50 dark:hover:bg-pink-500/10"
              >
                Let's Talk
              </Link>
            </div>
          </div>

          <div className="relative mx-auto max-w-[16rem] sm:max-w-xs">
            <div
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-transparent blur-2xl"
              aria-hidden="true"
            />
            <img
              src={HomeImage}
              alt="Portrait of PinkyGift"
              className="relative aspect-square w-full rounded-full border-4 border-white object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6 lg:px-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-sky-400">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            What I Do Best
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">
            A quick look at the skills I bring to every project.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_SKILLS.map((skill) => (
            <article
              key={skill.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-2xl dark:bg-pink-500/10">
                {skill.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{skill.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/skills"
            className="text-sm font-semibold text-pink-600 hover:text-pink-700"
          >
            See all skills →
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-slate-800/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">
              A few things I've built recently that I'm proud of.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
              >
                <div
                  className={`flex h-40 items-center justify-center bg-gradient-to-br ${project.gradient} text-5xl`}
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {project.emoji}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-pink-500">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="rounded-full bg-pink-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-600"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pink-100">
            I'm always open to discussing new ideas and collaborations. Let's build
            something great together.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-pink-600 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-50"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;