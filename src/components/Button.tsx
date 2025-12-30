import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "ghost";

type CommonProps = {
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

const baseStyles =
  "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 focus-visible:outline-none sm:px-5 sm:py-2 sm:text-sm";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ink-900 text-white shadow-glow hover:translate-y-[-2px] hover:bg-ink-800 hover:shadow-glow-lg active:translate-y-0 dark:bg-white dark:text-ink-900 dark:hover:bg-mist dark:hover:shadow-glow-lg",
  ghost:
    "border border-ink-900/20 text-ink-900 hover:bg-ink-900/5 hover:border-ink-900/30 hover:translate-y-[-1px] active:translate-y-0 dark:border-white/20 dark:text-mist dark:hover:bg-white/10 dark:hover:border-white/30",
};

export function Button(props: AnchorProps): ReactElement;
export function Button(props: ButtonProps): ReactElement;
export function Button(props: ButtonProps | AnchorProps) {
  const { children, variant = "primary", icon, className, ...rest } = props;
  const classes = `${baseStyles} ${variants[variant]} ${className ?? ""}`;

  if ("href" in props) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} href={props.href} {...anchorProps}>
        {icon}
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {icon}
      {children}
    </button>
  );
}
