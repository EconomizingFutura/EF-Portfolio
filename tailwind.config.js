/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        clientCustom: "0px 2px 10px 0px rgba(151,151,151,0.25)",
        enquery: "0px 0px 15px 0px #00000038",
      },
      colors: {
        primary: "#20B2FF",
        secondary: "#032435",
      },
      backdropBlur: {
        304: "304px",
      },
    },
  },
  plugins: [],
};
