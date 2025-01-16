import { modalTemplate } from "@/templates";
import { createContext, useContext, useReducer } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

const modalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL": {
      const newIndex = state.globalIndex + 1;
      return {
        modals: [
          ...state.modals.map((modal) => {
            return { ...modal, isFocused: false };
          }),
          {
            name: action.name,
            index: newIndex,
            ico: modalTemplate[action.name].ico,
            isFocused: true,
          },
        ],
        globalIndex: newIndex,
      };
    }

    case "CLOSE_MODAL": {
      return {
        ...state,
        modals: state.modals.filter((modal) => modal.name !== action.name),
      };
    }

    case "BRING_TO_FRONT": {
      const newIndex = state.globalIndex + 1;
      return {
        modals: state.modals.map((modal) =>
          modal.name === action.name
            ? { ...modal, index: newIndex, isFocused: true }
            : { ...modal, isFocused: false }
        ),
        globalIndex: newIndex,
      };
    }

    default:
      return state;
  }
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, {
    modals: [],
    globalIndex: 0,
  });

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {typeof window !== "undefined" &&
        createPortal(
          state.modals.map(({ name, index }) => {
            const { Component, ico } = modalTemplate[name];

            return <Component name={name} key={index} index={index} ico={ico} />;
          }),
          document.getElementById("__next")!
        )}
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModal() must be used within a ModalProvider");

  return context;
};
