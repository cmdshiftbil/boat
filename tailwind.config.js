const fontFamily = require("tailwindcss/defaultTheme").fontFamily;

/** @type {import('tailwindcss').Config} */
(
  module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./layouts/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
      "./sections/**/*.{ts,tsx}",
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },

      colors: {
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
      },
      extend: {
        backgroundImage: {
          "grid-perspective": "url('/svg/bg-grid-perspective.svg')",
          "grid-surface": "url('/svg/bg-grid-surface-perspective-001.svg')",
          "horizontal-lines": "url('/svg/bg-horizontal-lines.svg')",
        },
        fontFamily: {
          sans: ["Satoshi", ...fontFamily.sans],
          script: ["var(--font-script)"],
        },
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            // DEFAULT: "hsl(var(--primary))",
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          // lg: "var(--radius)",
          // md: "calc(var(--radius) - 2px)",
          // sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
          slider: {
            from: { transform: "translate3d(0, 0, 0)" },
            to: { transform: "translate3d(-100%, 0, 0)" },
          },
          marquee: {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(calc(-50% - var(--gap)/2))" },
          },
        },
        animation: {
          marquee: "marquee var(--duration) linear infinite",
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          slider: "slider 12s linear infinite",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
);
