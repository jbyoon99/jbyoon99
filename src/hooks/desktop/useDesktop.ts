import { useEffect, useState } from "react";
import { useBlockArea } from "./";

export const useDesktop = ({ desktopRef, iconsRef }) => {
  const [isDrawingBlockArea, setIsDrawingBlockArea] = useState(false);
  const [cursorPoint, setCursorPoint] = useState({
    initial: null,
    current: null,
  });
  const [clickedIcon, setClickedIcon] = useState({
    initial: null,
    current: null,
  });
  const [selectedIcons, setSelectedIcons] = useState([]);
  const { blockAreaStyle } = useBlockArea({
    desktopRef,
    iconsRef,
    cursorPoint,
    setSelectedIcons,
  });

  // icon
  useEffect(() => {
    if (!iconsRef) return;
    const click = (i) => {
      setClickedIcon({ initial: i, current: i });
    };

    const iconHandlers = iconsRef.current.map((_, i) => {
      return () => {
        click(i);
        setSelectedIcons([]);
      };
    });

    iconsRef.current.forEach((icon, i) =>
      icon.addEventListener("click", iconHandlers[i])
    );

    return () =>
      iconsRef.current.forEach(
        (icon, i) => icon && icon.removeEventListener("click", iconHandlers[i])
      );
  }, [iconsRef]);

  useEffect(() => {
    if (!iconsRef) return;

    const changeIcon = (e: React.KeyboardEvent) => {
      setSelectedIcons([]);
      if (e.key === "ArrowUp") {
        setClickedIcon((prevIcon) => {
          return {
            ...prevIcon,
            current: prevIcon.current <= 0 ? 0 : prevIcon.current - 1,
          };
        });
      }
      if (e.key === "ArrowDown") {
        setClickedIcon((prevIcon) => {
          return {
            ...prevIcon,
            current:
              prevIcon.current >= iconsRef.current.length - 1
                ? iconsRef.current.length - 1
                : prevIcon.current + 1,
          };
        });
      }
    };

    window.addEventListener("keydown", changeIcon);
    return () => window.removeEventListener("keydown", changeIcon);
  }, [iconsRef]);

  // desktop
  useEffect(() => {
    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDrawingBlockArea) return;
      const { clientX: x, clientY: y } = e;
      setCursorPoint((prevPoint) => {
        return { ...prevPoint, current: { x, y } };
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isDrawingBlockArea]);

  useEffect(() => {
    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target?.closest("div")?.id !== "desktop") return;
      const { clientX: x, clientY: y } = e;
      setCursorPoint({ initial: { x, y }, current: { x, y } });
      setClickedIcon((prevIcon) => {
        return { ...prevIcon, current: null };
      });
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
  }, []);

  return {
    blockAreaStyle,
    selectedIcons,
    clickedIcon,
  };
};
