import { colors } from "@/styles";
import styled from "@emotion/styled";

export const Desktop = styled.div`
  height: 800px;
  max-height: 100vh;
  max-width: 100vw;
  aspect-ratio: 4/3;
  background: center url("/jbyoon99_green_wallpaper.png");
  border: 0.5rem solid #cecece;
  border-radius: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconsWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 1.5rem 0.5rem;
  left: 0.5rem;
  top: 0.5rem;
`;

export const BlockArea = styled.div`
  position: absolute;
  background-color: ${colors.main.blue};
  opacity: 0.5;
`;
