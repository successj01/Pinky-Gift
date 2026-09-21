import { Link } from 'react-router-dom';
import AboutImage from '../assets/AboutImage.jpeg';

const PERSONAL_INFO = [
  { label: 'Name', value: 'Omeire Gift' },
  { label: 'Role', value: 'UI/UX Designer & Frontend Developer' },
  { label: 'Email', value: 'hello@pinkygift.dev' },
  { label: 'Location', value: 'Lagos, Nigeria' },
  { label: 'Availability', value: 'Open to freelance & full-time' },
];

const VALUES = [
  {
    title: 'User First',
    desc: 'Every decision starts with the people who will actually use the product.',
    icon: '💡',
  },
  {
    title: 'Clean Code',
    desc: 'Maintainable, readable, and performant code that stands the test of time.',
    icon: '🧩',
  },
  {
    title: 'Honest Design',
    desc: 'Simple, purposeful visuals with no fluff — form that always follows function.',
    icon: '🎯',
  },
  {
    title: 'Always Learning',
    desc: 'Constantly exploring new tools, techniques, and trends to level up my craft.',
    icon: '📚',
  },
];

const TIMELINE = [
  {
    period: '2022 — Present',
    title: 'Freelance Designer & Developer',
    desc: 'Working with startups and small businesses to design and build their digital presence.',
  },
  {
    period: '2020 — 2022',
    title: 'Junior Frontend Developer',
    desc: 'Built responsive, accessible user interfaces for web products as part of an agile team.',
  },
  {
    period: '2018 — 2020',
    title: 'Self-Taught Journey',
    desc: 'Fell in love with design and code, learning HTML, CSS, JavaScript, and design fundamentals.',
  },
];

function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-pink-600 dark:border-pink-500/30 dark:bg-pink-500/10 dark:text-pink-400">
          About Me
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Designing with heart, <span className="text-pink-500">coding with care</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          I'm Omeire Gift — a designer and developer who loves turning complex problems
          into simple, beautiful experiences. I believe the best products are born at
          the intersection of empathy and engineering.
        </p>
      </div>

      <section className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className="rounded-3xl bg-gradient-to-br from-pink-100 via-white to-purple-100 p-8 sm:p-10 dark:from-pink-500/10 dark:via-slate-900 dark:to-purple-500/10">
          <img
            src={AboutImage}
            alt="Portrait of Omeire Gift"
            className="aspect-square w-full max-w-xs rounded-full border-4 border-white object-cover shadow-xl"
          />
          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">Who I Am</h2>
          <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
            From my first lines of HTML to the products I ship today, I've stayed
            curious about how things work and how people interact with them. When I'm
            not at my desk, you'll find me exploring design inspiration, sketching
            ideas, or learning something new.
          </p>
          <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
            I care about the details others overlook — the spacing, the motion, the
            micro-interactions — because those are what turn a good product into a
            memorable one.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Facts</h3>
          <dl className="mt-6 space-y-4">
            {PERSONAL_INFO.map((item) => (
              <div key={item.label} className="flex items-start justify-between gap-6 border-b border-gray-100 pb-4 last:border-0 last:pb-0 dark:border-slate-700">
                <dt className="shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {item.label}
                </dt>
                <dd className="text-right text-sm font-semibold text-gray-900 dark:text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-pink-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-600"
          >
            Work With Me
          </Link>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          What I Stand For
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-2xl dark:bg-pink-500/10">
                {value.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{value.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          My Journey
        </h2>
        <div className="mx-auto mt-12 max-w-3xl">
          {TIMELINE.map((item, index) => (
            <div key={item.title} className="relative flex gap-6 pb-10 last:pb-0">
              {index < TIMELINE.length - 1 && (
                <span
                  className="absolute left-[11px] top-7 h-full w-0.5 bg-pink-100 dark:bg-pink-500/20"
                  aria-hidden="true"
                />
              )}
              <span
                className="relative mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-pink-500 bg-white dark:bg-slate-900"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-pink-500" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-pink-500">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-14 text-center sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Want to know more?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pink-100">
          Check out my skills, services, and projects to see what I can do for you.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/skills"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-pink-600 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-50"
          >
            My Skills
          </Link>
          <Link
            to="/projects"
            className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
          >
            View Projects
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;