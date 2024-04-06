import type { Config } from "tailwindcss"

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#FE5002",
      secondary: "#101828",
      border: "#D0D5DD",
      "border-dark": "#2E2E2E",
      dark: "#101828",
      label: "#475367",
      "grey-text": "#101928",
      "text-primary": "#0A2540",
      "text-light": "#425466",
    },

    fontFamily: {
      interLight: ["interLight", "sans-serif"],
      inter: ["inter", "sans-serif"],
      interMedium: ["interMedium", "sans-serif"],
      interSemibold: ["interSemibold", "sans-serif"],
      interBold: ["interBold", "sans-serif"],
      helveticaLight: ["helveticaLight", "sans-serif"],
      helvetica: ["helvetica", "sans-serif"],
      helveticaMedium: ["helveticaMedium", "sans-serif"],
      helveticaBlack: ["helveticaBlack", "sans-serif"],
      helveticaBold: ["helveticaBold", "sans-serif"],
    },
  },
  plugins: [],
}
export default config
