import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ContextProvider, useAppContext } from "./context/ContextProvider";
import AppNavbar from "./components/AppNavbar";
import LandingDashboard from "./containers/Landing";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AppContent = () => {
  const { openDraw } = useAppContext();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        margin: "0px",
        height: "100vh",
        backgroundColor: "#141414",
      }}
    >
      <AppNavbar />
      <Tabs
        sx={{
          width: !openDraw ? "92.5%" : "85%",
          ml: !openDraw ? "110px" : "220px",
          transition: "width 0.3s, margin-left 0.3s",
          borderBottom: "1px solid",
          borderColor: "gray",
        }}
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Item One" {...a11yProps(0)} sx={{ color: "white" }} />
        <Tab label="Item Two" {...a11yProps(1)} sx={{ color: "white" }} />
        <Tab label="Item Three" {...a11yProps(2)} sx={{ color: "white" }} />
      </Tabs>
      <Box
        sx={{
          height: "83%",
          mt: "20px",
          width: !openDraw ? "92.5%" : "85%",
          ml: !openDraw ? "110px" : "220px",
          transition: "width 0.3s, margin-left 0.3s",
        }}
      >
        <LandingDashboard />
      </Box>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <AppContent />
      </ContextProvider>
    </Provider>
  );
};

export default App;
