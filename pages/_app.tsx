/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from "next/app";
import Head from "next/head";

import Providers from "../contexts/Providers";

import Colors from "../components/Global/Colors";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {  DefaultFonts, GlobalStyle } from "../styles/globals";
import Page from "../components/Global/Page";

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;1,100;1,200;1,300;1,400;1,600;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;1,400&display=swap" rel="stylesheet"/>
        </Head>
        <Providers>
          <DefaultFonts />
            <Colors />        
            <GlobalStyle />
            <Page>
            <Header />
                <Component {...pageProps} />    
                <Footer /> 
            </Page> 
        </Providers>       
      </>
    );
}

export default MyApp;
