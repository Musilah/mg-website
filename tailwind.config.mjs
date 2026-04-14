/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070b12",
        panel: "#0f1520",
        slate: "#121a25",
        mist: "#8a96a8",
        accent: "#1a5cf6",
        "accent-dark": "#4d88ff",
        "flux-blue": "#5290e0",
        "flux-orange": "#f9a32a",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(13, 17, 23, 0.06), 0 4px 16px rgba(13, 17, 23, 0.06)",
        strong: "0 4px 24px rgba(13, 17, 23, 0.1)",
      },
      fontFamily: {
        "fluxmq-logo": ["Verdana", "Geneva", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Courier New'", "monospace"],
      },
      letterSpacing: {
        technical: "0.18em",
      },
    }
  },

  plugins: [require("@tailwindcss/typography")],

};
