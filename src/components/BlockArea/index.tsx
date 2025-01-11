import { css } from "@emotion/react";
import * as S from "./styled";

export const BlockArea = ({ ref, width, top, height, left }) => {
  return (
    <S.BlockArea
      ref={ref}
      css={css`
        width: ${width}px;
        height: ${height}px;
        top: ${top}px;
        left: ${left}px;
      `}
    />
  );
};
