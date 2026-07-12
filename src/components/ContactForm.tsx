"use client";

import { Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  idPrefix?: string;
  className?: string;
  tone?: "light" | "warm";
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function ContactForm({
  idPrefix = "contact",
  className,
  tone = "light",
}: ContactFormProps) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
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
  const statusClass = cn(
    "text-sm font-semibold",
    status === "success"
      ? "text-tide"
      : status === "error"
        ? "text-brown"
        : "text-navy/60",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      form.reset();
      setStatus("success");
      setStatusMessage("Message sent. Thanks for reaching out.");
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again in a moment.");
    }
  }

  return (
    <form
      className={cn(
        "grid gap-5 rounded-lg border p-5 sm:p-6",
        isWarm
          ? "border-navy/10 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.08)]"
          : "border-line bg-white shadow-sm",
        className,
      )}
      onSubmit={handleSubmit}
    >
      <input
        autoComplete="off"
        className="hidden"
        name="company"
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
        disabled={status === "sending"}
        type="submit"
      >
        <span className="inline-flex h-4 w-4 items-center justify-center">
          <Send aria-hidden className="h-4 w-4" />
        </span>
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {statusMessage ? (
        <p aria-live="polite" className={statusClass}>
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
