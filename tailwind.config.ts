import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        normal: "#124A63",
        secondary: "#B3C5CD",
        primary: "#21B6B7",
      },
      backgroundColor: {
        normal: "#F9F9F9",
        dark: "#EEF3F6",
        light: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["var(--font-poppins), sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config
