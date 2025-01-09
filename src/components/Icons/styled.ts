import { colors } from "@/styles";
import styled from "@emotion/styled";

export const IconsWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 1.5rem 0.5rem;
  left: 0.5rem;
  top: 0.5rem;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconImg = styled.img`
  width: 3rem;
  margin-bottom: 0.4rem;
`;

export const IconName = styled.div`
  color: ${colors.main.white};
  font-family: var(--font-ms-sans);
  font-size: 1.2rem;
  text-align: center;
`;
