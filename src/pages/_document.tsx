import { Html, Head, Main, NextScript } from "next/document";
import { msSans, msSansBold, libre } from "@/styles";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`${msSans.variable} ${msSansBold.variable} ${libre.variable}`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
