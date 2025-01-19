import * as S from "./styled";
import { GithubPNG, LinkedInPNG, StartIconPNG } from "@/assets/png";
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
          <S.StartIcon src={StartIconPNG.src} />
          <span>Start</span>
        </S.StartButton>
        <S.DividingLine
          css={css`
            margin-left: 1rem;
          `}
        />
        <S.SizingLine
          css={css`
            margin-left: 0.3rem;
          `}
        />
        <S.Icon />
        <S.DividingLine
          css={css`
            margin-left: 1rem;
          `}
        />
        <S.SizingLine
          css={css`
            margin-left: 0.3rem;
            margin-right: 0.5rem;
          `}
        />
        {modals.map(({ name, index, ico, isFocused }) => (
          <S.TaskBarButtonContainer
            key={index}
            onClick={() => setModalFocused(name)}
          >
            <S.TaskBarButton isFocused={isFocused}>
              <S.TaskIcon src={ico.src} />
              <S.TaskName>{name}</S.TaskName>
            </S.TaskBarButton>
          </S.TaskBarButtonContainer>
        ))}
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
