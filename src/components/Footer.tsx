export function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/40 py-6 text-xs text-ink-700 backdrop-blur-sm dark:border-white/10 dark:bg-ink-900/40 dark:text-white/70 sm:py-8 sm:text-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center sm:items-start sm:gap-4 sm:px-6 sm:text-left md:flex-row md:justify-between">
        <p className="text-ink-600 dark:text-white/60">
          © 2025 Duta Razaq. All rights reserved.
        </p>
        {/* <div className="flex flex-wrap justify-center gap-3 sm:justify-start sm:gap-4">
          <a
            className="transition-colors duration-300 hover:text-accent-600 dark:hover:text-accent-500"
            href="mailto:razaqduta@gmail.com"
          >
            Email
          </a>
          <a
            className="transition-colors duration-300 hover:text-accent-600 dark:hover:text-accent-500"
            href="https://github.com/lboyz"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="transition-colors duration-300 hover:text-accent-600 dark:hover:text-accent-500"
            href="https://www.linkedin.com/in/dutarazaq/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div> */}
      </div>
    </footer>
  );
}
