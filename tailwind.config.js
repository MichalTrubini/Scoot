/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow:"#FCB72B",
        navy: "#495567",
        dimGrey:"#939CAA",
        lightGrey:"#E5ECF4",
        snow: "#F2F5F9",
        lightYellow: "#FFF4DF"
      },
      fontSize: {
      },
      screens: {
        dt: "1440px",
      },
    },
  },
  plugins: [],
};
