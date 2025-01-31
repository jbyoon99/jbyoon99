import { colors } from "assets/colors";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StatusBar = styled.div`
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
`;

export const TaskBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
`;

export const StartButton = styled.div<{ isStartMenuOpen: boolean }>`
  position: relative;
  height: 100%;
  width: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isStartMenuOpen
      ? css`
          border: 0.1rem solid;
          border-color: #808080 #dfdfdf #dfdfdf #808080;
          box-shadow: 0.1rem 0 0 #fff, -0.1rem 0 0 #000, 0 0.1rem 0 #fff,
            0 -0.1rem 0 #000;
        `
      : css`
          border: 0.1rem solid;
          border-color: #dfdfdf #808080 #808080 #dfdfdf;
          box-shadow: 0.1rem 0 0 #000000, -0.1rem 0 0 #ffffff,
            0 0.1rem 0 #000000, 0 -0.1rem 0 #ffffff;
        `}

  span {
    font-family: var(--font-ms-sans-bold);
    font-size: 1.2rem;
    margin-top: 0.15rem;
  }
`;

export const Outline = styled.div`
  width: 95%;
  height: 90%;
  position: absolute;
  border: 1px dotted ${colors.main.darkGrey};
`;

export const StartIcon = styled.img`
  width: 1.6rem;
  margin-right: 0.4rem;
`;

export const Icon = styled.img`
  height: 80%;
  margin-right: 0.5rem;
`;

export const DividingLine = styled.div`
  height: 100%;
  border-left: 0.1rem solid #808080;
  border-right: 0.1rem solid #ffffff;
  background-color: white;
  margin-left: 1rem;
`;

export const SizingLine = styled.div`
  height: 80%;
  border: 0.1rem solid;
  width: 0.1rem;
  background-color: #d2d2d2;
  border-color: #ffffff #808080 #808080 #ffffff;
  margin-left: 0.3rem;
  margin-right: 0.5rem;
`;

export const TaskBarButtonContainer = styled.div`
  display: flex;
  height: 100%;
  flex-grow: 1;
  max-width:100%
  justify-content: flex-start;
`;

export const TaskBarButton = styled.div<{ isFocused: boolean }>`
  display: flex;
  height: 100%;
  background-color: white;
  border: 0.1rem solid;
  max-width: 15rem;
  flex-grow: 1;
  align-items: center;
  padding-left: 0.5rem;
  margin-right: 0.5rem;

  ${(props) =>
    props.isFocused
      ? css`
          background-color: #fff;
          background-image: linear-gradient(0deg, #b6b6b6 50%, #fff 50%),
            linear-gradient(90deg, #b6b6b6 50%, #fff 50%);
          background-size: 2px 2px;
          border-color: #808080 #dfdfdf #dfdfdf #808080;
          box-shadow: 0.1rem 0 0 #ffffff, -0.1rem 0 0 #000000,
            0 0.1rem 0 #ffffff, 0 -0.1rem 0 #000000;
          background-position: 0 1px;
          font-family: var(--font-ms-sans-bold);
        `
      : css`
          background-color: #c0c0c0;
          border-color: #dfdfdf #808080 #808080 #dfdfdf;
          box-shadow: 0.1rem 0 0 #000000, -0.1rem 0 0 #ffffff,
            0 0.1rem 0 #000000, 0 -0.1rem 0 #ffffff;
          font-family: var(--font-ms-sans);
        `}
`;

export const TaskIcon = styled.img`
  height: 100%;
  margin-right: 0.3rem;
  aspect-ratio: 1/1;
`;

export const TaskName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  flex-shrink: 1;
`;

export const SystemTray = styled.div`
  display: flex;
  align-items: center;
`;

export const TrayContainer = styled.div`
  border: 0.1rem solid;
  border-color: #808080 #ffffff #ffffff #808080;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding-right: 1rem;
`;

export const Time = styled.span`
  font-family: var(--font-ms-sans);
  font-size: 1rem;
  margin-top: 0.2rem;
`;
