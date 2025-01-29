import { Icon, StartMenu, StatusBar } from "@/components";

import * as S from "./styled";
import { useRef, useState } from "react";
import { useDesktop } from "@/hooks";
import { desktopIconTemplate } from "@/templates";

export const JByoon99 = () => {
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
    <S.Desktop id="desktop">
      <S.DragArea ref={dragAreaRef} />
      <S.Background
        ref={backgroundRef}
        onClick={() => setIsStartMenuOpen(false)}
        id="background"
      >
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
        <StartMenu isStartMenuOpen={isStartMenuOpen} />
      </S.Background>
      <StatusBar
        isStartMenuOpen={isStartMenuOpen}
        setIsStartMenuOpen={setIsStartMenuOpen}
      />
    </S.Desktop>
  );
};
