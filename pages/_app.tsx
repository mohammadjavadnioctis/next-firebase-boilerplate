import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { appWithTranslation } from "next-i18next";
import { Vazirmatn } from 'next/font/google';

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic", "latin-ext"] , 
  weight:["100","200", "300" ,"400", "500", "600", "700", "800", "900"],
  variable: '--font-vazirmatn',
});


function App(props: AppProps) {
  const { Component, pageProps } = props;

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
        <main  className={`${vazirmatn.variable}`}>
          <Component {...pageProps} />

        </main>
      </MantineProvider>
    </>
  );
}

export default appWithTranslation(App);
