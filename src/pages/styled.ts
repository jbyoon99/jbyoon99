import { colors } from "@/styles";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 800px;
  max-height: 100vh;
  max-width: 100vw;
  aspect-ratio: 4/3;
  background: center url("/jbyoon99_green_wallpaper.png");
  border: 0.5rem solid #cecece;
  border-radius: 0.5rem;
  position: relative;
  box-sizing: border-box;
`;

export const BlockArea = styled.div`
  position: absolute;
  background-color: ${colors.main.blue};
  opacity: 0.5;
`;
