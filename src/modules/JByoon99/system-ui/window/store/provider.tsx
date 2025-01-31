import { createContext, useContext, useReducer } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

const modalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL": {
      const newModal = {
        name: action.name,
        isFocused: true,
      };

      return {
        modals: [
          ...state.modals.map((modal) => {
            return { ...modal, isFocused: false };
          }),
          newModal,
        ],
      };
    }

    case "CLOSE_MODAL": {
      return {
        modals: state.modals.filter((modal) => modal.name !== action.name),
      };
    }

    case "SET_MODAL_FOCUSED": {
      return {
        ...state,
        modals: state.modals.map((modal) =>
          modal.name === action.name
            ? { ...modal, isFocused: true }
            : {
                ...modal,
                isFocused: false,
              }
        ),
      };
    }

    default:
      return state;
  }
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, {
    modals: [],
  });

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {typeof window !== "undefined" &&
        document.getElementById("desktop") &&
        createPortal(
          state.modals.map((modal) => {
            const { Component, name, content, isFocused, ico } = modal;
            return (
              <Component
                key={name}
                name={name}
                ico={ico}
                isFocused={isFocused}
                content={content}
              />
            );
          }),
          document.getElementById("desktop")!
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
