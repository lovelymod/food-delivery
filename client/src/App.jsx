import "./App.css";

// page
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Restaurants from "./pages/Restaurants";
import BuckgetPage from "./pages/BuckgetPage";
import Ordered from "./pages/Ordered";
import FoodmenuPage from "./pages/FoodmenuPage";
import FoodDetail from "./pages/FoodDetail";
import OrderPlacing from "./pages/OrderPlacing";

// utill
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useState } from "react";

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

export const CustomerContext = createContext(null);

function App() {
  const [cusID, setCusID] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CustomerContext.Provider value={{ cusID: cusID, setCusID: setCusID }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />}>
              <Route path="restaurants" element={<Restaurants />} />
              <Route path="bucket" element={<BuckgetPage />} />
              <Route path="order" element={<Ordered />} />
              <Route path="foodmenu" element={<FoodmenuPage />} />
              <Route path="fooddetail" element={<FoodDetail />} />
              <Route path="placing" element={<OrderPlacing />} />
            </Route>
          </Routes>
        </CustomerContext.Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
