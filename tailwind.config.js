import { faWheatAlt } from "@fortawesome/free-solid-svg-icons";
import HeadlessTailwindPlugin from "@headlessui/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    screens: { sm: "390px" },
    extend: {
      colors: {
        black: "#111",
        red: "#D0564F",
        wheat: "#FAF9EC",
        offwhite: "#E9E8D5",
      },
      fontSize: {
        "welcome-title": "44px",
        "section-header": "32px",
        "section-subtext": "20px",
        "paragraph-lg": "16px",
        "paragraph-sm": "14px",
        "caption-text": "12px",
      },
      fontFamily: {
        text: ["Rubik", "Arial", "sans"],
      },
      maxWidth: {
        pageContent: "370px",
      },
    },
  },
  plugins: [
    HeadlessTailwindPlugin({ prefix: "ui" }),
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-none": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
