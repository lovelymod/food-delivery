import "./App.css";

// page
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Kanit",
  },

  palette: {
    primary: {
      main: "#fcbc58",
    },
    secondary: {
      main: "#ff6d59",
    },
    third: {
      main: "#708a65",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <div className="App h-screen w-screen bg-white"> */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;