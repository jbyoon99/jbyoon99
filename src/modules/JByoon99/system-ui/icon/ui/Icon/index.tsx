import * as S from "./styled";

export const Icon = ({ name, icon }) => {
  return (
    <S.IconContainer>
      <S.IconImg src={icon} />
      <S.IconName>{name}</S.IconName>
    </S.IconContainer>
  );
};
