/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        clientCustom: "0px 2px 10px 0px rgba(151,151,151,0.25)",
      },
    },
  },
  plugins: [],
};
