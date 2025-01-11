import { colors } from "@/styles";
import styled from "@emotion/styled";

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

export const IconImg = styled.img`
  width: 3rem;
  margin-bottom: 0.4rem;
  pointer-events: none;
`;

export const IconName = styled.div<{ selected: boolean }>`
  color: ${colors.main.white};
  font-family: var(--font-ms-sans);
  font-size: 1.2rem;
  text-align: center;

  background-color: ${(props) => (props.selected ? `${colors.main.blue}` : "")};
`;
