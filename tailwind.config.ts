import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem", xl: "2.5rem" },
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        navy: {
          50: "#eef2f9",
          100: "#d6e0f0",
          200: "#adc0e0",
          300: "#7b97c8",
          400: "#4d6aa8",
          500: "#2f4a85",
          600: "#1f356a",
          700: "#152a58",
          800: "#0d1f44",
          900: "#081633",
          950: "#050d1f",
        },
        gold: {
          50: "#fbf7ec",
          100: "#f5eccf",
          200: "#ecd89a",
          300: "#e2c266",
          400: "#d9b85c",
          500: "#c9a24b",
          600: "#a9852f",
          700: "#87681f",
          800: "#6b511d",
          900: "#5a441c",
        },
        ivory: "#f8f6f1",
        sand: "#efeae0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(8, 22, 51, 0.06), 0 12px 40px rgba(8, 22, 51, 0.08)",
        lift: "0 20px 60px -12px rgba(8, 22, 51, 0.22)",
        gold: "0 12px 40px -12px rgba(201, 162, 75, 0.5)",
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 38s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
