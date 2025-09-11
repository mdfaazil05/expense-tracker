import Box from "@mui/material/Box";
import React from "react";
import { useAppContext } from "../context/ContextProvider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import AppNavbar from "./AppNavbar";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Layout = ({ children }) => {
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
      <Box
        sx={{
          height: "83%",
          mt: "-26px",
          ml: !openDraw ? "135px" : "240px",
          transition: "width 0.3s, margin-left 0.3s",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "white", mb: "10px", ml: "10px" }}
        >
          Dashboard
        </Typography>
        <Tabs
          sx={{
            mb: "20px",
            transition: "width 0.3s, margin-left 0.3s",
            borderBottom: "1px solid",
            borderColor: "gray",
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Expenses" {...a11yProps(0)} sx={{ color: "white" }} />
          <Tab label="Savings" {...a11yProps(1)} sx={{ color: "white" }} />
        </Tabs>
        {children}
      </Box>
    </div>
  );
};
export default Layout;
