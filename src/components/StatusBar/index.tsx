import * as S from "./styled";
import { GithubPNG, LinkedInPNG, JByoonSmallLogoPNG } from "@/assets/png";
import { css } from "@emotion/react";
import { useModal, useTick } from "@/hooks";
import { get12HourTimeWithNotation } from "@/utils/get12HourTimeWithNotation";

export const StatusBar = ({ isStartMenuOpen, setIsStartMenuOpen }) => {
  const time = useTick(get12HourTimeWithNotation, 1000);
  const {
    state: { modals },
    setModalFocused,
  } = useModal();

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

        <S.TaskBarButtonContainer>
          {modals.map(({ name, index, ico, isFocused }) => (
            <S.TaskBarButton
              key={index}
              onClick={() => setModalFocused(name)}
              isFocused={isFocused}
            >
              <S.TaskIcon src={ico.src} />
              <S.TaskName>{name}</S.TaskName>
            </S.TaskBarButton>
          ))}
        </S.TaskBarButtonContainer>
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
