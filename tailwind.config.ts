import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          bg: "#070B14",
          surface: "#101A2C",
          "surface-elevated": "#16243A",
          border: "#24344E",
          "text-primary": "#EAF2FF",
          "text-secondary": "#91A4C1",
          cyan: "#38BDF8",
          violet: "#8B5CF6",
        },
      },
      borderRadius: {
        DEFAULT: "12px",
        md: "12px",
        lg: "14px",
        xl: "16px",
        "2xl": "18px",
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam-pro)", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.25s ease-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};

export default config;
