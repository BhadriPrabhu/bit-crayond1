

const bulkExportModalStyles = {
    dialogContent: {
      p: 4,
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      backgroundColor: '#FFE4DE',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      mb: 2,
    },
    icon: {
      color: '#F07A53',
    },
    buttonCancel: {
      color: '#FFA726',
      borderColor: '#FFA726',
      py: 1.5,
      '&:hover': {
        borderColor: '#FFA726',
      },
    },
    buttonExport: {
      bgcolor: '#FFA726',
      color: 'white',
      py: 1.5,
      '&:hover': {
        bgcolor: '#FF9800',
      },
    },
    buttonContainer: {
      mt: 3,
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      gap: 1,
    },
  };
  
  export default bulkExportModalStyles;
  