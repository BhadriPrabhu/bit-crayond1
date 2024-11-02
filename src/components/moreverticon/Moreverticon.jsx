import React from 'react';
import { Box, Typography } from '@mui/material';
import BulkImportModal from './BulkimportModal';
import BulkExportModal from './BulkexportMore';
import styles from './styles_morevert';

function Moreverticons1({ onBulkImportClick, onBulkExportClick  }) {
  return (
    <Box 
      sx={styles.morevert}
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
