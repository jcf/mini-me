const defaultTheme = require("tailwindcss/defaultTheme");

// Straight out of tailwindcss/typography.
//
// https://github.com/tailwindlabs/tailwindcss-typography/blob/a57e11645d82e09628c111aa4673901f1e0707a7/src/styles.js
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: "inherit",
              fontWeight: "normal",
            },
            blockquote: {
              fontWeight: "inherit",
              fontStyle: "inherit",
              color: "inherit",
              borderLeft: 0,
              paddingLeft: em(40, 20),
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        sm: { css: { blockquote: { paddingLeft: em(40, 18) } } },
        base: { css: { blockquote: { paddingLeft: em(40, 20) } } },
        lg: { css: { blockquote: { paddingLeft: em(48, 24) } } },
        xl: { css: { blockquote: { paddingLeft: em(64, 30) } } },
        "2xl": { css: { blockquote: { paddingLeft: em(80, 36) } } },
      }),
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/typography")],
};
