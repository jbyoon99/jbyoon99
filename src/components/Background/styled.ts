import { colors } from "../../styles";
import styled from "@emotion/styled";

export const Background = styled.div`
  margin: auto;
  height: 100%;
  aspect-ratio: 4/3;
  background-color: ${colors.main.green};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-libre);
`;

export const Logo = styled.img`
  height: 40vh;
  margin-bottom: -2rem;
`;
