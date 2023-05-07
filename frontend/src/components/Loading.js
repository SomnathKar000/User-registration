import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useUserContext } from "../context/context";

const Loading = () => {
  const { Loading } = useUserContext();
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={Loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
