import * as S from "./styled";

export const Icon = ({ name, ico, ref, selected }) => {
  return (
    <S.IconContainer ref={ref} onMouseDown={(e) => e.stopPropagation()}>
      <S.IconImg src={ico.src} />
      <S.IconName selected={selected}>{name}</S.IconName>
    </S.IconContainer>
  );
};
