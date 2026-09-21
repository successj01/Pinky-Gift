function ProjectCard({ project }) {
  const { title, category, description, emoji, gradient, tags, liveUrl, sourceUrl } = project;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <div
        className={`flex h-44 shrink-0 items-center justify-center bg-gradient-to-br ${gradient} text-6xl`}
      >
        <span className="transition-transform duration-300 group-hover:scale-110">
          {emoji}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-pink-500">
          {category}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>

        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-slate-700 dark:text-gray-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {(liveUrl || sourceUrl) && (
          <div className="mt-5 flex gap-3 border-t border-gray-100 pt-4 dark:border-slate-700">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-pink-600 hover:text-pink-700"
              >
                Live Demo →
              </a>
            )}
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;