import Head from "next/head";
import { levi, libre } from "@/styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>JByoon99</title>
        <meta
          name="description"
          content="Developer JByoon99 Official Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jbyoon99_logo.ico" />
      </Head>
      <div
        style={{ height: "100%" }}
        className={`${levi.variable} ${libre.variable}`}
      >
      </div>
    </>
  );
}
