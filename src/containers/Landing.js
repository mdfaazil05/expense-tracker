import React from "react";
import AppNavbar from "../components/AppNavbar";
import Grid from "@mui/material/Grid";
import CustomGrid from "../components/CustomGrid";

const LandingDashboard = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ textAlign: "center", height: "15%" }}>
        <CustomGrid size={4} cardTitle="Card 1" />
        <CustomGrid size={4} cardTitle="Card 2" />
        <CustomGrid size={4} cardTitle="Card 3" />
      </Grid>
      <Grid
        container
        spacing={2}
        mt={2}
        sx={{ textAlign: "center", height: "43%" }}
      >
        <CustomGrid size={7} cardTitle="Card 4" />
        <CustomGrid size={5} cardTitle="Card 5" />
      </Grid>
      <Grid
        container
        spacing={2}
        mt={2}
        sx={{ textAlign: "center", height: "33%" }}
      >
        <CustomGrid size={12} cardTitle="Card 4" />
      </Grid>
    </>
  );
};
export default LandingDashboard;
