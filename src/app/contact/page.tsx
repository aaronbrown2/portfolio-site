import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact form for Aaron Brown.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-cream text-ink">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="border-b border-line pb-8">
          <h1 className="balanced text-4xl font-bold text-ink sm:text-5xl">
            Send a quick note.
          </h1>
          <p className="mt-4 text-base leading-7 text-ink/72">
            Use this form for software roles, project conversations, or a short
            introduction.
          </p>
        </div>

        <ContactForm className="mt-8" idPrefix="contact-page" />
      </div>
    </section>
  );
}
