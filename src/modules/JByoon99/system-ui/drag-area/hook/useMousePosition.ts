import { useEffect, useState } from "react";

export const useMousePosition = ({ backgroundRef }) => {
  const [isDrawingBlockArea, setIsDrawingBlockArea] = useState(false);
  const [cursorPoint, setCursorPoint] = useState<{
    initial: null | { left: number; top: number };
    current: null | { left: number; top: number };
  }>({
    initial: null,
    current: null,
  });

  useEffect(() => {
    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDrawingBlockArea) return;
      const { clientX: left, clientY: top } = e;
      setCursorPoint((prevPoint) => {
        return { ...prevPoint, current: { left, top } };
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isDrawingBlockArea]);

  useEffect(() => {
    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target?.closest("div") !== backgroundRef.current) return;
      const { clientX: left, clientY: top } = e;
      setCursorPoint({ initial: { left, top }, current: { left, top } });
      setIsDrawingBlockArea(true);
    };
    const onMouseUp = () => {
      setCursorPoint({ initial: null, current: null });
      setIsDrawingBlockArea(false);
    };
    const onContextMenu = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsDrawingBlockArea(false);
    };
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("contextmenu", onContextMenu);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("contextmenu", onContextMenu);
    };
  }, [backgroundRef]);

  return { cursorPoint };
};
