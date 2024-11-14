import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#242424",
      secondary: "#DDDDD0",
      tertiary: "#C7C7AD",
      quaternary: "#B7B793",
      white: "#FFFFFF",
    },
    extend: {
      fontSize: {
        hero: "10vw",
      },
    },
  },
  plugins: [],
};

export default config;
