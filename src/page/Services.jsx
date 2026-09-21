import { Link } from 'react-router-dom';

const SERVICES = [
  {
    title: 'Website Design',
    desc: 'Modern, conversion-focused website designs that make your brand look its best.',
    features: ['Landing pages', 'Business websites', 'Portfolio sites', 'Responsive layouts'],
    icon: '🖥️',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Web Development',
    desc: 'Clean, fast, and accessible websites built with React and modern tooling.',
    features: ['React applications', 'Tailwind CSS', 'API integration', 'Performance tuning'],
    icon: '⚡',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'UI/UX Design',
    desc: 'User-centered interfaces and experiences backed by research and testing.',
    features: ['Wireframes & prototypes', 'Mobile app design', 'Design systems', 'Usability testing'],
    icon: '🎨',
    gradient: 'from-rose-400 to-orange-400',
  },
  {
    title: 'Brand Identity',
    desc: 'Memorable visual identities that capture the personality of your business.',
    features: ['Logo design', 'Color & typography', 'Brand guidelines', 'Social media kits'],
    icon: '✨',
    gradient: 'from-amber-400 to-pink-400',
  },
];

const PROCESS = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We talk about your goals, audience, and vision to define what success looks like.',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'I craft wireframes and polished visuals, refining them with your feedback.',
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Your design comes to life — clean, responsive, and performing code.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    desc: 'We ship, test, and make sure everything runs smoothly — then support it going forward.',
  },
];

function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-pink-600 dark:border-pink-500/30 dark:bg-pink-500/10 dark:text-pink-400">
          Services
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          What I can <span className="text-pink-500">do for you</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          From a single landing page to a complete brand experience, these are the
          services I offer to bring your ideas to life.
        </p>
      </div>

      <section className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-2xl shadow-lg`}
            >
              {service.icon}
            </div>
            <h2 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
            <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-400">{service.desc}</p>
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  <span className="text-pink-500" aria-hidden="true">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          How I Work
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-gray-600 dark:text-gray-400">
          A simple, transparent process that keeps you involved at every step.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item) => (
            <article key={item.step} className="relative rounded-2xl bg-gray-50 p-6 dark:bg-slate-800">
              <span className="text-3xl font-extrabold text-pink-200 dark:text-pink-500/30">{item.step}</span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-14 text-center sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Ready to start your project?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pink-100">
          Tell me what you need and I'll get back to you with a plan and a quote.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-pink-600 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-50"
        >
          Get a Free Quote
        </Link>
      </section>
    </div>
  );
}

export default Services;