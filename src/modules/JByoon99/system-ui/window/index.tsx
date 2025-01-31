import { UnderBarPNG, WindowPNG, XPNG } from "assets";
import * as S from "./styled";
import { useModalDrag, useModal } from "./hook";
import { css } from "@emotion/react";
import { useEffect, useRef } from "react";

export const ModalLayout = ({ name, ico, isFocused, children }) => {
  const { close, setModalFocused } = useModal();
  const modalRef = useRef(null);
  const { onMouseDown } = useModalDrag({ modalRef });

  const clickHandler = () => {
    setModalFocused(name);
  };

  useEffect(() => {
    if (!modalRef) return;
    const modal = modalRef.current;
    const { width, height } = modal.getBoundingClientRect();
    modal.style.left = `calc(50% - ${width / 2}px)`;
    modal.style.top = `calc(50% - ${height / 2}px)`;
  }, [modalRef]);

  return (
    <S.BorderWrapper
      css={css`
        z-index: ${isFocused ? 9999 : 2};
      `}
      ref={modalRef}
      onClick={clickHandler}
    >
      <S.Wrapper>
        <S.Header onMouseDown={onMouseDown}>
          <S.Title>
            <S.Icon src={ico.src} />
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
