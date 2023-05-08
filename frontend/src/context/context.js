import { createContext, useReducer, useContext, useEffect } from "react";
import Axios from "axios";
import reducer from "../reducer/reducer";
const initialState = {
  mode: "light",
  user: {},
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
  let host = window.location.origin;
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

  const LoginUser = async (email, password) => {
    try {
      const response = await Axios.post(`${host}/api/v1/user/login`, {
        email,
        password,
      });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        openAlert(response.data.msg, "success");
        return true;
      }
    } catch (error) {
      openAlert(error.response.data.msg, "error");
      return false;
    }
  };
  const SignUpUser = async (name, email, password) => {
    try {
      const response = await Axios.post(`${host}/api/v1/user/sign-up`, {
        name,
        email,
        password,
      });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        openAlert(response.data.msg, "success");
        return true;
      }
    } catch (error) {
      openAlert(error.response.data.msg, "error");
      return false;
    }
  };
  const GetUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    try {
      const response = await Axios.get(`${host}/api/v1/user`, {
        headers: {
          "auth-token": token,
        },
      });
      if (response.data.success) {
        dispatch({ type: "GET_USER_DATA", payload: response.data.user });
        return;
      }
    } catch (error) {
      localStorage.removeItem("token");
      openAlert(error.response.data.msg, "error");
      return false;
    }
  };
  const UpdateUserData = async (updateData, password) => {
    const token = localStorage.getItem("token");
    try {
      const response = await Axios.put(
        `${host}/api/v1/user/update-user`,
        { updateData, password },
        {
          headers: {
            "auth-token": token,
          },
        }
      );
      if (response.data.success) {
        openAlert(response.data.msg, "success");
        GetUser();
        return;
      }
    } catch (error) {
      openAlert(error.response.data.msg, "error");
      return false;
    }
  };

  const LogOutUser = () => {
    dispatch({ type: "LOGOUT_USER" });
    localStorage.removeItem("token");
  };
  const OnChange = (e) => {
    dispatch({ type: "CHANGE_EDID_DATA", payload: e.target.value });
  };

  useEffect(() => {
    GetUser();
  }, [localStorage.getItem("token")]);
  return (
    <UserContext.Provider
      value={{
        ...state,
        changeMode,
        openAlert,
        closeAlert,
        openDialog,
        closeDialog,
        LoginUser,
        SignUpUser,
        GetUser,
        UpdateUserData,
        LogOutUser,
        OnChange,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
