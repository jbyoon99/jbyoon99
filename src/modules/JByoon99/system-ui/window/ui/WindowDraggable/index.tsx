import { useEffect, useRef } from "react";
import * as S from "./styled";

export const WindowDraggable = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const windowRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!windowRef) return;

    const window = windowRef.current!;
    const { width, height } = window.getBoundingClientRect();

    window.style.left = `calc(50% - ${width / 2}px)`;
    window.style.top = `calc(50% - ${height / 2}px)`;
  }, []);

  return (
    <S.WindowDraggableWrapper ref={windowRef}>
      {children}
    </S.WindowDraggableWrapper>
  );
};
