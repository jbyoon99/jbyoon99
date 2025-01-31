import { colors } from "assets/colors";
import styled from "@emotion/styled";

export const StartMenuWrapper = styled.div<{ isStartMenuOpen: boolean }>`
  position: absolute;
  bottom: 0;
  width: 20%;
  background-color: white;
  background-color: #c0c0c0;
  border-color: #dfdfdf #808080 #808080 #dfdfdf;
  box-shadow: 0.1rem 0 0 #000000, -0.1rem 0 0 #ffffff, 0 0.1rem 0 #000000,
    0 -0.1rem 0 #ffffff;
  display: ${(props) => (props.isStartMenuOpen ? "flex" : "none")};
  flex-direction: row;
  height: fit-content;
  user-select: none;

  animation: slide-up 0.1s linear forwards;

  @keyframes slide-up {
    from {
      bottom: -30%;
    }
    to {
      bottom: 0.1rem;
    }
  }
`;

export const SideLine = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  writing-mode: vertical-rl; /* 세로 텍스트 방향 설정 */
  transform: rotate(180deg);
  padding-bottom: 0.5rem;
  font-size: 2rem;
  background: linear-gradient(${colors.taeguk.blue}, ${colors.taeguk.red});
  letter-spacing: -0.1rem;

  span:first-of-type {
    font-weight: bold;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  font-family: var(--font-ms-sans);
`;

export const Menu = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  &:hover {
    background-color: ${colors.main.blue};
    color: ${colors.main.white};
  }
`;

export const MenuIcon = styled.img`
  height: 80%;
  margin-right: 1rem;
  pointer-events: none;
`;

export const MenuName = styled.div``;
