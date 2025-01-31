import styled from "@emotion/styled";

export const Toolbar = styled.div`
  font-family: var(--font-ms-sans);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-top: 1px solid #cfd6ca;
  border-bottom: 1px solid #77787e;
  box-shadow: 0 1px 0 #000;
  z-index: 1;

  span {
    margin-right: 1rem;
    font-size: 1.1rem;
  }
`;

export const OptionContainer = styled.div``;

export const Option = styled.span``;

export const Content = styled.div`
  background-color: white;
  flex-grow: 1;
  padding: 1rem;
  font-size: 2rem;
  font-family: var(--font-ms-sans);
  user-select: text;
`;

export const ScrollBar = styled.div<{ isHorizontal: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isHorizontal ? "row" : "column")};
  align-items: center;
`;

export const ThumbContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 0.1rem solid;
  border-color: #fff #808080 #808080 #fff;
  box-shadow: 0.1rem 0 0 #000000, -0.1rem 0 0 #dfdfdf, 0 0.1rem 0 #000000,
    0 -0.1rem 0 #dfdfdf;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Thumb = styled.img`
  width: 0.7rem;
  height: 0.5rem;
`;

export const Bar = styled.div`
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 5rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, white 0%, black 40%);
`;

export const Logo = styled.img`
  width: 2rem;
`;
