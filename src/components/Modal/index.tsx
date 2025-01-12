import * as S from "./styled";

export const Modal = () => {
  return (
    <S.Wrapper onMouseDown={(e) => e.stopPropagation()}>
      <S.Header>
        <S.Title>System Properties</S.Title>
      </S.Header>
      <S.Content></S.Content>
      <S.ButtonContainer>
        <S.Button>
          <span>OK</span>
        </S.Button>
        <S.Button>
          <span>Cancel</span>
        </S.Button>
        <S.Button>
          <span>Help</span>
        </S.Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};
