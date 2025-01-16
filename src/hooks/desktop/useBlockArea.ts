import { useCallback, useEffect, useMemo, useState } from "react";

export const useBlockArea = ({
  desktopRef,
  iconsRef,
  initialPoint,
  currentPoint,
  setTempSelectedIcons,
  isDrawingBlockArea,
}) => {
  const [desktopPosition, setDesktopPosition] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [blockAreaPosition, setBlockAreaPosition] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });
  const POINTER_OFFSET = useMemo(() => 6, []);

  // TODO : 모달이 떠있을 때 끊기지 않도록 하기.
  // 모달 자체에서 블록이 잡히지 않도록 하면서 밖에서 했을 때는 그대로 이어지도록

  const getSelectionRect = useCallback((start, end, wrapperPosition) => {
    const { x: sx, y: sy } = start;
    const { x: ex, y: ey } = end;
    const { x: wx, y: wy } = wrapperPosition;
    const width = Math.abs(sx - ex);
    const height = Math.abs(sy - ey);
    const left = Math.abs(wx - Math.min(sx, ex) + POINTER_OFFSET);
    const top = Math.abs(wy - Math.min(sy, ey) + POINTER_OFFSET);

    return { width, height, left, top };
  }, []);

  useEffect(() => {
    if (!desktopRef) return;

    const updateDesktopPosition = () => {
      const { x, y } = desktopRef.current.getBoundingClientRect();
      setDesktopPosition({ x, y });
      console.log(x, y);
    };

    window.addEventListener("resize", updateDesktopPosition);
    updateDesktopPosition();

    return () => {
      window.removeEventListener("resize", updateDesktopPosition);
    };
  }, [desktopRef]);

  useEffect(() => {
    if (!iconsRef || !desktopPosition || !initialPoint || !currentPoint) return;

    const { width, height, left, top } = getSelectionRect(
      initialPoint,
      currentPoint,
      desktopPosition
    );
    const _tempSelectedIcons = iconsRef.current.map((icon: HTMLDivElement) => {
      const {
        width: iw,
        height: ih,
        top: it,
        left: il,
      } = icon.getBoundingClientRect();
      const isXIntersect =
        il <= left + width + desktopPosition.x + POINTER_OFFSET &&
        il + iw >= left + desktopPosition.x + POINTER_OFFSET;
      const isYIntersect =
        it <= top + height + desktopPosition.y + POINTER_OFFSET &&
        ih + it >= top + desktopPosition.y + POINTER_OFFSET;
      return isXIntersect && isYIntersect;
    });
    setTempSelectedIcons(_tempSelectedIcons);
    setBlockAreaPosition({ width, height, top, left });
  }, [
    iconsRef,
    setTempSelectedIcons,
    desktopPosition,
    initialPoint,
    currentPoint,
    getSelectionRect,
    POINTER_OFFSET,
  ]);

  return { blockAreaPosition };
};
