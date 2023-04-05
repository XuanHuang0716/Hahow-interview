import React from 'react';

// material ui import
import Box from "@mui/material/Box";

//component import
import HeroCardList from "components/HeroListComponent";

export default function HeroProfile() {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <HeroCardList />
          
        </Box>
      );
}