const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const fontFamily = require("tailwindcss/defaultTheme").fontFamily;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Satoshi", ...fontFamily.sans],
    },
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      teal: colors.teal,
      zinc: colors.zinc,
      stone: colors.stone,

      caramel: {
        50: "#f7f4ef",
        100: "#ebe5d6",
        200: "#d9cbaf",
        300: "#c2ab82",
        400: "#b0905f",
        500: "#aa8455",
        600: "#8a6544",
        700: "#6f4e39",
        800: "#5f4234",
        900: "#523a31",
        950: "#2f1f19",
      },

      graphite: {
        50: "#fcf0ea",
        100: "#f8dac9",
        200: "#f2b496",
        300: "#eb8259",
        400: "#e3582c",
        500: "#aa8455",
        600: "#b62b18",
        700: "#921a16",
        800: "#791a1d",
        900: "#681b21",
        950: "#0a0203",
      },

      aubergine: {
        50: "#fef2f2",
        100: "#fde6e6",
        200: "#f9d2d3",
        300: "#f5acaf",
        400: "#ee7e85",
        500: "#e3505d",
        600: "#cf2f45",
        700: "#ae2239",
        800: "#921f36",
        900: "#7d1e33",
        950: "#360912",
      },

      shark: {
        50: "#f6f7f7",
        100: "#e0e7e7",
        200: "#c1cdce",
        300: "#9aacae",
        400: "#74898d",
        500: "#5a6f72",
        600: "#47565a",
        700: "#3b474a",
        800: "#323b3d",
        // 900: "#000",
        900: "#1a1e1f",
      },
      pampas: {
        50: "#f9f8f7",
        100: "#f2edeb",
        200: "#eae1de",
        300: "#daccc7",
        400: "#c4aea5",
        500: "#ad9186",
        600: "#96786c",
        700: "#7c6359",
        800: "#68544c",
        900: "#594943",
      },
      galleryThumb: "#391010",
      orange: {
        50: "#FEF6F3",
        100: "#FCEDE8",
        200: "#F8D2C4",
        300: "#F4B7A1",
        400: "#EC825B",
        500: "#E44C14",
        600: "#CD4412",
        700: "#892E0C",
        800: "#672209",
        900: "#441706",
      },
    },
    extend: {
      backgroundImage: {
        "grid-perspective": "url('/svg/bg-grid-perspective.svg')",
        "grid-surface": "url('/svg/bg-grid-surface-perspective-001.svg')",
        "horizontal-lines": "url('/svg/bg-horizontal-lines.svg')",
      },
      boxShadow: {
        "5xl": "-5px -5px 20px 0px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        spin: "spin calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - var(--gap)/2))" },
        },
        spin: {
          "0%": {
            rotate: "0deg",
          },
          "15%, 35%": {
            rotate: "90deg",
          },
          "65%, 85%": {
            rotate: "270deg",
          },
          "100%": {
            rotate: "360deg",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("tailwindcss-fluid-type")({
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        fontSizeMin: 0.6875, // 1.125rem === 18px
        fontSizeMax: 1.35, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 108, // 96rem === 1536px
        unit: "rem", // default is rem but it's also possible to use 'px'
        prefix: "clamp-", // set a prefix to use it alongside the default font sizes
        extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      // values: {
      //   xs: [-2, 1.6],
      //   sm: [-1, 1.6],
      //   base: [0, 1.6],
      //   lg: [1, 1.6],
      //   xl: [2, 1.2],
      //   "2xl": [3, 1.2],
      // "3xl": [4, 1.2],
      //   "4xl": [5, 1.1],
      //   "5xl": [6, 1.1],
      //   "6xl": [7, 1.1],
      //   "7xl": [8, 1],
      //   "8xl": [9, 1],
      //   "9xl": [10, 1],
      // },
    }),

    // translate-z
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            // transform: `translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
            transform: "translateZ(var(--tw-translate-z))",
          }), // this is actual CSS
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
    }),

    // rotate-x
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "rotate-x": (value) => ({
            "--tw-rotate-x": value,
            transform: "rotateX(var(--tw-rotate-x))",
          }), // this is actual CSS
          "rotate-y": (value) => ({
            "--tw-rotate-y": value,
            transform: "rotateY(var(--tw-rotate-y))",
          }),
          "rotate-z": (value) => ({
            "--tw-rotate-z": value,
            transform: "rotateY(var(--tw-rotate-z))",
          }),
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
    }),
    // Variants
    plugin(({ addVariant }) => {
      addVariant("invert", ":merge(.invert) &");
    }),
  ],
};
