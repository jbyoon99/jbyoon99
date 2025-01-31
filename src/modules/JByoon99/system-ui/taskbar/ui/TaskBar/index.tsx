import * as S from "./styled";
import { GithubPNG, LinkedInPNG, JByoonSmallLogoPNG } from "assets/png";
import { css } from "@emotion/react";
import { useTick } from "../../hook";
import { get12HourTimeWithNotation } from "utils/get12HourTimeWithNotation";
import { useState } from "react";

export const TaskBar = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const time = useTick(get12HourTimeWithNotation, 1000);

  return (
    <S.StatusBar>
      <S.TaskBar>
        <S.StartButton
          isStartMenuOpen={isStartMenuOpen}
          onClick={() =>
            setIsStartMenuOpen((isStartMenuOpen) => !isStartMenuOpen)
          }
        >
          {isStartMenuOpen && <S.Outline />}
          <S.StartIcon src={JByoonSmallLogoPNG.src} />
          <span>Start</span>
        </S.StartButton>

        <S.DividingLine />
        <S.SizingLine />

        <S.Icon
          onClick={() =>
            window.open("https://www.linkedin.com/in/재빈-윤-801543226")
          }
          src={LinkedInPNG.src}
        />
        <S.Icon
          onClick={() => window.open("https://github.com/jbyoon99")}
          src={GithubPNG.src}
        />

        <S.DividingLine />
        <S.SizingLine />

        <S.TaskBarButtonContainer></S.TaskBarButtonContainer>
      </S.TaskBar>
      <S.SystemTray>
        <S.DividingLine
          css={css`
            margin-right: 1rem;
          `}
        />
        <S.TrayContainer>
          <div></div>
          <S.Time>{time}</S.Time>
        </S.TrayContainer>
      </S.SystemTray>
    </S.StatusBar>
  );
};
