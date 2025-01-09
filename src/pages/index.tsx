import Head from "next/head";
import { Icons, StatusBar } from "@/components";
import { msSans, msSansBold, libre } from "@/styles";
import * as S from "./styled";
import { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";

export default function Home() {
  const WrapperRef = useRef();
  const [initialPosition, setInitialPosition] = useState(null);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [wrapperPosition, setWrapperPosition] = useState(null);

  useEffect(() => {
    const position = {
      x: WrapperRef.current.getBoundingClientRect().x,
      y: WrapperRef.current.getBoundingClientRect().y,
    };
    setWrapperPosition(position);
    console.log(position);
  }, [WrapperRef]);

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
        ref={WrapperRef}
        className={`${msSans.variable} ${msSansBold.variable} ${libre.variable}`}
        onMouseDown={(e) => {
          console.log(e);
          setInitialPosition({ x: e.clientX, y: e.clientY });
        }}
        onMouseMove={(e) => {
          setCurrentPosition({ x: e.clientX, y: e.clientY });
        }}
        onMouseUp={() => {
          setInitialPosition(null);
        }}
      >
        {initialPosition && wrapperPosition && (
          <S.BlockArea
            css={css`
              width: ${Math.abs(initialPosition.x - currentPosition.x)}px;
              height: ${Math.abs(initialPosition.y - currentPosition.y)}px;
              top: ${Math.abs(
                4 +
                  wrapperPosition.y -
                  Math.min(initialPosition.y, currentPosition.y)
              )}px;
              left: ${Math.abs(
                wrapperPosition.x -
                  Math.min(initialPosition.x, currentPosition.x)
              ) - 4}px;
            `}
          />
        )}
        <Icons />
        <StatusBar />
      </S.Wrapper>
    </>
  );
}
