import { useEffect, useState } from "react";
import { useIconClick, useDragArea, useIconsSelection } from "./";

export const useDesktop = ({
  backgroundRef,
  iconsRef,
  dragAreaRef,
  iconData,
}) => {
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [clickedIcon, setClickedIcon] = useState({
    current: null,
    initial: null,
  });

  useDragArea({ backgroundRef, dragAreaRef });
  useIconsSelection({
    iconsRef,
    dragAreaRef,
    setSelectedIcons,
  });
  useIconClick({ iconsRef, iconData, setClickedIcon });

  useEffect(() => {
    if (!backgroundRef) return;

    const background = backgroundRef.current;

    const resetSelection = (e: React.MouseEvent) => {
      setSelectedIcons([]);
      if (e.target.closest("div") === background)
        setClickedIcon((prev) => ({ ...prev, current: null }));
    };
    window.addEventListener("mousedown", resetSelection);
    return () => window.removeEventListener("mousedown", resetSelection);
  }, [backgroundRef]);

  return { selectedIcons, clickedIcon };
};
