import { useEffect } from "react";
import { useIconClickHandler } from "./";

export const useDesktopIcon = ({
  iconsRef,
  clickedIconIdx,
  setClickedIconIdx,
  setPrevClickedIconIdx,
}) => {
  const { iconClickHandler } = useIconClickHandler([
    setClickedIconIdx,
    setPrevClickedIconIdx,
  ]);

  useEffect(() => {
    if (!iconsRef) return;

    const icons = iconsRef.current;

    const clickHandlers = iconsRef.current.map((_, i) => {
      return () => {
        iconClickHandler(i);
      };
    });
    const contextMenuHandlers = iconsRef.current.map((_, i) => {
      return () => {
        setClickedIconIdx(i);
        setPrevClickedIconIdx(i);
      };
    });

    icons.forEach((icon, i) => {
      icon.addEventListener("click", clickHandlers[i]);
      icon.addEventListener("contextmenu", contextMenuHandlers[i]);
    });

    return () =>
      icons.forEach((icon, i) => {
        icon.removeEventListener("click", clickHandlers[i]);
        icon.removeEventListener("contextmenu", contextMenuHandlers[i]);
      });
  }, [iconsRef, setClickedIconIdx, setPrevClickedIconIdx, iconClickHandler]);

  useEffect(() => {
    if (!iconsRef) return;
    const changeIcon = (e: React.KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setClickedIconIdx(() => (clickedIconIdx <= 0 ? 0 : clickedIconIdx - 1));
      }
      if (e.key === "ArrowDown") {
        setClickedIconIdx(() =>
          clickedIconIdx >= iconsRef.current.length - 1
            ? iconsRef.current.length - 1
            : clickedIconIdx + 1
        );
      }
    };

    window.addEventListener("keydown", changeIcon);

    return () => window.removeEventListener("keydown", changeIcon);
  }, [iconsRef, setClickedIconIdx, clickedIconIdx]);

  return;
};
