import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const addVariablesForColors = ({ addBase, theme }: any) => {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}", // Included src folder
  ],
  theme: {
    extend: {
      
      colors: {
        lightblue: '#0066CC', 
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        navy: {
          600: '#1a365d', // Adjust this color to your preferred dark blue
          900: '#0a1829', // Darker navy for background in dark mode
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.4, 0.36, 0, 1)',
      },
      animation: {
        shine: 'shine var(--duration) infinite linear',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        animatedBeam: 'animatedBeam 7s linear infinite',
        marquee: "marquee 80s linear infinite",
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        shine: {
          '0%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          to: {
            'background-position': '0% 0%',
          },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        animatedBeam: {
          '100%': {
            offsetDistance: '100%',
          },
        },
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        
      },
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    fontSize: {
      // Custom extra-small sizes
      'xxxxxs': '0.375rem',  // 6px
      'xxxxs': '0.4375rem',  // 7px
      'xxxs': '0.5rem',      // 8px
      'xxs': '0.625rem',     // 10px

      // Tailwind default sizes
      'xs': '0.75rem',       // 12px
      'sm': '0.875rem',      // 14px
      'base': '1rem',        // 16px
      'lg': '1.125rem',      // 18px
      'xl': '1.25rem',       // 20px
      '2xl': '1.5rem',       // 24px
      '3xl': '1.875rem',     // 30px
      '4xl': '2.25rem',      // 36px
      '5xl': '3rem',         // 48px
      '6xl': '3.75rem',      // 60px
      '7xl': '4.5rem',       // 72px
      '8xl': '6rem',         // 96px
      '9xl': '8rem',         // 128px
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors,  require('@tailwindcss/typography')], // Retain other plugins
};

export default config;
