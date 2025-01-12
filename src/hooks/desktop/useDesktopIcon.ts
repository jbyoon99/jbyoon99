import { useEffect } from "react";

export const useDesktopIcon = ({
  iconsRef,
  clickedIconIdx,
  setClickedIconIdx,
  setPrevClickedIconIdx,
}) => {
  useEffect(() => {
    if (!iconsRef) return;
    const updateClicked = (idx) => {
      setClickedIconIdx(idx);
      setPrevClickedIconIdx(idx);
    };
    const clickHandlers = iconsRef.current.map((_, i) => {
      return () => updateClicked(i);
    });

    iconsRef.current.forEach((icon, i) => {
      icon.addEventListener("click", clickHandlers[i]);
      icon.addEventListener("contextmenu", clickHandlers[i]);
    });

    return iconsRef.current.forEach((icon, i) => {
      icon.addEventListener("click", clickHandlers[i]);
      icon.addEventListener("contextmenu", clickHandlers[i]);
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
