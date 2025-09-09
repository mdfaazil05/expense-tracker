import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CustomGrid = ({
  size,
  cardTitle,
  bgcolor = "#0D0D0D",
  color = "white",
  border = "1px solid white",
}) => {
  return (
    <Grid
      size={size}
      sx={{
        p: "10px",
        border: border,
        borderRadius: "10px",
        color: color,
        bgcolor: bgcolor,
      }}
    >
      <Typography>{cardTitle}</Typography>
    </Grid>
  );
};

export default CustomGrid;
