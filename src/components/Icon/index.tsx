import * as S from "./styled";
import { ComputerICO } from "@/assets/icons";

export const Icon = ({ ref }) => {
  return (
    <S.IconContainer ref={ref}>
      <S.IconImg src={ComputerICO.src} />
      <S.IconName>My Computer</S.IconName>
    </S.IconContainer>
  );
};
