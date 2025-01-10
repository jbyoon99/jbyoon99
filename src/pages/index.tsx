import Head from "next/head";
import { Icons, StatusBar } from "@/components";
import { msSans, msSansBold, libre } from "@/styles";
import * as S from "./styled";
import { useRef } from "react";
import { css } from "@emotion/react";
import { useBlockArea } from "@/hooks";

export default function Home() {
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const { width, height, top, left, onMouseDown, onMouseMove, onMouseUp } =
    useBlockArea(anchorRef);

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
        ref={anchorRef}
        className={`${msSans.variable} ${msSansBold.variable} ${libre.variable}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        <S.BlockArea
          css={css`
            width: ${width}px;
            height: ${height}px;
            top: ${top}px;
            left: ${left}px;
          `}
        />
        <Icons />
        <StatusBar />
      </S.Wrapper>
    </>
  );
}
