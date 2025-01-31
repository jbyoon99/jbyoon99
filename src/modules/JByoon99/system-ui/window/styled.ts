import { colors } from "assets/colors";
import styled from "@emotion/styled";

export const BorderWrapper = styled.div`
  position: absolute;
  border: 1px solid;
  border-color: #ffffff #7b7d7b #7b7d7b #ffffff;
  box-shadow: 1px 0 0 #000000, -1px 0 0 #dedfde, 0 1px 0 #000000,
    0 -1px 0 #dedfde;
  width: fit-content;
  height: fit-content;
`;

export const Wrapper = styled.div`
  background-color: #bdbebd;
  border: 0.2rem solid #bdbebd;
  display: flex;
  flex-direction: column;
  min-width: 20rem;
  min-height: 20rem;
  user-select: none;
  font-family: var(--font-ms-sans);
`;

export const Header = styled.div`
  height: 2rem;
  background: ${colors.main.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  font-family: var(--font-ms-sans-bold);
  font-size: 1.1rem;
`;

export const Title = styled.div`
  color: white;
  display: flex;
  height: 100%;
  align-items: center;
`;

export const Icon = styled.img`
  height: 80%;
  margin-right: 0.5rem;
`;

export const Name = styled.span``;

export const Outline = styled.div`
  position: absolute;
  width: 95%;
  height: 90%;
  border: 1px dotted ${colors.main.darkGrey};
  display: none;
`;

export const Button = styled.div`
  height: 80%;
  aspect-ratio: 1/1;
  background-color: #bdbebd;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  border: 1px solid;
  border-color: #ffffff #7b7d7b #7b7d7b #ffffff;
  margin-right: 0.1rem;

  &:active {
    border: 0.1rem solid;
    border-color: #808080 #dfdfdf #dfdfdf #808080;
    box-shadow: 0.1rem 0 0 #fff, -0.1rem 0 0 #000, 0 0.1rem 0 #fff,
      0 -0.1rem 0 #000;
    ${Outline} {
      display: block;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80%;

  ${Button}:nth-of-type(2) {
    margin-right: 0.2rem;
  }
`;

export const ButtonIcon = styled.img`
  height: 80%;
`;
