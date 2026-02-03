import type { Project } from "../data/content";

type ProjectCardProps = Project;

export function ProjectCard({
  title,
  description,
  stack,
  demoUrl,
  repoUrl,
  impact,
  year,
}: ProjectCardProps) {
  return (
    <article className="section-card star-border flex h-full flex-col gap-4 p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] sm:gap-5 sm:p-6">
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-ink-700/70 dark:text-white/60">
          <span>Project</span>
          {year ? (
            <span className="text-[9px] font-semibold sm:text-[10px]">
              {year}
            </span>
          ) : null}
        </div>
        <h3 className="font-heading text-lg font-semibold text-ink-900 dark:text-white sm:text-xl">
          {title}
        </h3>
        <p className="line-clamp-3 text-xs text-ink-700 dark:text-white/70 sm:text-sm">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {stack.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-ink-900/10 px-2.5 py-1 text-xs font-semibold text-ink-800 dark:border-white/10 dark:text-white/70 sm:px-3"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 text-xs font-semibold text-ink-800 dark:text-white/70 sm:gap-2">
        {impact.slice(0, 3).map((item) => (
          <span
            key={item}
            className="rounded-full bg-ink-900/5 px-2.5 py-1 text-xs dark:bg-white/10 sm:px-3"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-2 sm:gap-3">
        {demoUrl ? (
          <a
            className="rounded-full border border-ink-900/20 px-3.5 py-2 text-xs font-semibold text-ink-900 transition hover:bg-ink-900/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10 sm:px-4"
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        ) : null}
        {repoUrl ? (
          <a
            className="rounded-full border border-ink-900/20 px-3.5 py-2 text-xs font-semibold text-ink-900 transition hover:bg-ink-900/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10 sm:px-4"
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        ) : null}
      </div>
    </article>
  );
}
