/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Meyellow: "#fcbc58",
        Mered: "#ff6d59",
        Megreen: "#708a65",
      },
    },
  },
  plugins: [],
};
