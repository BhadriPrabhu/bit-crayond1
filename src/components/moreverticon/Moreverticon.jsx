import React from 'react';
import { Box, Typography } from '@mui/material';
import BulkImportModal from './BulkimportModal';
import BulkExportModal from './BulkexportMore';

function Moreverticons1({ onBulkImportClick, onBulkExportClick  }) {
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
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      }}
    >
      <Typography onClick={onBulkImportClick} sx={{ cursor: 'pointer' }}>
        Bulk import items
      </Typography>
      <Typography onClick={onBulkExportClick} sx={{ cursor: 'pointer' }}>
        Bulk export items
      </Typography>
    </Box>
  );
}

export default Moreverticons1;
