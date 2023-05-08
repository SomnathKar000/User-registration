const reducer = (state, action) => {
  if (action.type === "CHANGE_MODE") {
    let mode = "light";
    if (state.mode === "light") {
      mode = "dark";
    }
    return { ...state, mode };
  }
  if (action.type === "OPEN_ALERT") {
    const alert = {
      open: true,
      type: action.payload.type,
      message: action.payload.message,
    };
    return { ...state, alert };
  }
  if (action.type === "CLOSE_ALERT") {
    return { ...state, alert: { ...state.alert, open: false } };
  }

  if (action.type === "OPEN_DIALOG") {
    const { title, value, type } = action.payload;

    const dialog = {
      open: true,
      title,
      value,
      type,
    };
    return {
      ...state,
      dialog,
    };
  }
  if (action.type === "CLOSE_DIALOG") {
    return { ...state, dialog: { ...state.dialog, open: false } };
  }

  if (action.type === "GET_USER_DATA") {
    const { name, email, password } = action.payload;
    const user = {
      Name: name,
      Email: email,
      Password: password,
    };
    return { ...state, user };
  }
  if (action.type === "LOGOUT_USER") {
    return { ...state, user: {} };
  }
  if (action.type === "CHANGE_EDID_DATA") {
    return { ...state, dialog: { ...state.dialog, value: action.payload } };
  }

  return { ...state };
};

export default reducer;
