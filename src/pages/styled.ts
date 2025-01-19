import { colors } from "@/styles";
import styled from "@emotion/styled";

export const Desktop = styled.div`
  height: 90rem;
  aspect-ratio: 4/3;
  width: 120rem;
  border: 0.5rem solid #cecece;
  border-radius: 0.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  margin: auto;
`;

export const Background = styled.div`
  background: center url("/jbyoon99_green_wallpaper.png");
  background-size: 120rem;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const IconsWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 1.5rem 0.5rem;
  left: 0.5rem;
  top: 0.5rem;
  z-index: 1;
`;

export const BlockArea = styled.div`
  position: absolute;
  background-color: ${colors.main.blue};
  opacity: 0.5;
  z-index: 1;
`;
