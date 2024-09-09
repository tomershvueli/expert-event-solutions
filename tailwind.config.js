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
        wheat: "#FAF9EC",
        magenta: "#D0564F",
        offwhite: "#E9E8D5",
      },
      fontSize: {
        "welcome-title": "72px",
        "contact-header": "56px",
        "ees-logo": "50px",
        "section-header": "48px",
        "section-subtext": "32px",
        "button-lg": "24px",
        "paragraph-lg button-sm": "22px",
        "paragraph-sm": "20px",
        "form-text": "16px",
      },
      fontFamily: {
        title: ["Merriweather", "Times New Roman", "serif"],
        text: ["Roboto Flex", "Arial", "sans"],
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
