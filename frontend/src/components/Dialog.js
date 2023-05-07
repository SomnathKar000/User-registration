import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useUserContext } from "../context/context";

const DialogComponent = () => {
  const { closeDialog, dialog } = useUserContext();
  const { title, value, type } = dialog;
  return (
    <div>
      <Dialog open={dialog.open} onClose={closeDialog}>
        <DialogTitle>Edit {dialog.title}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label={`Add new ${title}`}
            type={type}
            value={value}
            fullWidth
            variant="standard"
            sx={{ marginTop: 2 }}
          />
          <TextField
            fullWidth
            label="Enter your password"
            type="password"
            sx={{ marginTop: 2 }}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={closeDialog}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogComponent;
