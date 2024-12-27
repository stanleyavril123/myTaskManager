import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./styles/theme.js";
import { ThemeProvider, CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
