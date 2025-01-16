import { useModalContext } from "@/providers";
import { useCallback } from "react";

export const useModal = () => {
  const { state, dispatch } = useModalContext();

  const bringToFront = useCallback(
    (name: string) => dispatch({ type: "BRING_TO_FRONT", name }),
    [dispatch]
  );
  const open = useCallback(
    (name: string) =>
      state.modals.find((modal) => modal.name === name)
        ? bringToFront(name)
        : dispatch({ type: "OPEN_MODAL", name }),
    [dispatch, state.modals, bringToFront]
  );
  const close = useCallback(
    (name: string) => dispatch({ type: "CLOSE_MODAL", name }),
    [dispatch]
  );

  return { state, open, close, bringToFront };
};
