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
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue:{
          ligth: "#87c8f9",
          DEFAULT: "#0166B1"
        },
        gray:{
          DEFAULT: "#6F6F6F"
        }
      },
    },
  },
  plugins: [],
};
export default config;
