import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useUserContext } from "../context/context";

const AlertComponent = () => {
  const { closeAlert, alert } = useUserContext();
  return (
    <Snackbar open={alert.open} autoHideDuration={6000} onClose={closeAlert}>
      <Alert onClose={closeAlert} severity={alert.type} sx={{ width: "100%" }}>
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
