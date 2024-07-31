/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "coral-red": "#FF4040", // Example hex color for coral red
      },
    },
    // screens: {
    //   md1200: { max: "1200px" },
    //   md1000: { max: "1000px" },
    //   min800: { max: "800px" },
    //   min620: { max: "620px" },
    //   min540: { max: "540px" },
    //   min450: { max: "450px" },
    //   min375: { max: "375px" },
    // },
  },
  // plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
  plugin: ["tailwind-scrollbar"],
};
