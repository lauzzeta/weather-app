import { pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
      light: pink[400],
      dark: pink[900],
    },
    secondary: {
      main: pink[200],
      light: pink[100],
      dark: pink[600],
    },
    common: {
      main: "rgba(255, 255, 255, 0.1)",
      light: "#f48225",
      dark: pink[700],
    },
    text: {
      main: "#ffffff",
      white: "#ffffff",
      dark: pink[300],
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","), //Roboto Condensed
  },
});
