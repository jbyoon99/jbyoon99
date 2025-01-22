import { useEffect, useRef } from "react";
import { useMousePosition } from "./";

export const useDragArea = ({ backgroundRef, dragAreaRef }) => {
  const { cursorPoint } = useMousePosition({
    backgroundRef,
  });
  const backgroundPosition = useRef(null);

  useEffect(() => {
    if (!backgroundRef) return;

    const updateBackgroundPosition = () => {
      backgroundPosition.current =
        backgroundRef.current.getBoundingClientRect();
    };
    updateBackgroundPosition();

    window.addEventListener("resize", updateBackgroundPosition);
    return () => {
      window.removeEventListener("resize", updateBackgroundPosition);
    };
  }, [backgroundRef]);

  useEffect(() => {
    if (!cursorPoint.initial) {
      dragAreaRef.current.style.width = 0;
      dragAreaRef.current.style.height = 0;
      return;
    }

    const getSelectionRect = ({ initial, current }) => {
      const { left: il, top: it } = initial;
      const { left: cl, top: ct } = current;
      const {
        left: bl,
        right: br,
        top: bt,
        bottom: bb,
      } = backgroundPosition.current;

      const isOutOfLeft = cl <= bl;
      const isOutOfRight = cl > br;
      const isOutOfTop = ct <= bt;
      const isOutOfBottom = ct > bb;

      let width, height, left, top;

      width = Math.abs(il - cl);
      height = Math.abs(it - ct);
      left = Math.abs(bl - Math.min(il, cl));
      top = Math.abs(bt - Math.min(it, ct));

      if (isOutOfLeft) {
        left = 0;
        width = Math.abs(il - bl);
      }
      if (isOutOfTop) {
        top = 0;
        height = Math.abs(it - bt);
      }
      if (isOutOfRight) {
        left = il - bl;
        width = br - il;
      }
      if (isOutOfBottom) {
        top = it - bt;
        height = bb - it;
      }

      return { width, height, left, top };
    };

    const { width, height, left, top } = getSelectionRect(cursorPoint);

    dragAreaRef.current.style.width = `${width}px`;
    dragAreaRef.current.style.height = `${height}px`;
    dragAreaRef.current.style.left = `${left}px`;
    dragAreaRef.current.style.top = `${top}px`;
  }, [cursorPoint, dragAreaRef]);
};
