import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  external?: boolean;
  download?: boolean;
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  external,
  download,
  className
}: CTAButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tide",
    variant === "primary" && "bg-navy text-white hover:bg-navy-deep",
    variant === "secondary" && "card-border bg-white/78 text-ink hover:border-tide hover:bg-white",
    variant === "quiet" && "text-ink underline decoration-line underline-offset-4 hover:text-tide",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {external ? <ArrowUpRight aria-hidden className="h-4 w-4" /> : null}
    </>
  );

  if (external || download) {
    return (
      <a
        className={classes}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        download={download}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
