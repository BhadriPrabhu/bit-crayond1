import React from 'react';
import { Dialog, DialogContent, Typography, Box, Button } from '@mui/material';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';

function BulkExportModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent sx={{ p: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              backgroundColor: '#FFE4DE',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <CloudDownloadOutlinedIcon fontSize="large" sx={{ color: '#F07A53' }} />
          </Box>
          <Typography variant="h6" gutterBottom>
            Bulk export items
          </Typography>
          <Typography color="textSecondary">
            154 items will be exported in .CSV format
          </Typography>
          <Box mt={3} display="flex" justifyContent="space-between" width="100%" gap={1}>
            <Button
              variant="outlined"
              onClick={onClose}
              fullWidth
              sx={{
                color: '#FFA726',
                borderColor: '#FFA726',
                py: 1.5,
                '&:hover': { borderColor: '#FFA726' },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: '#FFA726',
                color: 'white',
                py: 1.5,
                '&:hover': { bgcolor: '#FF9800' },
              }}
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
