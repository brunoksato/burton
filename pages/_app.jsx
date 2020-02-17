import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../configureStyle";
import { theme } from "../theme";
import { StateManagerProvider } from "../state/context/createContext";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StateManagerProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </StateManagerProvider>
    );
  }
}
