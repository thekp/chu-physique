import Head from "next/head";
import { jsx, ThemeProvider } from "@emotion/react";

import Header from "#components/Header";
import metadata from "#constants/metadata";
import { size } from "#styles/index";
import "#styles/globals.css";

const theme = {
  colors: {
    primary: "hotpink",
    text: { primary: "#FDFDFD" },
  },
  size,
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{metadata.BRAND}</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
