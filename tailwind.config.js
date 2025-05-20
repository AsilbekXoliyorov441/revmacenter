// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }, // 2x data uchun 50%
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
};
