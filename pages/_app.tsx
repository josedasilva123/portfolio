import type { AppProps } from "next/app";
import Header from "../components/Header";
import { GlobalStorage } from "../contexts/GlobalContext";
import { GlobalStyle } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <GlobalStorage>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </GlobalStorage>
  );
}

export default MyApp;
