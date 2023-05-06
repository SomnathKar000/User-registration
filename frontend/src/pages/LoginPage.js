import React from "react";
import { FormControl, Button, TextField, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        <TextField label="Email" variant="standard" />
        <TextField type="password" label="Password" variant="standard" />
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
