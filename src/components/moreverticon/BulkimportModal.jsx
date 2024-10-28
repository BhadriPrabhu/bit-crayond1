import React, { useRef } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Button, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function BulkImportModal({ open, onClose }) {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: { borderRadius: '10px' },
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold' }}>
        Bulk import items
        <IconButton onClick={onClose} edge="end">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ paddingBottom: 4 }}>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Download our template and fill it out with your brand's data and upload the file here.
        </Typography>

        <Button
          variant="contained"
          startIcon={<CloudDownloadIcon />}
          sx={{
            backgroundColor: '#FFECDA',
            color: '#FFA048',
            marginBottom: 2,
            '&:hover': { backgroundColor: '#FFD8B5' },
          }}
        >
          Download items template
        </Button>

        <Box
          sx={{
            border: '2px dashed #ddd',
            borderRadius: '10px',
            padding: 6,
            textAlign: 'center',
            color: '#666',
            fontSize: 16,
            marginBottom: 2,
          }}
        >
          Drag and drop your file here
          <Box sx={{ fontSize: 14, color: '#999', marginTop: 1 }}>OR</Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FF9800',
              color: '#fff',
              marginTop: 2,
              '&:hover': { backgroundColor: '#FB8C00' },
            }}
            onClick={handleUploadClick}
          >
            Upload
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default BulkImportModal;
