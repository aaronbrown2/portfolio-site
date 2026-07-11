"use client";

import {
  type CSSProperties,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type ScrollFocusProps = {
  children: ReactNode;
  className?: string;
  fadeOut?: boolean;
  initialVisible?: boolean;
};

type FocusStyle = {
  filter: string;
  opacity: number;
  transform: string;
};

const clearStart = 0.25;
const clearEnd = 0.75;
const hiddenTop = 0.08;
const hiddenBottom = 0.92;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function smoothstep(edge0: number, edge1: number, value: number) {
  const progress = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return progress * progress * (3 - 2 * progress);
}

function getFocusStyle(
  element: HTMLDivElement,
  { fadeOut }: { fadeOut: boolean },
): FocusStyle {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || 1;
  const centerRatio = (rect.top + rect.height / 2) / viewportHeight;

  let opacity = 1;

  if (fadeOut && centerRatio < clearStart) {
    opacity = smoothstep(hiddenTop, clearStart, centerRatio);
  } else if (centerRatio > clearEnd) {
    opacity = 1 - smoothstep(clearEnd, hiddenBottom, centerRatio);
  }

  const distanceFromCenter = centerRatio - 0.5;
  const absoluteDistance = Math.abs(distanceFromCenter);
  const easedDistance = clamp(absoluteDistance / 0.42, 0, 1);
  const blur = (1 - opacity) * 7;
  const y = distanceFromCenter * -40;
  const z = -easedDistance * 80;
  const rotateX = -distanceFromCenter * 7;
  const scale = 0.965 + opacity * 0.035;

  return {
    filter: `blur(${blur.toFixed(2)}px)`,
    opacity,
    transform: `translate3d(0, ${y.toFixed(2)}px, ${z.toFixed(2)}px) rotateX(${rotateX.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
  };
}

const visibleStyle: FocusStyle = {
  filter: "blur(0)",
  opacity: 1,
  transform: "translate3d(0, 0, 0) rotateX(0deg) scale(1)",
};

export function ScrollFocus({
  children,
  className,
  fadeOut = true,
  initialVisible: _initialVisible = false,
}: ScrollFocusProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const [focusStyle, setFocusStyle] = useState<FocusStyle>(visibleStyle);

  const update = useCallback(() => {
    frame.current = null;

    if (!ref.current) {
      return;
    }

    setFocusStyle(getFocusStyle(ref.current, { fadeOut }));
  }, [fadeOut]);

  const requestUpdate = useCallback(() => {
    if (frame.current === null) {
      frame.current = window.requestAnimationFrame(update);
    }
  }, [update]);

  useEffect(() => {
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frame.current !== null) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, [requestUpdate, update]);

  return (
    <div
      className={className}
      ref={ref}
      style={
        {
          ...focusStyle,
          transition:
            "opacity 120ms linear, filter 120ms linear, transform 120ms linear",
          transformStyle: "preserve-3d",
          willChange: "opacity, filter, transform",
        } satisfies CSSProperties
      }
    >
      {children}
    </div>
  );
}
