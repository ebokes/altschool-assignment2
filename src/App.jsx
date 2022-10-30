import ErrorBoundary from "./pages/Error/ErrorBoundary";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import ErrorPage from "./pages/Error/ErrorPage";

let Navbar = lazy(() => import("./components/Navbar"));
let Home = lazy(() => import("./pages/Home"));
let Contact = lazy(() => import("./pages/Contact"));
let Footer = lazy(() => import("./components/Footer"));
let Profile = lazy(() => import("./pages/Profile"));
let About = lazy(() => import("./pages/About"));
let Users = lazy(() => import("./pages/Users/index"));
let Values = lazy(() => import("./pages/Values/index"));

function App() {
  const theme = {
    color: {
      primary: "#ffbb00",
      secondary: "#232434",
      border: "#ccc",
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
        <ErrorBoundary>
          <GlobalStyles />
          <Suspense fallback={<Loading />}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />}>
                <Route path="users" element={<Users />} />
                <Route path="about" element={<About />} />
                <Route path=":values" element={<Values />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
