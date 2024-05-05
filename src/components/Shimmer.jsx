import React from "react";
import { Card } from "@mui/material";

function Shimmer() {
  return (
    <Card
      sx={{
        height: 400,
        width: 300,
        bgcolor: "lightgrey",
        borderRadius: 2,
        boxShadow: 4,
      }}
    ></Card>
  );
}

export default Shimmer;
