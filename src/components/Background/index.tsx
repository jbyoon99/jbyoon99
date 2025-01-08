import * as S from "./styled";
import LogoSVG from "@/assets/jbyoon99_logo.svg?url";
import { css } from "@emotion/react";

export const Background = () => {
  return (
    <S.Background>
      <S.LogoContainer>
        <S.Logo src={LogoSVG.src} />
        <S.TextContainer>
          <span
            css={css`
              font-size: 4.5rem;
              line-height: 0.4;
              font-weight: 300;
            `}
          >
            Developer
          </span>
          <div
            css={css`
              font-size: 9rem;
              text-indent: 3.3rem;
            `}
          >
            <span
              css={css`
                font-weight: bold;
                letter-spacing: -0.7rem;
              `}
            >
              JByoon
            </span>
            <span
              css={css`
                font-weight: 300;
                letter-spacing: -1.2rem;
              `}
            >
              99
            </span>
          </div>
        </S.TextContainer>
      </S.LogoContainer>
    </S.Background>
  );
};
