import * as S from "./styled";
import StartIconPNG from "@/assets/jbyoon99_start_icon.png";
import { css } from "@emotion/react";
import { useTick } from "@/hooks";
import { get12HourTimeWithNotation } from "@/utils/get12HourTimeWithNotation";
import { useModal } from "@/providers";
import { Modal } from "../Modal";

export const StatusBar = () => {
  const time = useTick(get12HourTimeWithNotation, 1000);
  const { open, close } = useModal();

  return (
    <S.StatusBar>
      <S.TaskBar>
        <S.StartButton
          onClick={() =>
            open("name", Modal, {
              handleClose: () => close("name"),
            })
          }
        >
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
            margin-left: 1rem;
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
            margin-left: 1rem;
          `}
        />
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
