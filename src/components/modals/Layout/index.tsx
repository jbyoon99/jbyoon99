import {
  BinICO,
  DirectoryICO,
  NotepadICO,
  UnderBarPNG,
  WindowPNG,
  XPNG,
} from "@/assets";
import * as S from "./styled";
import { useDrag, useModal } from "@/hooks";
import { css } from "@emotion/react";
import { useRef } from "react";

const modalVariant = {
  notepad: { ico: NotepadICO.src },
  directory: { ico: DirectoryICO.src },
  bin: { ico: BinICO.src },
};

export const ModalLayout = ({
  name = "Untitled - Notepad",
  variant = "directory",
  isFocused,
  children,
}) => {
  const { close, setModalFocused } = useModal();
  const modalWrapperRef = useRef(null);
  const { onMouseDown } = useDrag({ modalWrapperRef });

  return (
    <S.BorderWrapper
      css={css`
        z-index: ${isFocused ? 9999 : 2};
      `}
      id="modal"
      ref={modalWrapperRef}
      onClick={() => {
        setModalFocused(name);
      }}
    >
      <S.Wrapper>
        <S.Header onMouseDown={onMouseDown}>
          <S.Title>
            <S.Icon src={modalVariant[variant]["ico"]} />
            <S.Name>{name}</S.Name>
          </S.Title>
          <S.ButtonContainer>
            <S.Button>
              <S.Outline />
              <S.ButtonIcon src={UnderBarPNG.src} />
            </S.Button>
            <S.Button>
              <S.Outline />
              <S.ButtonIcon src={WindowPNG.src} />
            </S.Button>
            <S.Button onClick={() => close(name)}>
              <S.ButtonIcon src={XPNG.src} />
              <S.Outline />
            </S.Button>
          </S.ButtonContainer>
        </S.Header>
        {children}
      </S.Wrapper>
    </S.BorderWrapper>
  );
};
