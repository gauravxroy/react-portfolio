/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colours: {
        primaryColor: "#8873ef",
        headingColor: "#081e21",
        smallTextColor: "#193256",
      },
      dropShadow: {
        lg: "0 30px 30px rgba(156, 39, 176, 0.30)",
      },
    },
  },
  plugins: [],
};
