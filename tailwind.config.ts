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
        primary: "#14B4BC",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // backgroundColor: {
      //   primary: "#14B4BC",
      // }
    },
  },
  plugins: [],
} satisfies Config;
