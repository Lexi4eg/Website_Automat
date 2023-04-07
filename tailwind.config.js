/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "10xl": "17.5rem",
      },
      colors: {
        green1: "#00ed64",
        bg_gray: "#0f0f0f",
        darkblue1: "#21313c",
        bg_gray2: "#191a1b",
        bg_blue: "#202024",
        bg_gray3: "#191a1b",
        home_gray: "#212425",
      },
    },
  },
  plugins: [],
};
