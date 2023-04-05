import React, { useState } from "react";
// material ui import
import Box from "@mui/material/Box";

//component import
import HeroCardList from "components/HeroListComponent";
import { Typography } from "@mui/material";

export default function HeroList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeroCardList />
      <Typography fontSize={30} color="white">
        Choose your hero to add his abilities.
      </Typography>
    </Box>
  );
}
