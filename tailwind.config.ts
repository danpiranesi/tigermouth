import type { Config } from "tailwindcss";

const FONT_SIZE = {
  12: "12px",
  14: "14px",
  16: "16px",
  20: "20px",
  24: "24px",
  30: "30px",
  36: "36px",
  42: "42px",
  48: "48px",
  56: "56px",
  72: "72px",
  96: "96px",
};

export const TAILWIND_FONTS = {
  displayL: FONT_SIZE[96],
  displayM: FONT_SIZE[72],
  displayS: FONT_SIZE[56],
  headerL: FONT_SIZE[48],
  headerM: FONT_SIZE[42],
  headerS: FONT_SIZE[36],
  headerXS: FONT_SIZE[30],
  labelL: FONT_SIZE[30],
  labelM: FONT_SIZE[24],
  labelS: FONT_SIZE[20],
  textL: FONT_SIZE[16],
  textM: FONT_SIZE[14],
  textS: FONT_SIZE[12],
};

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#212F43",
        secondaryBg: "#92AF46",
        tertiaryBg: "#92AF46",
        primaryText: "#E7E7E7",
        secondaryText: "#212F43",
        accentPrimary: "#FFB720",
      },
      fontSize: { ...TAILWIND_FONTS },
    },
    animation: {
      text: 'text 10s ease infinite',
    },
    keyframes: {
      text: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      }
    },
  },
  plugins: []
};

export default config;