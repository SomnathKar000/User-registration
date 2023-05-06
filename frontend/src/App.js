import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
} from "@mui/material";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Alert />
        <Container>
          <Routes>
            <Route path="/" element={<UserPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Box>
  );
}

export default App;
