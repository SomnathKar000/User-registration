import React, { useRef, useEffect } from "react";
import { Box, TextField, FormControl, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/context";

const SignUpPage = () => {
  const { SignUpUser, openAlert } = useUserContext();
  const history = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (name.trim().length <= 4) {
      openAlert("Please enter a valid name", "error");
      return;
    }
    if (password.length < 6) {
      openAlert("Password must be 6 characters", "error");
      return;
    }

    let responce = await SignUpUser(name, email, password);
    if (responce) {
      history("/");
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
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          marginX: "20%",
          marginY: 6,
        }}
      >
        <Typography textAlign="center" variant="h4">
          Sign up Page
        </Typography>

        <TextField inputRef={nameRef} label="Full name" variant="standard" />
        <TextField
          inputRef={emailRef}
          label="Email"
          type="email"
          variant="standard"
        />
        <TextField
          inputRef={passwordRef}
          label="Password"
          type="password"
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </FormControl>
      <Typography textAlign="center">
        Already registered? <Link to="/login">Sign in</Link>
      </Typography>
    </Box>
  );
};

export default SignUpPage;
