// ==> Interfaces
import { DefaultTheme } from "@interfaces/theme-interface";

// ==> Color
const colors = {
  white: "#FBFBFE",
  black: "#202124",
  blue: "#002D57",
  lightBlue: "hsl(214,100%,59%)",
};

export const lightTheme: DefaultTheme = {
  primary: colors?.white,
  secundary: colors?.black,
  blue: colors?.blue,

  // Statics
  light: colors?.white,
  black: colors?.black,
};

export const darkTheme: DefaultTheme = {
  primary: colors?.black,
  secundary: colors?.white,
  blue: colors?.lightBlue,

  // Statics
  light: colors?.white,
  black: colors?.black,
};
