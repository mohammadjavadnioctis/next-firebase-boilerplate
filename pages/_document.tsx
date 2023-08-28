import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";
const getInitialProps = createGetInitialProps();




export default class _Document extends Document {
  static getInitialProps = getInitialProps;
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>

    )
  }
}
