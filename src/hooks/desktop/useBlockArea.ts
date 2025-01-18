import { useEffect, useReducer, useRef } from "react";

const blockAreaReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return { width: 0, height: 0, top: 0, left: 0 };

    case "update":
      return action.value;

    default:
      return state;
  }
};

export const useBlockArea = ({
  desktopRef,
  iconsRef,
  setSelectedIcons,
  cursorPoint,
}) => {
  const desktopBoundingRect = useRef(null);
  const [state, dispatch] = useReducer(blockAreaReducer, {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (!desktopRef) return;

    const updateDesktopPosition = () => {
      desktopBoundingRect.current = desktopRef.current.getBoundingClientRect();
    };

    window.addEventListener("resize", updateDesktopPosition);
    updateDesktopPosition();

    return () => {
      window.removeEventListener("resize", updateDesktopPosition);
    };
  }, [desktopRef]);

  useEffect(() => {
    if (!iconsRef || !cursorPoint.initial) {
      dispatch({ type: "reset" });
      return;
    }

    const getSelectionRect = (start, end) => {
      const POINTER_OFFSET = { x: 5, y: 6 };
      const STATUS_BAR_HEIGHT = 30;
      const { x: sx, y: sy } = start;
      const { x: ex, y: ey } = end;
      const {
        x: dx,
        y: dy,
        width: dw,
        height: dh,
      } = desktopBoundingRect.current;

      const isOutOfLeft = ex - POINTER_OFFSET.x <= dx;
      const isOutOfRight = ex + POINTER_OFFSET.x > dx + dw;
      const isOutOfTop = ey - POINTER_OFFSET.y <= dy;
      const isOutOfBottom = ey + POINTER_OFFSET.y > dy + dh - STATUS_BAR_HEIGHT;
      let width, height, left, top;

      width = Math.abs(sx - ex);
      height = Math.abs(sy - ey);
      left = Math.abs(dx - Math.min(sx, ex) + POINTER_OFFSET.x);
      top = Math.abs(dy - Math.min(sy, ey) + POINTER_OFFSET.y);

      if (isOutOfLeft) {
        left = 0;
        width = Math.abs(sx - dx) - POINTER_OFFSET.x;
      }
      if (isOutOfTop) {
        top = 0;
        height = Math.abs(sy - dy) - POINTER_OFFSET.y;
      }
      if (isOutOfRight) {
        left = sx - dx - POINTER_OFFSET.x;
        width = dx + dw - sx - POINTER_OFFSET.x;
      }
      if (isOutOfBottom) {
        top = sy - dy - POINTER_OFFSET.y;
        height = dy + dh - STATUS_BAR_HEIGHT - sy;
      }

      return { width, height, left, top };
    };

    const { initial, current } = cursorPoint;
    const { width, height, left, top } = getSelectionRect(initial, current);
    const POINTER_OFFSET = { x: 5, y: 6 };
    dispatch({ type: "update", value: { width, height, top, left } });

    const _selectedIcons = iconsRef.current.map((icon: HTMLDivElement) => {
      const {
        width: iw,
        height: ih,
        top: it,
        left: il,
      } = icon.getBoundingClientRect();
      const { x: dx, y: dy } = desktopBoundingRect.current;
      const isXIntersect =
        il <= left + width + dx + POINTER_OFFSET.x &&
        il + iw >= left + dx + POINTER_OFFSET.x;
      const isYIntersect =
        it <= top + height + dy + POINTER_OFFSET.y &&
        ih + it >= top + dy + POINTER_OFFSET.y;
      return isXIntersect && isYIntersect;
    });
    setSelectedIcons(_selectedIcons);
  }, [iconsRef, setSelectedIcons, cursorPoint]);

  return { blockAreaStyle: state };
};
