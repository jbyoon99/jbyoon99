import { useEffect, useState } from "react";

export const useBlockArea = ({
  desktopRef,
  blockAreaRef,
  iconsRef,
  initialPoint,
  currentPoint,
  setTempSelectedIcons,
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
  }, [blockAreaPosition, blockAreaRef, iconsRef, setTempSelectedIcons]);

  useEffect(() => {
    if (!desktopPosition || !initialPoint || !currentPoint) {
      setBlockAreaPosition({ width: 0, height: 0, left: 0, top: 0 });
      return;
    }

    const width = Math.abs(initialPoint.x - currentPoint.x);
    const height = Math.abs(initialPoint.y - currentPoint.y);
    const left = Math.abs(
      desktopPosition.x - Math.min(initialPoint.x, currentPoint.x) + 6
    );
    const top = Math.abs(
      desktopPosition.y - Math.min(initialPoint.y, currentPoint.y) + 6
    );

    setBlockAreaPosition({ width, height, left, top });
  }, [desktopPosition, initialPoint, currentPoint]);

  useEffect(() => {
    if (!desktopRef) return;

    const updateDesktopPosition = () => {
      const { x, y } = desktopRef.current.getBoundingClientRect();
      setDesktopPosition({ x, y });
    };

    window.addEventListener("resize", updateDesktopPosition);
    updateDesktopPosition();

    return () => {
      window.removeEventListener("resize", updateDesktopPosition);
    };
  }, [desktopRef]);

  return { blockAreaPosition };
};
