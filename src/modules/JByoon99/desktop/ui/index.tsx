import { TaskBar } from "modules/JByoon99/system-ui";

import * as S from "./styled";
import { useRef, useState } from "react";

import { msSans, msSansBold, libre } from "styles";

export const JByoon99 = () => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const dragAreaRef = useRef<HTMLDivElement | null>(null);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  return (
    <S.Desktop
      className={`${msSans.variable} ${msSansBold.variable} ${libre.variable}`}
      id="desktop"
    >
      <S.DragArea ref={dragAreaRef} />
      <S.Background
        ref={backgroundRef}
        onClick={() => setIsStartMenuOpen(false)}
        id="background"
      ></S.Background>
      <TaskBar
        isStartMenuOpen={isStartMenuOpen}
        setIsStartMenuOpen={setIsStartMenuOpen}
      />
    </S.Desktop>
  );
};
