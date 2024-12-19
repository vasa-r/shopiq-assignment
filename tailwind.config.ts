import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
        logo: ["Geostar", "serif"],
        menu: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        custom:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        bottom: "0px 1px 0px 0px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        "bounce-in": "bounceIn 0.5s ease-out",
      },
      keyframes: {
        bounceIn: {
          "0%": { transform: "scale(0.5)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
    screens: {
      sm: "576px",
      md: "760px",
      lg: "1440px",
    },
  },
  plugins: [],
  safelist: ["snap-start", "scroll-smooth"],
} satisfies Config;
