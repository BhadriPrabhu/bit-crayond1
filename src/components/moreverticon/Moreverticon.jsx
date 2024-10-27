import React from 'react';
import { Box, Typography } from '@mui/material';

function Moreverticons1() {
  return (
    <Box 
      sx={{
        width: '184px',
        height: '84px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        borderRadius: '8px',
        border: '1px solid #FFFFFF',
        paddingTop: '14px',
        paddingLeft: '15px',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'
      }}
    >
      <Typography>
        Bulk import items
      </Typography>
      <Typography>
        Bulk export items
      </Typography>
    </Box>
  );
}

export default Moreverticons1;
