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
      backgroundImage: {
        pattern1:
          "https://webimages.mongodb.com/_com_assets/cms/l9e8kfw56smkxzqyu-hero-blob-cropped.svg?auto=format%252Ccompress",
      },
      colors: {
        green1: "#00ed64",
        black1: "#001e2b",
        darkblue1: "#21313c",
      },
    },
  },
  plugins: [],
};
