"use client";

type ScrollToTargetButtonProps = {
  children: React.ReactNode;
  className?: string;
  targetId: string;
};

export function ScrollToTargetButton({
  children,
  className,
  targetId,
}: ScrollToTargetButtonProps) {
  function handleClick() {
    const target = document.getElementById(targetId);

    target?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <button
      aria-label="Scroll to project cards"
      className={className}
      onClick={handleClick}
      type="button"
    >
      {children}
    </button>
  );
}
