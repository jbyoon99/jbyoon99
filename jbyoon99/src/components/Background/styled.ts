import { colors } from "../../styles";
import { styled } from "@pigment-css/react";

export const Background = styled.div`
  margin: auto;
  height: 100vh;
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

export const Logo = styled.img`
  height: 40vh;
`;
