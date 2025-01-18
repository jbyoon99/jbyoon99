import { useModalContext } from "@/providers";
import { useCallback } from "react";

export const useModal = () => {
  const { state, dispatch } = useModalContext();

  const setModalFocused = useCallback(
    (name: string) => dispatch({ type: "SET_MODAL_FOCUSED", name }),
    [dispatch]
  );
  const open = useCallback(
    (name: string) =>
      state.modals.find((modal) => modal.name === name)
        ? setModalFocused(name)
        : dispatch({ type: "OPEN_MODAL", name }),
    [dispatch, state, setModalFocused]
  );
  const close = useCallback(
    (name: string) => dispatch({ type: "CLOSE_MODAL", name }),
    [dispatch]
  );

  return { state, open, close, setModalFocused };
};
