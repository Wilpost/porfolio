/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "#6E56CF",
        primaryDark: "#543fa9",
        ghostPrimary: "#1C1526",
        contrastGhostColor: "#2A1F45",
        secondaryContrarColor: "#503591",
        grayBackgroundColor: "#232224",
        contrastTextColor: "#BAA7FF",
        secondTextColor: "#cbcace",
        backgroundColorPrimary: "#121113",
        backgroundColorSecondary: "#000000",
        lighBackground: "#e1d5ff",
        lightBackgroundContrast: "#b1a6bb99",
      },
      keyframes: {
        showNavDark: {
          "0%": {
            color: "white",
            backgroundColor: "transparent",
          },
          "100%": {
            backgroundColor: "#fff",
            color: "black",
            border: "1px solid #dcd5d5",
            boxShadow: "-1px 0px 4px 0px #e5e1e1",
          },
        },

        showNavLight: {
          "0%": {
            color: "black",
            backgroundColor: "transparent",
          },
          "100%": {
            backgroundColor: "#fff",
            color: "black",
            border: "1px solid #dcd5d5",
            boxShadow: "-1px 0px 4px 0px #e5e1e1",
          },
        },
      },
      animation: {
        showNavDark: "showNavDark 0.5s both",
        showNavLight: "showNavLight 0.5s both",
      },
    },
  },
  plugins: [],
}
