/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Adjust as needed
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
        overpass: ["Overpass", "sans-serif"],
        hellix: ["Hellix"],
        hellixBold: ["Hellix Bold", "sans-serif"],
        hellixSemiBold: ["Hellix SemiBold", "sans-serif"],
        hellixMedium: ["Hellix Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
