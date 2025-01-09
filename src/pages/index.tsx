import Head from "next/head";
import { Icons, StatusBar } from "@/components";
import { msSans, msSansBold, libre } from "@/styles";
import * as S from "./styled";

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
      <S.Wrapper
        className={`${msSans.variable} ${msSansBold.variable} ${libre.variable}`}
      >
        <Icons />
        <StatusBar />
      </S.Wrapper>
    </>
  );
}
