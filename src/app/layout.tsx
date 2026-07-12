import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "Aaron Brown | Full-stack Software Developer",
    template: "%s | Aaron Brown",
  },
  description:
    "Full-stack software developer building secure, user-centered web applications with a background in creative technology, audio production, entrepreneurship, and client web work.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const isLocalDev =
                  location.hostname === "localhost" ||
                  location.hostname === "127.0.0.1";

                if (!isLocalDev) return;

                const originalConsoleError = console.error.bind(console);

                console.error = (...args) => {
                  const isEmptyErrorEvent =
                    args.length === 1 &&
                    args[0] instanceof Event &&
                    args[0].type === "error" &&
                    !("message" in args[0]);

                  if (isEmptyErrorEvent) return;

                  originalConsoleError(...args);
                };
              })();
            `,
          }}
          id="suppress-empty-localhost-error-events"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
