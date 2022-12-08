module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1140px",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "custom-gray": "#212428",
        "custom-gray2": "#343A40",
        "custom-gray3": "#122333",
        "custom-gray4": "#495057",
        "custom-gray5": "#1d2124",
        "custom-gray6": "#212529",
        "custom-gray7": "#808080",
        "custom-gray8": "#41464d",
        "custom-yellow": "#ffff00",
        "custom-yellow2": "#ffa500",
        "custom-yellow3": "#ffc107",
        "custom-yellow4": "#e0a800",
        "custom-blue": "#97bff1",
        "custom-blue2": "#0056b3",
        "custom-emerald": "#056050",
        "custom-fuschsia": "#590e4c",
      },
    },
  },
  plugins: [],
};
