import { colors } from "@/styles";
import styled from "@emotion/styled";

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
