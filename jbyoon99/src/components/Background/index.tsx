import * as S from "./styled";
import LogoSVG from "@/assets/jbyoon99_logo.svg?url";

export const Background = () => {
  return (
    <S.Background>
      <S.LogoContainer>
        <S.Logo src={LogoSVG.src} />
        <span>Developer</span>
        <span>JByoon99</span>
      </S.LogoContainer>
    </S.Background>
  );
};
