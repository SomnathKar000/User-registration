import React, { useRef, useEffect } from "react";
import { FormControl, Button, TextField, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/context";

const LoginPage = () => {
  const { LoginUser, openAlert } = useUserContext();
  const history = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (password.length < 6) {
      openAlert("Password must be 6 characters", "info");
      return;
    }
    let result = await LoginUser(email, password);
    if (result) {
      history("/");
      return;
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history("/");
    }
  }, []);
  return (
    <Box>
      <FormControl
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          marginX: "20%",
          marginY: 5,
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" textAlign="center">
          Login Page
        </Typography>
        <TextField
          required={true}
          inputRef={emailRef}
          label="Email"
          variant="standard"
        />
        <TextField
          required={true}
          inputRef={passwordRef}
          type="password"
          label="Password"
          variant="standard"
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </FormControl>
      <Typography textAlign="center">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </Typography>
    </Box>
  );
};

export default LoginPage;
