import { colors } from "@/styles";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  background-color: #bdbebd;
  border: 1px solid;
  border-color: #ffffff #7b7d7b #7b7d7b #ffffff;
  box-shadow: 1px 0 0 #000000, -1px 0 0 #dedfde, 0 1px 0 #000000,
    0 -1px 0 #dedfde;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1rem;
  user-select: none;
  font-family: var(--font-ms-sans);

  width: 20rem;
  height: 20rem;
  left: calc(50% - 10rem);
  top: calc(50% - 10rem);
`;

export const Header = styled.div`
  height: 1.8rem;
  background: linear-gradient(to right, #00007b, #0882ce);
  display: flex;
  align-items: center;
  padding-left: 0.2rem;
  font-family: var(--font-ms-sans-bold);
`;

export const Title = styled.div`
  color: white;
`;

export const Content = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-right: 0.5rem;
`;

export const Outline = styled.div`
  position: absolute;
  width: 95%;
  height: 90%;
  border: 1px dotted ${colors.main.darkGrey};
  display: none;
`;

export const Button = styled.div`
  border: 1px solid;
  border-color: #ffffff #7b7d7b #7b7d7b #ffffff;
  box-shadow: 1px 0 0 #000000, -1px 0 0 #dedfde, 0 1px 0 #000000,
    0 -1px 0 #dedfde;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  position: relative;

  &:active {
    border-color: #7b7b7b #ffffff #ffffff #7b7b7b;
    box-shadow: 1px 0 0 #dedfde, -1px 0 0 #000000, 0 1px 0 #dedfde,
      0 -1px 0 #000000;

    ${Outline} {
      display: block;
    }
  }
`;
