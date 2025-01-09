import styled from "@emotion/styled";

export const StatusBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #c0c0c0;
  height: 3rem;
  border-top: #ffffff solid 0.1rem;
  box-shadow: 0 -2px 0 #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  user-select: none;
  pointer-events: none;
`;

export const TaskBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StartButton = styled.div`
  height: 2.1rem;
  border: 1px solid;
  border-color: #dfdfdf #808080 #808080 #dfdfdf;
  box-shadow: 1px 0 0 #000000, -1px 0 0 #ffffff, 0 1px 0 #000000,
    0 -1px 0 #ffffff;
  width: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-family: var(--font-levi);
  font-size: 2.4rem;
  span {
    line-height: 0;
    margin-top: 0.4rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }
`;

export const StartIcon = styled.img`
  width: 1.6rem;
  margin-right: 0.4rem;
`;

export const Icon = styled.img``;

export const DividingLine = styled.div`
  height: 2.4rem;
  border-left: 1px solid #808080;
  border-right: 1px solid #ffffff;
  background-color: white;
`;

export const SizingLine = styled.div`
  height: 2.1rem;
  border: 1px solid;
  border-color: #ffffff #808080 #808080 #ffffff;
`;

export const SystemTray = styled.div`
  display: flex;
  align-items: center;
`;

export const TrayContainer = styled.div`
  border: 1px solid;
  border-color: #808080 #ffffff #ffffff #808080;
  height: 2.4rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
  box-sizing: border-box;
`;

export const Time = styled.span`
  font-family: var(--font-levi);
  font-size: 2rem;
  margin-top: 0.4rem;
`;
