import { globalCss } from "@/styles/global-styles";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </>
  );
}
