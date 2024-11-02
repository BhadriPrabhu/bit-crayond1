
import React, { useRef, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import UploadIcon from '@mui/icons-material/Upload';
import DeleteIcon from '@mui/icons-material/Delete';
import bulkImportModalStyles from './bulkImportModalStyles';

function BulkImportModal({ open, onClose }) {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
    setFilePreview(null);
    fileInputRef.current.value = null; 
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: bulkImportModalStyles.dialogPaper,
      }}
    >
      <DialogTitle sx={bulkImportModalStyles.dialogTitle}>
        Bulk import items
        <IconButton onClick={onClose} edge="end">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ paddingBottom: 4 }}>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Download our template and fill it out with your brand's data and upload the file here.
        </Typography>

        <Typography
          variant="body1"
          sx={bulkImportModalStyles.downloadTemplateButton}
          onClick={() => console.log("Download template clicked")}
        >
          <CloudDownloadIcon sx={{ marginRight: 0.5 }} />
          Download items template
        </Typography>

        <Box sx={bulkImportModalStyles.uploadBox}>
          {filePreview ? (
            <Box sx={bulkImportModalStyles.imagePreviewBox}>
              <img
                src={filePreview}
                alt="Uploaded file preview"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '10px',
                }}
              />
              <IconButton
                sx={bulkImportModalStyles.deleteIconButton}
                onClick={handleDeleteFile}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ) : (
            <>
              Drag and drop your file here
              <Box sx={{ fontSize: 12, color: '#999', marginTop: 1 }}>OR</Box>
              <Typography
                variant="body1"
                sx={bulkImportModalStyles.uploadButton}
                onClick={handleUploadClick}
              >
                <UploadIcon sx={{ marginRight: 0.5 }} />
                Upload
              </Typography>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default BulkImportModal;
