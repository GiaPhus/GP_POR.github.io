import type { Config } from "tailwindcss";

const withAlpha = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: withAlpha("--color-bg"),
          secondary: withAlpha("--color-bg2"),
        },
        surface: {
          DEFAULT: withAlpha("--color-surface"),
          hover: withAlpha("--color-surface-hover"),
        },
        line: {
          DEFAULT: withAlpha("--color-border"),
          strong: withAlpha("--color-border-strong"),
        },
        fg: {
          DEFAULT: withAlpha("--color-fg"),
          soft: withAlpha("--color-fg-soft"),
          muted: withAlpha("--color-fg-muted"),
          subtle: withAlpha("--color-fg-subtle"),
        },
        accent: {
          DEFAULT: withAlpha("--color-accent"),
          soft: withAlpha("--color-accent-soft"),
          muted: withAlpha("--color-accent-muted"),
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
