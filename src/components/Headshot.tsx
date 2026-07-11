import Image from "next/image";
import { cn } from "@/lib/utils";

type HeadshotProps = {
  priority?: boolean;
  className?: string;
};

export function Headshot({ className, priority }: HeadshotProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-line bg-cloud shadow-sm", className)}>
      <Image
        alt="Aaron Brown smiling outdoors"
        className="aspect-[3/4] h-full w-full object-cover"
        height={1200}
        priority={priority}
        sizes="(min-width: 1024px) 360px, 90vw"
        src="/aaron-brown-headshot.jpg"
        width={900}
      />
    </div>
  );
}
