/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import { GlobalStorage } from "../contexts/GlobalContext";
import { DefaultColors, DefaultFonts, GlobalStyle } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStorage>
        <DefaultFonts />
        <DefaultColors />
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />        
      </GlobalStorage>
    </>
  );
}

export default MyApp;
