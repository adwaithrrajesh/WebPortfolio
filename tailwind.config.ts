import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blue-gradient": "linear-gradient(to right, rgba(0, 0, 255, 0.2), rgba(0, 0, 255, 0.1))",
        // Optionally include other gradients you might use
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'glass-blue': 'rgba(255, 255, 255, 0.1)', // Customize this as needed
      }
    },
  },
  plugins: [],
};

export default config;
