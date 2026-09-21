import { Link } from 'react-router-dom';

const SKILL_GROUPS = [
  {
    title: 'Design',
    icon: '🎨',
    skills: [
      { name: 'Figma', level: 95 },
      { name: 'UI/UX Design', level: 90 },
      { name: 'Wireframing', level: 88 },
      { name: 'Prototyping', level: 85 },
    ],
  },
  {
    title: 'Frontend',
    icon: '⚡',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML & CSS', level: 95 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Responsive Design', level: 90 },
      { name: 'SEO Basics', level: 75 },
      { name: 'Brand Design', level: 85 },
    ],
  },
];

const TOOLS = [
  'Figma',
  'React',
  'JavaScript',
  'Tailwind CSS',
  'HTML',
  'CSS',
  'Git',
  'GitHub',
  'VS Code',
  'Adobe Photoshop',
  'Notion',
  'Canva',
];

function SkillBar({ skill }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
        <span className="text-sm font-bold text-pink-500">{skill.level}%</span>
      </div>
      <div
        className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-slate-700"
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={skill.name}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-pink-600 dark:border-pink-500/30 dark:bg-pink-500/10 dark:text-pink-400">
          Skills
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Tools of <span className="text-pink-500">my trade</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          A blend of design and development skills I've sharpened over the years —
          always learning, always improving.
        </p>
      </div>

      <section className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-2xl dark:bg-pink-500/10">
                {group.icon}
              </span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{group.title}</h2>
            </div>
            <div className="mt-6 space-y-5">
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Technologies I Use
        </h2>
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {TOOLS.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:border-pink-500 hover:text-pink-600 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:hover:border-pink-500 dark:hover:text-pink-400"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-14 text-center sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          See these skills in action
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pink-100">
          Browse my portfolio to see how I put these tools to work on real projects.
        </p>
        <Link
          to="/projects"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-pink-600 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-50"
        >
          View Projects
        </Link>
      </section>
    </div>
  );
}

export default Skills;