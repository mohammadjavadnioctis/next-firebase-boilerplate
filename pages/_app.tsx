import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { appWithTranslation } from "next-i18next";
import { Vazirmatn } from "next/font/google";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>Livist Sigorta</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        // theme={{
        //   /** Put your mantine theme override here */
        //   colorScheme: 'light',
        // }}
      >
        {getLayout(
          <main className={`${vazirmatn.variable} min-h-screen`}>
            <Component {...pageProps} />
          </main>
        )}
      </MantineProvider>
    </>
  );
}

export default appWithTranslation(App);
