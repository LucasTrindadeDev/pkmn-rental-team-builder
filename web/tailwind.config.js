/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "pk-white": "#ffffff",
        "pk-gray": "#4d4d4d",
        "pk-black": "#000000",
        "pk-blue": "#2edcdb",
        "pk-turquoise": "#00aeb5",
        "pk-yellow": "#fbcb00",
      },
    },
  },
  plugins: [],
};
