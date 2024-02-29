/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('../public/background-stars.svg')",
      },
      backgroundColor: {
        Mercury: "#419EBB",
        Venus: "#EDA249",
        Earth: "#6F2ED6",
        Mars: "#D14C32",
        Jupiter: "#D83A34",
        Saturn: "#CD5120",
        Uranus: "#1EC2A4",
        Neptune: "#2D68F0",
      },
      borderColor: {
        Mercury: "#419EBB",
        Venus: "#EDA249",
        Earth: "#6F2ED6",
        Mars: "#D14C32",
        Jupiter: "#D83A34",
        Saturn: "#CD5120",
        Uranus: "#1EC2A4",
        Neptune: "#2D68F0",
      },
    },
  },
  plugins: [],
};
