/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        client: "0px 4px 12px 0px rgba(151,151,151,0.25)",
        enquery: "0px 0px 15px 0px #00000038",
      },
      colors: {
        primary: "#20B2FF",
        secondary: "#032435",
        customGreen: "rgba(63, 185, 80, 1)",
        customPink: "rgba(247, 120, 186, 1)",
        customBlue: "rgba(25, 150, 255, 1)",
        customPurple: "rgba(164, 101, 241, 1)",
      },
      backdropBlur: {
        304: "304px",
        client: "44px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        hellix: ["Hellix", "sans-serif"],
      },
    },
  },
  plugins: [],
};
