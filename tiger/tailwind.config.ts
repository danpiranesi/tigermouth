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
  content: [""],
  theme: {
    extend: {
      colors: {
        primaryBg: "#D2CDCD",
        secondaryBg: "#BBC5ED",
        tertiaryBg: "#D09B2C",
        primaryText: "#020202",
        secondaryText: "#E4E4E4",
        accentPrimary: "#D09B2C",
      },
      fontSize: { ...TAILWIND_FONTS },
      // fontFamily: {
      //   abcRepro: ["var(--font-abc-repro)"],
      //   ibmPlexMono: ["var(--font-ibm-plex-mono)"],
      // },
    },
  },
  plugins: [],
};
export default config;
