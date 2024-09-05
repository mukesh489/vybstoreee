/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#003c3c",
      secondary: "#D6D6D666",
      tertiary: "#00DC82",
      primarytxt: "#000000",
      secondarytxt: "#838383",
      othertxt: "#FFFFFF",
    },
    fontSize: {
      h1: "40px",
      h2: "30px",
      h3: "27px",
      h4: "22px",
      body1: "18px",
      body2: "16px",
      wh1: "24px",
      wh2: "20px",
      wh3: "18px",
      wh4: "16px",
      wbody1: "16px",
      wbody2: "14px",
    },
  },
  plugins: [],
};
