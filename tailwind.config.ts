import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#242424",
      secondary: "#DDDDD0",
    },
    extend: {
      fontSize: {
        fill: "6vw",
      },
    },
  },
  plugins: [],
};

export default config;
