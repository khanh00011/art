/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "3xl": { min: "1920px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1025px" },
      md: { max: "768px" },
      sm: { max: "639px" },
      mb: { max: "376px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // 'image1': "url('./public/images/HomeImage1')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        "88px": "88px",
        "110px": "110px",
      },
      spacing: {
        88: "88px",
        140: "140px",
        196: "196px",
        122: "488px",
        163: "163px",
        181: "181px",
        238: "238px",
        345: "345px",
        380: "380px",
        420: "420px",
        480: "480px",
        435: "435px",
        608: "608px",
        755: "755px",
        1440: "1440px",
      },
      maxWidth: {
        110: "110px",
      },
      inset: {
        "input-icon": "11px 0 11px 19px",
      },
      colors: {
        warning: "#F79009",
        success: "#12B76A",
        white: {
          100: "#FFFFFF",
          80: "rgba(255, 255, 255, 0.8)",
          60: "rgba(255, 255, 255, 0.6)",
          40: "rgba(255, 255, 255, 0.4)",
          20: "rgba(255, 255, 255, 0.2)",
          10: "rgba(255, 255, 255, 0.1)",
          5: "rgba(255, 255, 255, 0.05)",
        },
        black: {
          100: "#000000",
          80: "rgba(0, 0, 0, 0.8)",
          60: "rgba(0, 0, 0, 0.6)",
          40: "rgba(0, 0, 0, 0.4)",
          20: "rgba(0, 0, 0, 0.2)",
          10: "rgba(0, 0, 0, 0.1)",
          5: "rgba(0, 0, 0, 0.05",
        },
        primary: {
          100: "#FE3D2D",
          80: "rgba(254, 61, 45, 0.8)",
          60: "rgba(254, 61, 45, 0.6)",
          40: "rgba(254, 61, 45, 0.4)",
          20: "rgba(254, 61, 45, 0.2)",
          10: "rgba(254, 61, 45, 0.1)",
          5: "rgba(254, 61, 45, 0.05)",
        },
      },
      fontFamily: {
        SFProRegular: ["SFPro r"],
        SFProMedium: ["SFPro m"],
        SFProSemi: ["SFPro s"],
        SFProBold: ["SFPro b"],
      },
      backgroundImage: {
        "bgr-artwork": "url('../../public/images/bgr-artwork.png')",
        "mb-artwork": "url('../../public/images/mb-artwork.png')",
      },
      keyframes: {
        wiggle: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
