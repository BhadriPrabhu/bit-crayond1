import { Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import stylesLeftGrid from './stylesLeftGrid'; 

const LeftSideGrid = () => {
  return (
    <Box sx={stylesLeftGrid.containerStyle}>
      <Box sx={stylesLeftGrid.headerBoxStyle}>
        <Typography sx={stylesLeftGrid.headerTextStyle}>15% off on selected category of items</Typography>
        <Box sx={stylesLeftGrid.editButtonStyle}>
          <EditIcon sx={stylesLeftGrid.editIconStyle} />
          Edit
        </Box>
      </Box>
      <Box sx={stylesLeftGrid.contentBoxStyle}>
        <Box>
          <Typography sx={stylesLeftGrid.sectionTitleStyle}>Program description</Typography>
          <Typography sx={stylesLeftGrid.sectionTextStyle}>Flat 15% off on selected items</Typography>
        </Box>
        <Box sx={stylesLeftGrid.rowStyle}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={stylesLeftGrid.sectionTitleStyle}>Program type</Typography>
            <Typography sx={stylesLeftGrid.sectionTextStyle}>Discount</Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={stylesLeftGrid.sectionTitleStyle}>Offer duration</Typography>
            <Typography sx={stylesLeftGrid.sectionTextStyle}>30 days</Typography>
          </Box>
        </Box>
        <Box sx={stylesLeftGrid.rowStyle}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={stylesLeftGrid.sectionTitleStyle}>Discount applicable for</Typography>
            <Typography sx={stylesLeftGrid.sectionTextStyle}>Item</Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={stylesLeftGrid.sectionTitleStyle}>Discount value</Typography>
            <Typography sx={stylesLeftGrid.sectionTextStyle}>15%</Typography>
          </Box>
        </Box>
        <Box sx={stylesLeftGrid.lastRowStyle}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={stylesLeftGrid.sectionTitleStyle}>Applicable to</Typography>
            <Typography sx={stylesLeftGrid.sectionTextStyle}>NA</Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={stylesLeftGrid.sectionTitleStyle}>Discount criteria</Typography>
            <Typography sx={stylesLeftGrid.sectionTextStyle}>1 (no. of items)</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSideGrid;
