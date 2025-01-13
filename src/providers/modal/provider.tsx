import { createContext, useCallback, useContext, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

type modalType = {
  Component: React.FC<any>;
  props: { [key: string]: any };
  meta?: { name?: string; ico: string };
};

export const ModalProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState<modalType[]>([]);
  const [focusedModal, setFocusedModal] = useState<string | null>(null);

  const open = useCallback(
    (Component, props, meta) => {
      setOpenedModals((_openedModals) => {
        setFocusedModal(meta.name);
        if (
          _openedModals.some(
            (modal) => modal.meta && modal.meta.name === meta.name
          )
        ) {
          return _openedModals;
        }

        return [..._openedModals, { Component, props, meta }];
      });
    },
    [setOpenedModals]
  );

  const close = useCallback(
    (name) => {
      setOpenedModals((_openedModals) => {
        let removed = false;
        return _openedModals.filter((modal) => {
          if (!removed && modal.meta && modal.meta.name === name) {
            removed = true;
            return false;
          }
          return true;
        });
      });
      if (focusedModal === name) {
        setFocusedModal(null);
      }
    },
    [setOpenedModals, focusedModal]
  );

  // Note: 아래 useEffect는 느려질 시 삭제해도 됨
  // useEffect(() => {
  //   if (openedModals.length === 0) setModalZIndex(1);
  // }, [openedModals]);
  //

  return (
    <ModalContext.Provider
      value={{ open, close, openedModals, focusedModal, setFocusedModal }}
    >
      {typeof window !== "undefined" &&
        createPortal(
          openedModals.map(({ name, Component, props }, i) => {
            return <Component key={i} id={name} {...props} />;
          }),
          document.getElementById("__next")!
        )}
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModal() must be used within a ModalProvider");

  return context;
};
