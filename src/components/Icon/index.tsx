import { useDoubleClick, useModal } from "@/hooks";
import * as S from "./styled";

export const Icon = ({ config, ref, isHighlighted, isOutlined }) => {
  const { name, ico } = config;
  const { open } = useModal();
  const { onDoubleClick } = useDoubleClick([() => open(name)]);

  return (
    <S.IconContainer
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        onDoubleClick();
      }}
    >
      <S.IconImg src={ico.src} />
      <S.IconName isHighlighted={isHighlighted} isOutlined={isOutlined}>
        {name}
      </S.IconName>
    </S.IconContainer>
  );
};
