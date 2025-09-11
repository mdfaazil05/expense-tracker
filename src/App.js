import React, { use, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ContextProvider, useAppContext } from "./context/ContextProvider";
import AppNavbar from "./components/AppNavbar";
import LandingDashboard from "./containers/Landing";
import Box from "@mui/material/Box";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import Login from "./containers/login";
import Signup from "./containers/signup";

import Layout from "./components/Layout";

const AppContent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        navigate("/home");
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        navigate("/home");
        // console.log("user is logged out");
      }
    });
  }, []);
  return (
    <div
      style={{
        margin: "0px",
        height: "100vh",
        // backgroundColor: "#141414",
      }}
    >
      <Routes>
        {/* <AppNavbar /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={<Layout children={<LandingDashboard />} />}
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
        {/* <Route path="/home" element={<LandingDashboard />} /> */}

        {/* <Layout children={<LandingDashboard />} /> */}
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <Router>
          <AppContent />
        </Router>
      </ContextProvider>
    </Provider>
  );
};

export default App;
