import Head from "next/head";
import { Icon, StatusBar } from "@/components";
import { msSans, msSansBold, libre } from "@/styles";
import * as S from "./styled";
import { useRef } from "react";
import { css } from "@emotion/react";
import { useBlockArea, useIntersection } from "@/hooks";
import { useDesktop } from "@/hooks";
import { icons } from "@/constants";

export default function Home() {
  const { width, height, top, left, onMouseDown, onMouseMove, onMouseUp } =
    useBlockArea(anchorRef);

  const desktopRef = useRef<HTMLDivElement | null>(null);
  const blockAreaRef = useRef<HTMLDivElement | null>(null);

  const iconsRef = useRef<HTMLDivElement[]>([]);
  useIntersection(blockAreaRef, iconsRef);

  // 여기서 아이콘 배열들을 한꺼번에 관리해야 함.

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
      <S.Desktop
        ref={desktopRef}
        className={`${msSans.variable} ${msSansBold.variable} ${libre.variable}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        {...desktopEventHandler}
      >
        <S.BlockArea ref={blockAreaRef} style={{ ...blockAreaStyle }} />
        <S.IconsWrapper>
          {icons.map((icon, i) => {
            const { name, ico } = icon;
            return (
              <Icon
                key={name}
                ico={ico}
                name={name}
                ref={(r: HTMLDivElement) => (iconsRef.current[i] = r)}
                selected={selectedIcons[i] || tempSelectedIcons[i]}
              />
            );
          })}
        </S.IconsWrapper>
        <StatusBar />
      </S.Desktop>
    </>
  );
}
