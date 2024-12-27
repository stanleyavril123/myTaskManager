import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ebe8e2",
    },
    secondary: {
      main: "#800020",
    },
  },
  typography: {
    fontFamily: ["Inter", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
          height: "100%",
        },
        body: {
          margin: 0,
          minHeight: "100%",
        },
        "#root": {
          height: "100%",
        },
        ".square": {
          width: "8px",
          height: "8px",
          background: "#f0201c",
          display: "inline-block",
        },
      },
    },
  },
});

export default theme;
