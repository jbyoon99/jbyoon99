import { useEffect, useRef, useState } from "react";
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
  const desktopHandlers = useRef({
    mousedown: (e) => {},
    mouseup: (e) => {},
    mousemove: (e) => {},
    contextmenu: (e) => {},
  });
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
    const mousemove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDrawingBlockArea) return;
      const { clientX: x, clientY: y } = e;
      setCursorPoint((prevPoint) => {
        return { ...prevPoint, current: { x, y } };
      });
    };

    desktopHandlers.current["mousemove"] = mousemove;
  }, [isDrawingBlockArea]);

  useEffect(() => {
    const mousedown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target?.closest("div")?.id !== "desktop") return;
      const { clientX: x, clientY: y } = e;
      setCursorPoint({ initial: { x, y }, current: { x, y } });
      setClickedIcon((prevIcon) => {
        return { ...prevIcon, current: null };
      });
      setIsDrawingBlockArea(true);
    };
    const mouseup = () => {
      setCursorPoint({ initial: null, current: null });
      setIsDrawingBlockArea(false);
    };
    const contextmenu = (e: React.MouseEvent) => {
      e.preventDefault();
    };
    desktopHandlers.current["mousedown"] = mousedown;
    desktopHandlers.current["mouseup"] = mouseup;
    desktopHandlers.current["contextmenu"] = contextmenu;

    const mouseMoveHandler = window.addEventListener("mousemove", (e) =>
      desktopHandlers.current["mousemove"](e)
    );
    const mouseDownHandler = window.addEventListener("mousedown", (e) =>
      desktopHandlers.current["mousedown"](e)
    );
    const mouseUpHandler = window.addEventListener("mouseup", (e) =>
      desktopHandlers.current["mouseup"](e)
    );
    const contextMenuHandler = window.addEventListener("contextmenu", (e) =>
      desktopHandlers.current["contextmenu"](e)
    );

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
      window.removeEventListener("contextmenu", contextMenuHandler);
    };
  }, []);

  return {
    blockAreaStyle,
    selectedIcons,
    clickedIcon,
  };
};
