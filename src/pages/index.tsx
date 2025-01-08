import Head from "next/head";
import { StatusBar } from "@/components";
import { levi, libre } from "@/styles";
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
      <S.Wrapper className={`${levi.variable} ${libre.variable}`}>
        <StatusBar />
      </S.Wrapper>
    </>
  );
}
