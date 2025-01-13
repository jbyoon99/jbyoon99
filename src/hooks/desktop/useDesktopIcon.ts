import { useEffect } from "react";

export const useDesktopIcon = ({
  iconsRef,
  clickedIconIdx,
  setClickedIconIdx,
  setPrevClickedIconIdx,
}) => {
  useEffect(() => {
    if (!iconsRef) return;

    const icons = iconsRef.current;

    const iconClickHandler = (i) => {
      setClickedIconIdx(i);
      setPrevClickedIconIdx(i);
    };

    const clickHandlers = iconsRef.current.map((_, i) => {
      return () => {
        iconClickHandler(i);
      };
    });
    const contextMenuHandlers = iconsRef.current.map((_, i) => {
      return () => {
        iconClickHandler(i);
      };
    });

    icons.forEach((icon, i) => {
      icon.addEventListener("click", clickHandlers[i]);
      icon.addEventListener("contextmenu", contextMenuHandlers[i]);
    });

    return () =>
      icons.forEach((icon, i) => {
        if (!icon) return;
        icon.removeEventListener("click", clickHandlers[i]);
        icon.removeEventListener("contextmenu", contextMenuHandlers[i]);
      });
  }, [iconsRef, setClickedIconIdx, setPrevClickedIconIdx]);

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
