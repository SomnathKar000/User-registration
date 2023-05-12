import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Alert from "./components/Alert";
import Dialog from "./components/Dialog";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from "@mui/material";
import { useUserContext } from "./context/context";

function App() {
  const { mode } = useUserContext();
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Alert />
        <Loading />
        <Dialog />
        <Container>
          <Routes>
            <Route path="/" element={<UserPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
