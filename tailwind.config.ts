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
          ligth: "#0076cf",
          DEFAULT: "#0166B1"
        },
        gray:{
          DEFAULT: "#6F6F6F"
        },
        black:{
          DEFAULT: "#0a0a0a;"
        }
      },
    },
  },
  plugins: [],
};
export default config;
