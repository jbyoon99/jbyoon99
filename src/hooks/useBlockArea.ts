import { RefObject, useCallback, useEffect, useMemo, useState } from "react";

export const useBlockArea = (ref: RefObject<HTMLDivElement | null>) => {
  const [anchorPosition, setAnchorPosition] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [initialPoint, setInitialPoint] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [currentPoint, setCurrentPoint] = useState<null | {
    x: number;
    y: number;
  }>(null);

  const width = useMemo(() => {
    if (!initialPoint || !currentPoint) return 0;
    return Math.abs(initialPoint.x - currentPoint.x);
  }, [initialPoint, currentPoint]);

  const height = useMemo(() => {
    if (!initialPoint || !currentPoint) return 0;
    return Math.abs(initialPoint.y - currentPoint.y);
  }, [initialPoint, currentPoint]);

  const top = useMemo(() => {
    if (!anchorPosition || !currentPoint || !initialPoint) return "auto";
    return (
      Math.abs(anchorPosition.y - Math.min(initialPoint.y, currentPoint.y)) - 5
    );
  }, [initialPoint, currentPoint, anchorPosition]);

  const left = useMemo(() => {
    if (!anchorPosition || !currentPoint || !initialPoint) return "auto";
    return (
      Math.abs(anchorPosition.x - Math.min(initialPoint.x, currentPoint.x)) - 5
    );
  }, [initialPoint, currentPoint, anchorPosition]);

  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { clientX, clientY } = e;
      setInitialPoint({ x: clientX, y: clientY });
    },
    [setInitialPoint]
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { clientX, clientY } = e;
      setCurrentPoint({ x: clientX, y: clientY });
    },
    [setCurrentPoint]
  );

  const onMouseUp = useCallback(() => {
    setInitialPoint(null);
  }, [setInitialPoint]);

  useEffect(() => {
    const updateAnchorPosition = () => {
      if (!ref || !ref.current) return;
      const { x, y } = ref.current.getBoundingClientRect();
      setAnchorPosition({ x, y });
    };

    window.addEventListener("resize", updateAnchorPosition);
    updateAnchorPosition();

    return () => window.removeEventListener("resize", updateAnchorPosition);
  }, [ref]);

  return { width, height, top, left, onMouseDown, onMouseMove, onMouseUp };
};
