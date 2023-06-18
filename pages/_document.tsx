import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="h-full min-h-full pt-32 bg-shark-900">
        {/* <Header /> */}
        <Main />
        {/* <Footer /> */}
        <NextScript />
      </body>
    </Html>
  );
}
