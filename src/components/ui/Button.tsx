import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-heading font-semibold tracking-tight transition-all duration-300 ease-out rounded-none relative overflow-hidden group";

  const variants = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-400 active:bg-cyan-500",
    secondary:
      "bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-900",
    outline:
      "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
    ghost:
      "text-navy-900 hover:text-cyan-500",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-body-sm",
    md: "px-7 py-3.5 text-body-sm",
    lg: "px-9 py-[18px] text-body",
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
