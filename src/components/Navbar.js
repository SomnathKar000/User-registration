import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/context";

const Navbar = () => {
  const { changeMode, mode, LogOutUser, user } = useUserContext();
  const history = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href="/"
          >
            <AccountBoxIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            USER
          </Typography>
          {Object.keys(user).length === 0 ? (
            <Button
              onClick={() => {
                history("/login");
              }}
              color="inherit"
            >
              Login
            </Button>
          ) : (
            <Button
              onClick={() => {
                LogOutUser();
                history("/login");
              }}
              color="inherit"
            >
              Logout
            </Button>
          )}
          <Tooltip title={`Enable ${mode === "light" ? "dark" : "light"} mode`}>
            <IconButton onClick={changeMode} sx={{ color: "white" }}>
              {mode === "dark" ? (
                <LightModeIcon fontSize="inherit" />
              ) : (
                <DarkModeIcon fontSize="inherit" />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
