type SkillBadgeProps = {
  label: string;
  level?: string;
  logo?: string;
  logoSrc?: string;
  logoClassName?: string;
  logoWrapperClassName?: string;
};

export function SkillBadge({
  label,
  level,
  logo,
  logoSrc,
  logoClassName,
  logoWrapperClassName,
}: SkillBadgeProps) {
  return (
    <span className="group flex flex-col items-center gap-2 rounded-full border border-ink-900/10 bg-white/70 px-3 py-3 text-xs font-medium text-ink-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-white/80 hover:border-ink-900/20 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10 dark:hover:border-white/20 sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:py-2.5 sm:text-sm">
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center text-xs font-semibold text-ink-800 dark:text-white/80 sm:h-14 sm:w-14 ${
          logoWrapperClassName ?? ""
        }`}
      >
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={`${label} logo`}
            className={`h-10 w-10 object-contain object-center transition-transform duration-300 ease-out group-hover:scale-110 sm:h-12 sm:w-12 ${
              logoClassName ?? ""
            }`}
          />
        ) : (
          (logo ?? label.slice(0, 2).toUpperCase())
        )}
      </span>
      <div className="flex min-w-0 flex-col items-center gap-0.5 sm:flex-1 sm:items-start sm:gap-0">
        <span className="break-words text-center text-xs sm:text-left sm:text-sm">
          {label}
        </span>
        {level ? (
          <span className="shrink-0 break-all text-[9px] font-semibold uppercase tracking-[0.15em] text-ink-700/70 dark:text-white/60 sm:text-[10px] sm:tracking-[0.2em]">
            {level}
          </span>
        ) : null}
      </div>
    </span>
  );
}
