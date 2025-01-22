import { useEffect, useState } from "react";

export const useIconsSelection = ({
  dragAreaRef,
  iconsRef,
  setSelectedIcons,
}) => {
  const [dragAreaPosition, setDragAreaPosition] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    if (!dragAreaRef) return;

    const dragArea = dragAreaRef.current;
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "style"
        ) {
          const { left, right, top, bottom } = dragArea.getBoundingClientRect();
          if (left - right === 0) return;
          setDragAreaPosition({ left, right, top, bottom });
        }
      });
    });

    observer.observe(dragArea, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, [dragAreaRef]);

  useEffect(() => {
    const POINTER_OFFSET = { x: 5, y: 6 };
    const _selectedIcons = iconsRef.current.map((icon: HTMLDivElement) => {
      const {
        left: il,
        right: ir,
        top: it,
        bottom: ib,
      } = icon.getBoundingClientRect();

      const { left: dl, right: dr, top: dt, bottom: db } = dragAreaPosition;

      return (
        il <= dr + POINTER_OFFSET.x &&
        ir >= dl + POINTER_OFFSET.x &&
        it <= db + POINTER_OFFSET.y &&
        ib >= dt + POINTER_OFFSET.y
      );
    });
    setSelectedIcons(_selectedIcons);
  }, [setSelectedIcons, iconsRef, dragAreaPosition]);
};
