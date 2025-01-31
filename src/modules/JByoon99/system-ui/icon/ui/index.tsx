import * as S from "./styled";

export const Icon = ({ config, ref, isHighlighted, isOutlined }) => {
  const { name, ico } = config;

  return (
    <S.IconContainer ref={ref}>
      <S.IconImg src={ico.src} />
      <S.IconName isHighlighted={isHighlighted} isOutlined={isOutlined}>
        {name}
      </S.IconName>
    </S.IconContainer>
  );
};
