import Head from "next/head";
import { Icon, StatusBar } from "@/components";

import * as S from "./styled";
import { useRef } from "react";
import { useDesktop } from "@/hooks";
import { desktopIconTemplate } from "@/templates";

export default function Home() {
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const blockAreaRef = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement[]>([]);

  const {
    blockAreaStyle,
    tempSelectedIcons,
    selectedIcons,
    prevClickedIconIdx,
    clickedIconIdx,
  } = useDesktop({ desktopRef, iconsRef });

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

      <S.Desktop id="desktop" ref={desktopRef}>
        <S.BlockArea ref={blockAreaRef} style={{ ...blockAreaStyle }} />
        <S.IconsWrapper>
          {desktopIconTemplate.map((config, i) => {
            return (
              <Icon
                key={i}
                config={config}
                ref={(r: HTMLDivElement) => (iconsRef.current[i] = r)}
                isHighlighted={
                  selectedIcons[i] ||
                  tempSelectedIcons[i] ||
                  clickedIconIdx === i
                }
                isOutlined={prevClickedIconIdx === i}
              />
            );
          })}
        </S.IconsWrapper>
        <StatusBar />
      </S.Desktop>
    </>
  );
}
