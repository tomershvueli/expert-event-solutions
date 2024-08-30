import HeadlessTailwindPlugin from "@headlessui/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/**/*.html",
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    screens: { sm: "340px" },
    extend: {
      colors: {
        black: "#111",
        red: "#D0564F",
        wheat: "#FAF9EC",
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
      keyframes: {
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.7s ease-in-out forwards",
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
