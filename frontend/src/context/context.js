import { createContext, useReducer, useContext } from "react";
import reducer from "../reducer/reducer";
const initialState = {
  mode: "light",
  user: [],
  Loading: false,
  dialog: {
    open: false,
    title: "",
    value: "",
    type: "",
  },
  alert: {
    open: false,
    type: "info",
    message: "Enter your information",
  },
};

const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changeMode = () => {
    dispatch({ type: "CHANGE_MODE" });
  };
  const openAlert = (message, type) => {
    dispatch({ type: "OPEN_ALERT", payload: { message, type } });
  };
  const closeAlert = (event, reason) => {
    dispatch({ type: "CLOSE_ALERT" });
    if (reason === "clickaway") {
      return;
    }
  };
  const openDialog = (title, value, type) => {
    dispatch({ type: "OPEN_DIALOG", payload: { title, value, type } });
  };
  const closeDialog = () => {
    dispatch({ type: "CLOSE_DIALOG" });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        changeMode,
        openAlert,
        closeAlert,
        openDialog,
        closeDialog,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
