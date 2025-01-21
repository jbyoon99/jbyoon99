import { useEffect, useRef, useState } from "react";

export const useDrag = ({ modalWrapperRef }) => {
  const [isDragging, setIsDragging] = useState(false);
  const desktopBoundingRect = useRef(null);

  useEffect(() => {
    const updateDesktopPosition = () => {
      desktopBoundingRect.current = document
        .getElementById("desktop")
        .getBoundingClientRect();
    };

    window.addEventListener("resize", updateDesktopPosition);
    updateDesktopPosition();

    return () => {
      window.removeEventListener("resize", updateDesktopPosition);
    };
  }, []);

  useEffect(() => {
    if (!isDragging || !modalWrapperRef) return;
    const onMouseMove = (e) => {
      requestAnimationFrame(() => {
        const {
          left: dl,
          top: dt,
          width: dw,
          height: dh,
        } = desktopBoundingRect.current;
        const {
          left: ml,
          top: mt,
          width: mw,
          height: mh,
        } = modalWrapperRef.current.getBoundingClientRect();

        const { movementX, movementY } = e;

        let left = ml + movementX - dl - 5;
        let top = mt + movementY - dt - 5;

        if (ml + movementX - 5 <= dl) left = 0;
        if (ml + movementX >= dl + dw - mw - 5) left = dw - mw - 11;
        if (mt + movementY - 5 <= dt) top = 0;
        if (mt + mh + movementY >= dt + dh - 42) top = dh - mh - 42;

        if (modalWrapperRef) {
          modalWrapperRef.current.style.left = `${left}px`;
          modalWrapperRef.current.style.top = `${top}px`;
        }
      });
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
  }, [isDragging, modalWrapperRef]);

  const onMouseDown = () => {
    setIsDragging(true);
  };

  return { onMouseDown };
};
