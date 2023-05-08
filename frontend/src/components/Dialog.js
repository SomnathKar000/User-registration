import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { useUserContext } from "../context/context";

const DialogComponent = () => {
  const { closeDialog, dialog, OnChange, UpdateUserData, openAlert } =
    useUserContext();
  const { title, value, type } = dialog;
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;

    if (password.length < 6) {
      openAlert("Please enter a valid password", "error");
      return;
    }
    const updateData = {};
    updateData[title.toLowerCase()] = value;
    UpdateUserData(updateData, password);
    closeDialog();
  };

  return (
    <Box>
      <Dialog open={dialog.open} onClose={closeDialog}>
        <DialogTitle>Edit {dialog.title}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label={`Add new ${title}`}
            type={type}
            value={value}
            onChange={OnChange}
            fullWidth
            variant="standard"
            sx={{ marginTop: 2 }}
          />
          <TextField
            inputRef={passwordRef}
            fullWidth
            label="Enter your password"
            type="password"
            sx={{ marginTop: 2 }}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DialogComponent;
