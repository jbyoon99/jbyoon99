import { useEffect, useRef, useState } from "react";

export const useWindowDrag = ({ windowRef }) => {
  const [isDragging, setIsDragging] = useState(false);
  const backgroundPosition = useRef(null);

  useEffect(() => {
    const updateDesktopPosition = () => {
      backgroundPosition.current = document
        .getElementById("background")
        .getBoundingClientRect();
    };

    window.addEventListener("resize", updateDesktopPosition);
    updateDesktopPosition();

    return () => {
      window.removeEventListener("resize", updateDesktopPosition);
    };
  }, []);

  useEffect(() => {
    if (!isDragging || !windowRef) return;
    const onMouseMove = (e) => {
      const modal = windowRef.current;

      const {
        left: bl,
        right: br,
        top: bt,
        bottom: bb,
      } = backgroundPosition.current;
      const {
        left: ml,
        top: mt,
        width: modalWidth,
        height: modalHeight,
      } = modal.getBoundingClientRect();

      const { movementX, movementY } = e;

      let newLeft = ml + movementX - bl;
      let newTop = mt + movementY - bt;

      if (newLeft <= 0) newLeft = 0;
      if (newLeft + modalWidth >= br - bl) newLeft = br - modalWidth - bl;
      if (newTop <= 0) newTop = 0;
      if (newTop + modalHeight >= bb - bt) newTop = bb - modalHeight - bt;

      modal.style.left = `${newLeft}px`;
      modal.style.top = `${newTop}px`;
    };
    const onMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, windowRef, backgroundPosition]);

  const onMouseDown = () => {
    setIsDragging(true);
  };

  return { onMouseDown };
};
