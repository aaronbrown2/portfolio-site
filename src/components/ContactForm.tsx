import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

type ContactFormProps = {
  idPrefix?: string;
  className?: string;
  tone?: "light" | "warm";
};

export function ContactForm({
  idPrefix = "contact",
  className,
  tone = "light",
}: ContactFormProps) {
  const isWarm = tone === "warm";
  const labelClass = cn(
    "grid gap-2 text-sm font-semibold",
    isWarm ? "text-navy" : "text-ink",
  );
  const fieldClass = cn(
    "min-h-11 rounded-md border px-3 py-2 text-base font-normal outline-none transition",
    isWarm
      ? "border-navy/10 bg-white text-navy placeholder:text-navy/40 focus:border-brown focus:bg-white"
      : "border-line bg-cloud/45 text-ink placeholder:text-ink/42 focus:border-tide focus:bg-white",
  );

  return (
    <form
      action={`https://formsubmit.co/${site.email}`}
      className={cn(
        "grid gap-5 rounded-lg border p-5 sm:p-6",
        isWarm
          ? "border-navy/10 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.08)]"
          : "border-line bg-white shadow-sm",
        className,
      )}
      method="POST"
    >
      <input name="_captcha" type="hidden" value="false" />
      <input name="_subject" type="hidden" value="Portfolio contact form" />
      <input name="_template" type="hidden" value="table" />
      <input
        autoComplete="off"
        className="hidden"
        name="_honey"
        tabIndex={-1}
        type="text"
      />

      <div className="grid gap-5">
        <label className={labelClass} htmlFor={`${idPrefix}-name`}>
          Name
          <input
            className={fieldClass}
            id={`${idPrefix}-name`}
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </label>

        <label className={labelClass} htmlFor={`${idPrefix}-email`}>
          Reply email
          <input
            className={fieldClass}
            id={`${idPrefix}-email`}
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>
      </div>

      <label className={labelClass} htmlFor={`${idPrefix}-message`}>
        Message
        <textarea
          className={cn(fieldClass, "min-h-36")}
          id={`${idPrefix}-message`}
          name="message"
          placeholder="A few sentences is plenty."
          required
        />
      </label>

      <button
        className={cn(
          "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:w-fit",
          isWarm
            ? "bg-navy text-white hover:bg-navy-deep focus-visible:outline-brown"
            : "bg-ink text-white hover:bg-navy-deep focus-visible:outline-tide",
        )}
        type="submit"
      >
        <span className="inline-flex h-4 w-4 items-center justify-center">
          <Send aria-hidden className="h-4 w-4" />
        </span>
        Send Message
      </button>
    </form>
  );
}
