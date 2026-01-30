import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-secondary text-white hover:bg-gray-800",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  );
}
