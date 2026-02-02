import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type WelcomeIntroProps = {
  show: boolean;
  text?: string;
};

export function WelcomeIntro({ show, text = "Hello!" }: WelcomeIntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const letters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="welcome-overlay"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <div className="welcome-blur" aria-hidden="true" />
          <div className="welcome-card">
            <motion.div
              className="welcome-text gradient-text shiny-text"
              aria-label={text}
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  variants={letterVariants}
                  className="welcome-letter"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
            <p className="welcome-subtitle">
              Welcome to my page!
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
