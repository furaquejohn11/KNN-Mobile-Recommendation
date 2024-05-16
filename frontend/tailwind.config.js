/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainColor: "#101826",
        'custom-white': '#fefeff',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: ["light", "dark", "cupcake"],
      themes:["light"],
  },
}