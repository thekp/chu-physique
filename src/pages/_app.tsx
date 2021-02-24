import React from "react";
import Head from "next/head";
import { jsx, ThemeProvider } from "@emotion/react";

import { NavContextProvider } from "#contexts/navigation";
import Header from "#components/Header";
import Footer from "#components/Footer";
import metadata from "#constants/metadata";
import { color, size } from "#styles/index";
import "#styles/globals.css";

const theme = {
  colors: {
    primary: "hotpink",
    text: { primary: "#FDFDFD" },
  },
  color,
  size,
};

const MyApp = ({ Component, pageProps, router }) => {
  const isTransparent = router.pathname === "/";

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{metadata.BRAND}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavContextProvider>
        <Header isTransparent={isTransparent} />
        <Component {...pageProps} />
        <Footer />
      </NavContextProvider>
    </ThemeProvider>
  );
};

export default MyApp;
