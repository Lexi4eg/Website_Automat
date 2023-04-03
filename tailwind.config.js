/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green1: "#00ed64",
        bg_gray: "#0f0f0f",
        darkblue1: "#21313c",
        bg_gray2: "#191a1b",
      },
    },
  },
  plugins: [],
};
