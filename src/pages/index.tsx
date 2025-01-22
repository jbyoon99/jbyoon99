import Head from "next/head";
import { Icon, StartMenu, StatusBar } from "@/components";

import * as S from "./styled";
import { useRef, useState } from "react";
import { useDesktop } from "@/hooks";
import { desktopIconTemplate } from "@/templates";

export default function JByoon99() {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const dragAreaRef = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement[]>([]);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const { selectedIcons, clickedIcon } = useDesktop({
    backgroundRef,
    dragAreaRef,
    iconsRef,
    iconData: desktopIconTemplate,
  });

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

      <S.Desktop id="desktop">
        <S.DragArea ref={dragAreaRef} />
        <S.IconsWrapper>
          {desktopIconTemplate.map((config, idx) => {
            return (
              <Icon
                key={idx}
                config={config}
                ref={(r: HTMLDivElement) => (iconsRef.current[idx] = r)}
                isHighlighted={
                  selectedIcons[idx] || clickedIcon.current === idx
                }
                isOutlined={clickedIcon.initial === idx}
              />
            );
          })}
        </S.IconsWrapper>
        <S.Background
          ref={backgroundRef}
          onClick={() => setIsStartMenuOpen(false)}
          id="background"
        >
          <StartMenu isStartMenuOpen={isStartMenuOpen} />
        </S.Background>

        <StatusBar
          isStartMenuOpen={isStartMenuOpen}
          setIsStartMenuOpen={setIsStartMenuOpen}
        />
      </S.Desktop>
    </>
  );
}
