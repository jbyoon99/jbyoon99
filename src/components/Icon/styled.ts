import { colors } from "@/styles";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

export const IconImg = styled.img`
  width: 3rem;
  pointer-events: none;
  margin-bottom: 0.4rem;
`;

export const IconName = styled.div<{ highlighted: boolean; outlined: boolean }>`
  color: ${colors.main.white};
  font-family: var(--font-ms-sans);
  font-size: 1.2rem;
  text-align: center;

  background-color: ${(props) =>
    props.highlighted ? `${colors.main.blue}` : ""};
  border: 1px solid;
  padding: 1px;
  ${(props) =>
    props.outlined
      ? css`
          border-style: dashed;
          border-color: #84a4c9;
        `
      : css`
          border-color: transparent;
        `}
`;
