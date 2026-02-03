type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centerTitle?: boolean;
  descriptionAlign?: "left" | "center" | "justify";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  centerTitle = false,
  descriptionAlign = "justify",
}: SectionTitleProps) {
  const descriptionClasses =
    descriptionAlign === "left"
      ? "text-center sm:text-left"
      : descriptionAlign === "center"
        ? "text-center"
        : "text-justify";

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
        <p
          className={`mx-auto max-w-2xl ${descriptionClasses} text-sm leading-relaxed text-ink-700 dark:text-white/70 sm:mx-0 sm:max-w-none md:text-lg ${
            descriptionAlign === "left" ? "sm:w-full" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
