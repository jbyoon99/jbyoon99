import { useCallback, useState } from "react";
import { useBlockArea, useDesktopIcon } from "./";

export const useDesktop = ({ desktopRef, iconsRef, blockAreaRef }) => {
  const [initialPoint, setInitialPoint] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [currentPoint, setCurrentPoint] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [tempSelectedIcons, setTempSelectedIcons] = useState([]);
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [clickedIconIdx, setClickedIconIdx] = useState(null);
  const [prevClickedIconIdx, setPrevClickedIconIdx] = useState(null);
  const { blockAreaPosition } = useBlockArea({
    desktopRef,
    blockAreaRef,
    iconsRef,
    initialPoint,
    currentPoint,
    setTempSelectedIcons,
  });
  useDesktopIcon({
    iconsRef,
    clickedIconIdx,
    setClickedIconIdx,
    setPrevClickedIconIdx,
  });

  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target.closest("div").id !== "desktop") return;
      const { clientX, clientY } = e;
      const point = { x: clientX, y: clientY };
      setInitialPoint(point);
      setCurrentPoint(point);
      setSelectedIcons([]);
      setClickedIconIdx(null);
      setIsMouseDown(true);
    },
    [setInitialPoint]
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isMouseDown) return;
      const { clientX, clientY } = e;
      const point = { x: clientX, y: clientY };
      setCurrentPoint(point);
    },
    [setCurrentPoint, isMouseDown]
  );

  const onMouseUp = useCallback(() => {
    setInitialPoint(null);
    setIsMouseDown(false);
    setSelectedIcons(tempSelectedIcons);
  }, [setInitialPoint, tempSelectedIcons]);

  const onContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setInitialPoint(null);
    setIsMouseDown(false);
  }, []);

  return {
    blockAreaStyle: {
      ...blockAreaPosition,
    },
    desktopEventHandler: { onMouseDown, onMouseMove, onMouseUp, onContextMenu },
    tempSelectedIcons,
    selectedIcons,
    clickedIconIdx,
    prevClickedIconIdx,
  };
};
