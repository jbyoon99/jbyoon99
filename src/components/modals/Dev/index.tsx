import { useModal } from "@/hooks";
import * as S from "./styled";
import { css } from "@emotion/react";

export const DevModal = ({ name, index, initialIndex }) => {
  const { close, bringToFront } = useModal();

  return (
    <S.Wrapper
      css={css`
        z-index: ${index};
        margin-bottom: ${initialIndex * 3}rem;
        margin-left: ${initialIndex * 3}rem;
      `}
      onClick={() => {
        bringToFront(name);
      }}
    >
      <S.Header>
        <S.Title>{name}</S.Title>
      </S.Header>
      <S.Content></S.Content>
      <S.ButtonContainer>
        <S.Button>
          <span>OK</span>
        </S.Button>
        <S.Button
          onClick={() => {
            close(name);
          }}
        >
          <span>Cancel</span>
        </S.Button>
        <S.Button>
          <span>Help</span>
        </S.Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};
