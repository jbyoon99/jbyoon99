import { useCallback, useEffect, useState } from "react";

export const useBlockArea = (wrapperRef, iconsRef, blockAreaRef) => {
  const [initialPoint, setInitialPoint] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [currentPoint, setCurrentPoint] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const [wrapperPosition, setWrapperPosition] = useState<null | {
    x: number;
    y: number;
  }>(null);

  const [tempSelectedIcons, setTempSelectedIcons] = useState([]);
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [blockAreaPosition, setBlockAreaPosition] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { clientX, clientY } = e;
      const point = { x: clientX, y: clientY };
      setInitialPoint(point);
      setCurrentPoint(point);
      setSelectedIcons([]);
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

  const onContextMenu = useCallback((e) => {
    e.preventDefault();
    setInitialPoint(null);
    setIsMouseDown(false);
  }, []);

  useEffect(() => {
    if (!blockAreaRef || !iconsRef) return;
    const { width, height, top, left } =
      blockAreaRef.current.getBoundingClientRect();
    const _tempSelectedIcons = iconsRef.current.map((icon: HTMLDivElement) => {
      const {
        width: iw,
        height: ih,
        top: it,
        left: il,
      } = icon.getBoundingClientRect();
      const isXIntersect = il <= left + width && il + iw >= left;
      const isYIntersect = it <= top + height && ih + it >= top;
      return isXIntersect && isYIntersect;
    });
    setTempSelectedIcons(_tempSelectedIcons);
  }, [blockAreaPosition, blockAreaRef, iconsRef]);

  useEffect(() => {
    if (!wrapperPosition || !initialPoint || !currentPoint) {
      setBlockAreaPosition({ width: 0, height: 0, left: 0, top: 0 });
      return;
    }

    const width = Math.abs(initialPoint.x - currentPoint.x);
    const height = Math.abs(initialPoint.y - currentPoint.y);
    const left = Math.abs(
      wrapperPosition.x - Math.min(initialPoint.x, currentPoint.x) + 6
    );
    const top = Math.abs(
      wrapperPosition.y - Math.min(initialPoint.y, currentPoint.y) + 6
    );

    setBlockAreaPosition({ width, height, left, top });
  }, [wrapperPosition, initialPoint, currentPoint]);

  useEffect(() => {
    if (!wrapperRef) return;

    const updateWrapperPosition = () => {
      const { x, y } = wrapperRef.current.getBoundingClientRect();
      setWrapperPosition({ x, y });
    };

    window.addEventListener("resize", updateWrapperPosition);
    updateWrapperPosition();

    return () => {
      window.removeEventListener("resize", updateWrapperPosition);
    };
  }, [wrapperRef]);

  return {
    blockAreaStyle: {
      ...blockAreaPosition,
    },
    eventHandler: { onMouseDown, onMouseMove, onMouseUp, onContextMenu },
    tempSelectedIcons,
    selectedIcons,
  };
};
