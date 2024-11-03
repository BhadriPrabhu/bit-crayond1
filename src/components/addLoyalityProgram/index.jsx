import React, { useState } from 'react';
import TopBar from './TopBarLP';
import LeftSideGrid from './LeftSideGrid';
import RightSideGrid from './rightSideGrid';
import { Box, Grid } from '@mui/material';

const AddLoyalty = () => {
  return (
    <>
      <TopBar />
      <Box sx={{ backgroundColor: "rgb(240, 243, 246)", padding: "80px 20px 20px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ position: "fixed", top: "80px", left: "20px", width: "440px" }}>
            <LeftSideGrid />
          </Grid>
          <Grid item
            xs={8}
            sx={{
              marginLeft: "550px",
              overflowY: "auto",
              maxHeight: "calc(100vh - 100px)",
              "&::-webkit-scrollbar": {
                width: 0,
                height: 0,
              },
             }}>
            <RightSideGrid></RightSideGrid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddLoyalty;
