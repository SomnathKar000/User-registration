import React from "react";
import { Box, TextField, FormControl, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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

        <TextField label="Full name" variant="standard" />
        <TextField label="Email" type="email" variant="standard" />
        <TextField label="Password" type="password" variant="standard" />
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
