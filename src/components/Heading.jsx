import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  children,
  as: Tag = "h2",
  align = "left",
  className,
}: SectionHeadingProps) {
  const sizeClasses = Tag === "h1" ? "text-4xl lg:text-5xl" : "text-2xl sm:text-3xl";

  return (
    <Tag
      className={cn(
        "font-heading font-extrabold uppercase tracking-wide text-slate-900",
        sizeClasses,
        align === "center" && "text-center",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

interface SubheadingProps {
  children: React.ReactNode;
  as?: "h3" | "h4";
  className?: string;
}

export function Subheading({ children, as: Tag = "h3", className }: SubheadingProps) {
  return (
    <Tag className={cn("font-heading font-bold text-2xl text-slate-900", className)}>
      {children}
    </Tag>
  );
}
