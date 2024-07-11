import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d2323",
        secondary: "#fbf9f5",
        accent: "#ced0f5",
        accent1: "#f5c15c",
        accent2: "#fec9c3",
      },
    },
  },
  plugins: [],
};
export default config;
