import * as S from "./styled";
import StartIconPNG from "@/assets/jbyoon99_start_icon.png";
import { css } from "@emotion/react";
import { useTick } from "@/hooks";
import { get12HourTimeWithNotation } from "@/utils/get12HourTimeWithNotation";
import { useModal } from "@/providers";

export const StatusBar = () => {
  const time = useTick(get12HourTimeWithNotation, 1000);
  const { openedModals, focusedModal, setFocusedModal } = useModal();

  return (
    <S.StatusBar>
      <S.TaskBar>
        <S.StartButton>
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
        <S.TaskBarButtonContainer>
          {openedModals.map(({ meta }) => (
            <S.TaskBarButton
              isFocused={meta.name === focusedModal}
              key={meta.name}
              onClick={() => setFocusedModal(meta.name)}
            >
              <S.TaskIcon src={meta.ico.src} />
              <S.TaskName>{meta.name}</S.TaskName>
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
