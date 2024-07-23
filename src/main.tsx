import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "../store/storeIndex.ts";
import { Provider } from "react-redux";
import { ThemeProvider } from "./components/costum/theme-provider.tsx";
import { Toaster } from "./components/ui/toaster.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
