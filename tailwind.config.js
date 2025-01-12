/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        slideInFromRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "60%": { opacity: "1", transform: "translateX(-20%)" },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        slideInFromRight: "slideInFromRight 2s ease-in forwards", // Define animation duration and easing
      },
    },
    fontFamily: {
      signature: ["Mr De Haviland"],
    },
  },
  plugins: [],
};
