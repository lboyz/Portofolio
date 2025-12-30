type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centerTitle?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  centerTitle = false,
}: SectionTitleProps) {
  return (
    <div className="space-y-2 sm:space-y-3">
      <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-ink-700/70 dark:text-white/60 sm:text-left sm:text-[0.7rem]">
        {eyebrow}
      </p>
      <h2
        className={`font-heading text-2xl font-semibold text-ink-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl ${
          centerTitle ? "text-center" : "text-center sm:text-left"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-ink-700 dark:text-white/70 sm:text-base md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
