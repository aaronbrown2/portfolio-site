import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-navy) / <alpha-value>)",
        paper: "rgb(var(--color-white) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        "warm-white": "rgb(var(--color-white) / <alpha-value>)",
        cream: "rgb(var(--color-cream) / <alpha-value>)",
        navy: "rgb(var(--color-navy) / <alpha-value>)",
        "navy-deep": "rgb(var(--color-navy-deep) / <alpha-value>)",
        brown: "rgb(var(--color-brown) / <alpha-value>)",
        "brown-deep": "rgb(var(--color-brown-deep) / <alpha-value>)",
        "brown-muted": "rgb(var(--color-brown-muted) / <alpha-value>)",
        tan: "rgb(var(--color-tan) / <alpha-value>)",
        moss: "rgb(var(--color-moss) / <alpha-value>)",
        tide: "rgb(var(--color-tide) / <alpha-value>)",
        brass: "rgb(var(--color-brass) / <alpha-value>)",
        cloud: "rgb(var(--color-cloud) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(24, 32, 31, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
