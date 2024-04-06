"use client";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import theme from "./theme";
import { makeStore, persistor } from "../../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

export default function ThemeRegistry({ children }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={makeStore}>
          <PersistGate persistor={persistor} loading={null}>
            {children}
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
