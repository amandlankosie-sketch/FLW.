import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "green";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-charcoal text-cream hover:bg-charcoal-light border border-charcoal",
  secondary:
    "bg-transparent text-charcoal hover:bg-charcoal hover:text-cream border border-charcoal/30 hover:border-charcoal",
  outline:
    "bg-transparent text-cream hover:bg-cream hover:text-charcoal border border-cream/30 hover:border-cream",
  green:
    "bg-flw-green text-cream hover:bg-flw-green-light border border-flw-green",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  as = "button",
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-medium tracking-wide font-display transition-all duration-300 ease-out rounded-none active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if (as === "a" && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
