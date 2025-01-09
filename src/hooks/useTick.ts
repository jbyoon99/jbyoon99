import { useEffect, useState } from "react";

export const useTick = <T>(callback: () => T, interval: number) => {
  const [time, setTime] = useState(callback());

  useEffect(() => {
    const updatePerGivenInterval = setInterval(() => {
      setTime(callback());
    }, interval);

    return () => clearInterval(updatePerGivenInterval);
  }, [callback, interval]);

  return time;
};
