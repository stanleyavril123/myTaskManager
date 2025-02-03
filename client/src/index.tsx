import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./styles/theme.ts";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { SidebarProvider } from "./components/Sidebar/SidebarContext.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </React.StrictMode>
  </ThemeProvider>,
);
