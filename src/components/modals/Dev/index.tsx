import { useModal } from "@/hooks";
import * as S from "./styled";
import { css } from "@emotion/react";

export const DevModal = ({ name, index }) => {
  const { close } = useModal();
  return (
    <S.Wrapper
      css={css`
        z-index: ${index};
      `}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <S.Header>
        <S.Title>System Properties</S.Title>
      </S.Header>
      <S.Content></S.Content>
      <S.ButtonContainer>
        <S.Button>
          <span>OK</span>
        </S.Button>
        <S.Button onClick={() => close(name)}>
          <span>Cancel</span>
        </S.Button>
        <S.Button>
          <span>Help</span>
        </S.Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};
