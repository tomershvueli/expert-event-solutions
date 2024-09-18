import HeadlessTailwindPlugin from "@headlessui/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/**/*.html",
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      colors: {
        lightBlack: "#111",
        lightGrey: "#96968F",
        wheat: "#FAF9EC",
        offWhite: "#E9E8D5",
        wetCoral: "#D0564F",
        gingerFlower: "#D0514A",
        lightGingerFlower: "#CF554E",
      },
      fontSize: {
        "welcome-title": "72px",
        "contact-header": "56px",
        "ees-logo": "50px",
        "section-header": "48px",
        "section-subtext": "32px",
        "button-lg": "24px",
        "paragraph-lg": "22px",
        "paragraph-sm": "20px",
        "form-text": "16px",
      },
      fontFamily: {
        title: ["Merriweather", "Times New Roman", "serif"],
        text: ["Roboto Flex", "Arial", "sans"],
      },
      keyframes: {
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(100px)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.7s ease-in-out forwards",
        "slide-down": "slide-down 0.7s ease-in-out forwards",
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
