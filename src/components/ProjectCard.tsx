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
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-ink-700/70 dark:text-white/60 sm:text-xs">
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
            className="rounded-full border border-ink-900/10 px-2 py-0.5 text-[10px] font-semibold text-ink-800 dark:border-white/10 dark:text-white/70 sm:px-3 sm:py-1 sm:text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 text-[10px] font-semibold text-ink-800 dark:text-white/70 sm:gap-2 sm:text-xs">
        {impact.slice(0, 3).map((item) => (
          <span
            key={item}
            className="rounded-full bg-ink-900/5 px-2 py-0.5 dark:bg-white/10 sm:px-3 sm:py-1"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-2 sm:gap-3">
        {demoUrl ? (
          <a
            className="rounded-full border border-ink-900/20 px-3 py-1.5 text-[10px] font-semibold text-ink-900 transition hover:bg-ink-900/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10 sm:px-4 sm:py-2 sm:text-xs"
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        ) : null}
        {repoUrl ? (
          <a
            className="rounded-full border border-ink-900/20 px-3 py-1.5 text-[10px] font-semibold text-ink-900 transition hover:bg-ink-900/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10 sm:px-4 sm:py-2 sm:text-xs"
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
