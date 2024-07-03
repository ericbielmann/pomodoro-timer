import { STATE_IDS } from "./const";

export const themes = {
  [STATE_IDS.Focus]: {
    light: {
      primary: {
        main: "#ff1",
        dark: "#619",
      },
      secondary: {
        main: "#3f5",
        dark: "#621",
      },
    },
    dark: {
      primary: {
        main: "#f557",
        dark: "#600",
      },
      secondary: {
        main: "#311",
      },
    },
  },
  [STATE_IDS.ShortBreak]: {
    light: {
      primary: {
        main: "#305135",
        dark: "#fff",
      },
      secondary: {
        main: "#fff",
      },
    },
    dark: {
      primary: {
        main: "#305",
        dark: "#f2f",
      },
      secondary: {
        main: "#f56",
      },
    },
  },

  [STATE_IDS.LongBreak]: {
    light: {
      primary: {
        main: "#876",
        dark: "#231",
      },
      secondary: {
        main: "#434",
      },
    },
    dark: {
      primary: {
        main: "#862",
        dark: "#261",
      },
      secondary: {
        main: "#494",
      },
    },
  },
};