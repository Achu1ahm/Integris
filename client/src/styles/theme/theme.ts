import { createTheme } from "@mui/material/styles";

const commonTheme = createTheme({
  typography: {
    h1: {
      fontSize: "1.5em",
    },
    h2: {
      fontSize: "1.35em",
    },
    h3: {
      fontSize: "1.25em",
    },
    h4: {
      fontSize: "1.15em",
    },
    h5: {
      fontSize: "1.05em",
    },
    h6: {
      fontSize: "1em",
    },
    body1: {
      fontSize: "1em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        h1: {
          fontSize: "1.5em",
        },
        h2: {
          fontSize: "1.35em",
        },
        h3: {
          fontSize: "1.25em",
        },
        h4: {
          fontSize: "1.15em",
        },
        h5: {
          fontSize: "1.05em",
        },
        h6: {
          fontSize: "1em",
        },
        p: {
          fontSize: "1em",
        },
        li: {
          fontSize: "1em",
          lineHeight: 1.6,
          margin: "0.5rem 0",
        },
        code: {
          fontSize: "1em",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "2.2rem",
        },
      },
    },
  },
});

const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#1a1a1a",
      light: "#4e4e4e",
      dark: "#000",
    },
    secondary: {
      main: "#b002c7",
      contrastText: "#fff",
    },
    text: {
      primary: "#fff",
    },
    scrollbar: {
      thumb: "#63636364",
      track: "#1a1a1a",
    },
  },
});

const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#e6e6e6",
      light: "#d2d2d2",
      dark: "#828282",
    },
    secondary: {
      main: "#b002c7",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
    scrollbar: {
      thumb: "#828282",
      track: "#e6e6e6",
    },
  },
});

export { lightTheme, darkTheme };
