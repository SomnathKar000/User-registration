import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Divider from "@mui/material/Divider";
import { Paper, Box, IconButton, Tooltip } from "@mui/material";
import { useUserContext } from "../context/context";

const UserPage = () => {
  const { openDialog } = useUserContext();

  let iconArr = [<AccessibilityNewIcon />, <EmailIcon />, <PasswordIcon />];
  let user = { Name: "Somnath", Email: "somnath@gmail.com", Password: "*****" };
  const listItems = [];

  for (let key in user) {
    let index = Object.keys(user).indexOf(key);
    let item = user[key];
    let type = key === "Name" ? "text" : key.toLowerCase();
    listItems.push(
      <Box key={index}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>{iconArr[index]}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={key} secondary={item} />
          <Tooltip title={`Edit Your ${key}`}>
            <IconButton
              onClick={() => {
                openDialog(key, item, type);
              }}
            >
              <BorderColorIcon />
            </IconButton>
          </Tooltip>
        </ListItem>
        {iconArr.length - 1 > index && (
          <Divider variant="inset" component="li" />
        )}
      </Box>
    );
  }

  return (
    <Paper sx={{ marginX: "20%", marginY: "10%" }}>
      <List>{listItems}</List>
    </Paper>
  );
};

export default UserPage;
