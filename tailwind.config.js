import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8576FF",
        gray: "#334155",
        gray2: "#64748B",
        black: "#000000",
        green: "#10B981",
        greenLight: "#D1FAE5",
        white: "#FFFFFF",
        primaryLight: "#FCF7FF",
        danger: "#F43F5E",
        blue: "#3B82F6",
        blueLight: "#DBEAFE",
        darkest:"#484554",
        bgDark:"#383544",
        grayLight:"#6b7280"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
