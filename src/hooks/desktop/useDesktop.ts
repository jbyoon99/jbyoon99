import { useCallback, useEffect, useRef, useState } from "react";
import { useBlockArea, useDesktopIcon } from "./";

export const useDesktop = ({ desktopRef, iconsRef }) => {
  const [isDrawingBlockArea, setIsDrawingBlockArea] = useState(false);
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
  const mouseHandlers = useRef({
    onMouseDown: (e) => {},
    onMouseUp: (e) => {},
    onMouseMove: (e) => {},
    onContextMenu: (e) => {},
  });
  const { blockAreaPosition } = useBlockArea({
    desktopRef,
    iconsRef,
    initialPoint,
    currentPoint,
    setTempSelectedIcons,
    isDrawingBlockArea,
  });
  useDesktopIcon({
    iconsRef,
    clickedIconIdx,
    setClickedIconIdx,
    setPrevClickedIconIdx,
  });

  useEffect(() => {
    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDrawingBlockArea) return;
      const { clientX: x, clientY: y } = e;
      setCurrentPoint({ x, y });
    };

    mouseHandlers.current["onMouseMove"] = onMouseMove;
  }, [isDrawingBlockArea]);

  useEffect(() => {
    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target.closest("div").id !== "desktop") return;
      const { clientX: x, clientY: y } = e;
      setInitialPoint({ x, y });
      setCurrentPoint({ x, y });
      setIsDrawingBlockArea(true);
    };
    const onMouseUp = () => {
      setInitialPoint(null);
      setCurrentPoint(null);
      setIsDrawingBlockArea(false);
    };
    const onContextMenu = (e: React.MouseEvent) => {
      e.preventDefault();
    };
    mouseHandlers.current["onMouseDown"] = onMouseDown;
    mouseHandlers.current["onMouseUp"] = onMouseUp;
    mouseHandlers.current["onContextMenu"] = onContextMenu;

    const mouseMoveHandler = window.addEventListener("mousemove", (e) =>
      mouseHandlers.current["onMouseMove"](e)
    );
    const mouseDownHandler = window.addEventListener("mousedown", (e) =>
      mouseHandlers.current["onMouseDown"](e)
    );
    const mouseUpHandler = window.addEventListener("mouseup", (e) =>
      mouseHandlers.current["onMouseUp"](e)
    );
    const contextMenuHandler = window.addEventListener("contextmenu", (e) =>
      mouseHandlers.current["onContextMenu"](e)
    );

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
      window.removeEventListener("contextmenu", contextMenuHandler);
    };
  }, []);

  return {
    blockAreaStyle: {
      ...blockAreaPosition,
      display: isDrawingBlockArea ? "block" : "none",
    },
    tempSelectedIcons,
    selectedIcons,
    clickedIconIdx,
    prevClickedIconIdx,
  };
};
