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

  return { ...state };
};

export default reducer;
