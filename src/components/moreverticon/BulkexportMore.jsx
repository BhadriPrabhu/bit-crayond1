
import React from 'react';
import { Dialog, DialogContent, Typography, Box, Button } from '@mui/material';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import bulkExportModalStyles from './bulkExportModalStyles';

function BulkExportModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent sx={bulkExportModalStyles.dialogContent}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={bulkExportModalStyles.iconContainer}>
            <CloudDownloadOutlinedIcon fontSize="large" sx={bulkExportModalStyles.icon} />
          </Box>
          <Typography variant="h6" gutterBottom>
            Bulk export items
          </Typography>
          <Typography color="textSecondary">
            154 items will be exported in .CSV format
          </Typography>
          <Box sx={bulkExportModalStyles.buttonContainer}>
            <Button
              variant="outlined"
              onClick={onClose}
              fullWidth
              sx={bulkExportModalStyles.buttonCancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={bulkExportModalStyles.buttonExport}
            >
              Export
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default BulkExportModal;
