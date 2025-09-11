import React from "react";
import AppNavbar from "../components/AppNavbar";
import Grid from "@mui/material/Grid";
import CustomGrid from "../components/CustomGrid";
import Box from "@mui/material/Box";

const LandingDashboard = () => {
  return (
    <Box sx={{ height: "87%", width: "98%" }}>
      <Grid container spacing={2} sx={{ textAlign: "center", height: "30%" }}>
        <CustomGrid
          size={{ md: 4, lg: 4, xl: 4, sm: 12, xs: 12 }}
          cardTitle="Card 1"
        />
        <CustomGrid
          size={{ md: 4, lg: 4, xl: 4, sm: 12, xs: 12 }}
          cardTitle="Card 2"
        />
        <CustomGrid
          size={{ md: 4, lg: 4, xl: 4, sm: 12, xs: 12 }}
          cardTitle="Card 3"
        />
      </Grid>
      <Grid
        container
        spacing={2}
        mt={2}
        sx={{ textAlign: "center", height: "38%" }}
      >
        <CustomGrid
          size={{ sm: 12, xs: 12, md: 7, lg: 7, xl: 7 }}
          cardTitle="Card 4"
        />
        <CustomGrid
          size={{ sm: 12, xs: 12, md: 5, lg: 5, xl: 5 }}
          cardTitle="Card 5"
        />
      </Grid>
      <Grid
        container
        spacing={2}
        mt={2}
        sx={{ textAlign: "center", height: "33%" }}
      >
        <CustomGrid size={12} cardTitle="Card 4" />
      </Grid>
    </Box>
  );
};
export default LandingDashboard;
