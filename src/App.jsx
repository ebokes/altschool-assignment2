// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Users from "./pages/Users/index";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  const theme = {
    color: {
      primary: "#ffbb00",
      secondary: "#232434",
      black: "#000",
      white: "#fff",
      transparent: "transparent",
    },

    screens: {
      xsm: "414px",
      sm: "600px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
