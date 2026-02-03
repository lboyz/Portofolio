import { useState } from "react";
import { navLinks } from "../data/content";
import { Button } from "./Button";

type NavbarProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl shadow-sm dark:border-white/10 dark:bg-ink-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          className="font-heading text-base font-semibold text-ink-900 transition-all duration-300 hover:text-accent-600 dark:text-white dark:hover:text-accent-500 sm:text-lg"
          href="#home"
        >
          Duta Razaq
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-700 dark:text-white/80 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="relative transition-colors duration-300 hover:text-accent-600 dark:hover:text-accent-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent-600 after:transition-all after:duration-300 hover:after:w-full dark:after:bg-accent-500"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <Button
            type="button"
            variant="ghost"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
          >
            {isDark ? "Light" : "Dark"}
          </Button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="rounded-full border border-ink-900/20 px-3.5 py-2 text-xs font-semibold text-ink-900 transition-all duration-300 hover:bg-ink-900/5 hover:border-ink-900/30 dark:border-white/20 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/30 sm:px-3 sm:py-2"
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
          >
            {isDark ? "Light" : "Dark"}
          </button>
          <button
            className="rounded-full border border-ink-900/20 px-3.5 py-2 text-xs font-semibold text-ink-900 transition-all duration-300 hover:bg-ink-900/5 hover:border-ink-900/30 dark:border-white/20 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/30 sm:px-3 sm:py-2"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>
      </div>
      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-white/60 bg-white/90 px-4 py-3 text-sm font-medium text-ink-700 backdrop-blur-xl shadow-lg dark:border-white/10 dark:bg-ink-900/90 dark:text-white/80 md:hidden sm:px-6 sm:py-4"
        >
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-1 transition-colors duration-300 hover:text-accent-600 dark:hover:text-accent-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
