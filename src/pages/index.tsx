import Head from "next/head";
import { Icon, StatusBar } from "@/components";
import { msSans, msSansBold, libre } from "@/styles";
import * as S from "./styled";
import { useRef } from "react";
import { useDesktop } from "@/hooks";
import { icons } from "@/constants";

export default function Home() {
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const blockAreaRef = useRef<HTMLDivElement | null>(null);

  const iconsRef = useRef<HTMLDivElement[]>([]);

  const {
    blockAreaStyle,
    desktopEventHandler,
    tempSelectedIcons,
    selectedIcons,
    prevClickedIconIdx,
    clickedIconIdx,
  } = useDesktop({ desktopRef, iconsRef, blockAreaRef });

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
        {...desktopEventHandler}
      >
        <S.BlockArea ref={blockAreaRef} style={{ ...blockAreaStyle }} />
        <S.IconsWrapper>
          {icons.map((icon, i) => {
            const { name, ico } = icon;
            return (
              <Icon
                key={String(name)}
                ico={ico}
                name={name}
                ref={(r: HTMLDivElement) => (iconsRef.current[i] = r)}
                highlighted={
                  selectedIcons[i] ||
                  tempSelectedIcons[i] ||
                  clickedIconIdx === i
                }
                outlined={prevClickedIconIdx === i}
              />
            );
          })}
        </S.IconsWrapper>
        <StatusBar />
      </S.Desktop>
    </>
  );
}
