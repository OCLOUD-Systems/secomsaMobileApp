/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    tabBarBackground: "#fff",
    primary: "#E5E5E5",
    secondary: "#21262E",
    accent: "#1B55C7",
    statusGreen: "#329C35",
    statusRed: "#1B55C7",
    statusBlue: "#9C3232",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    tabBarBackground: "#151718",
    primary: "#21262E",
    secondary: "#E5E5E5",
    accent: "#1B55C7",
    statusGreen: "#329C35",
    statusRed: "#1B55C7",
    statusBlue: "#9C3232",
  },
};
