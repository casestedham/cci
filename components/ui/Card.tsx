import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  href?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  href,
  className = "",
}: CardProps) {
  const content = (
    <div className={`bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}>
      {icon && (
        <div className="text-4xl mb-4">{icon}</div>
      )}
      <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      {href && (
        <span className="inline-block mt-4 text-primary font-semibold hover:underline">
          Learn More →
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
