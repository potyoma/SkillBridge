/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-50": "#FF9500",
        "orange-70": "#FFBF66",
        "orange-75": "#FFCA80",
        "orange-80": "#FFD499",
        "orange-90": "#FFEACC",
        "orange-95": "#FFF4E5",
        "orange-97": "#FFF9F0",
        "orange-99": "#FFFDFA",
        "white-90": "#E4E4E7",
        "white-95": "#F1F1F3",
        "white-97": "#F7F7F8",
        "white-99": "#FCFCFD",
        "gray-10": "#191919",
        "gray-15": "#262626",
        "gray-20": "#333",
        "gray-30": "#4C4C4D",
        "gray-35": "#59595A",
        "gray-40": "#656567",
        "gray-60": "#98989A",
        "gray-40": "#B3B3B3",
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
