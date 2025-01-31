import { useState } from "react";

export const useDoubleClick = (callbacks) => {
  const [clickCount, setClickCount] = useState(0);

  const onDoubleClick = () => {
    if (clickCount === 0) {
      setClickCount(1);
      setTimeout(() => setClickCount(0), 250);
    }
    if (clickCount === 1) {
      setClickCount(0);

      callbacks.forEach((fn) => fn());
    }
  };

  return { onDoubleClick };
};
