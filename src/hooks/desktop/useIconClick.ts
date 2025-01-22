import { useEffect } from "react";

export const useIconClick = ({ iconsRef, iconData, setClickedIcon }) => {
  useEffect(() => {
    if (!iconsRef) return;

    const onClick = (idx) => {
      setClickedIcon({ initial: idx, current: idx });
    };

    const iconHandlers = iconsRef.current.map((_, idx) => {
      return () => onClick(idx);
    });

    iconsRef.current.forEach((icon, idx) =>
      icon.addEventListener("click", iconHandlers[idx])
    );

    const iconData = iconsRef.current;

    return () =>
      iconData.forEach(
        (icon, idx) =>
          icon && icon.removeEventListener("click", iconHandlers[idx])
      );
  }, [iconsRef, iconData, setClickedIcon]);

  useEffect(() => {
    if (!iconsRef) return;

    const changeIcon = (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp": {
          setClickedIcon((prev) => {
            return {
              ...prev,
              current: prev.current <= 0 ? 0 : prev.current - 1,
            };
          });
          break;
        }

        case "ArrowDown": {
          setClickedIcon((prev) => {
            return {
              ...prev,
              current:
                prev.current >= iconsRef.current.length - 1
                  ? iconsRef.current.length - 1
                  : prev.current + 1,
            };
          });
          break;
        }
      }
    };
    window.addEventListener("keydown", changeIcon);
    return () => window.removeEventListener("keydown", changeIcon);
  }, [iconsRef, iconData, setClickedIcon]);
};
