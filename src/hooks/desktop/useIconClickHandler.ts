import { Modal } from "@/components";
import { useModal } from "@/providers";
import { useCallback, useState } from "react";

export const useIconClickHandler = (callbacks) => {
  const [clickCount, setClickCount] = useState(0);
  const { open, close } = useModal();

  const iconClickHandler = useCallback(
    (i) => {
      callbacks.forEach((fn) => fn(i));
      if (clickCount === 0) {
        setClickCount(1);
        setTimeout(() => setClickCount(0), 250);
      }
      if (clickCount === 1) {
        setClickCount(0);
        open("modal", Modal, { handleClose: () => close("modal") });
      }
    },
    [clickCount, callbacks, open, close]
  );

  return { iconClickHandler };
};
