import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: {100: "#667185", 200: "#687385", 300:"#697386", 400: "#4F566B"},
        blue: {100: "#5469D4", },
        purple: {100: "#625AFA"},
        gray: {100: "#E3E8EE"},
        black: {100: "#171717", 200: "#1A1F36"},
        white: {100: "#ffffff"},
        green: {100: "#0E6245", 200: "#CBF4C9"},
        orange: {100: "#9C3F0F", 200: "#F8E5BA"}
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        navBar: '-1px 0px 0px 0px #E3E8EE inset',
        tooltip: '0px 1px 1px 0px #0000001F 0px 0px 0px 1px #3C425729 0px 2px 5px 0px #3C425714',
        
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ]
};
export default config;
