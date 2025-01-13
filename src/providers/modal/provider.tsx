import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

type modalType = {
  name: string;
  Component: React.FC<any>;
  props: { [key: string]: any };
};

export const ModalProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState<modalType[]>([]);
  const [modalZIndex, setModalZIndex] = useState<number>(1);

  const open = useCallback(
    (name, Component, props) => {
      setOpenedModals((_openedModals) => {
        if (_openedModals.some((modal) => modal.name === name))
          return _openedModals;
        return [..._openedModals, { name, Component, props }];
      });
    },
    [setOpenedModals]
  );

  const close = useCallback(
    (name) => {
      setOpenedModals((_openedModals) => {
        let removed = false;
        return _openedModals.filter((modal) => {
          if (!removed && modal.name === name) {
            removed = true;
            return false;
          }
          return true;
        });
      });
    },
    [setOpenedModals]
  );
  
  // Note: 아래 useEffect는 느려질 시 삭제해도 됨
  useEffect(() => {
    if (openedModals.length === 0) setModalZIndex(1);
  }, [openedModals]);
  // 

  return (
    <ModalContext.Provider value={{ open, close }}>
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
