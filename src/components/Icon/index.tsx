import * as S from "./styled";

export const Icon = ({ name, ico, ref, highlighted, outlined }) => {
  return (
    <S.IconContainer ref={ref} onMouseDown={(e) => e.stopPropagation()}>
      <S.IconImg src={ico.src} />
      <S.IconName highlighted={highlighted} outlined={outlined}>
        {name}
      </S.IconName>
    </S.IconContainer>
  );
};
