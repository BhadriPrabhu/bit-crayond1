

const addNewItemPopupStyles = {
    radioButton: {
      color: '#D9DBDD',
      '&.Mui-checked': { color: '#FFA048' },
      '&:hover': { color: '#FFA048' },
    },
    radioLabel: {
      color: 'black',
    },
    variantBox: {
      maxHeight: '30vh',
      overflowY: 'auto',
      marginTop: 2,
      paddingRight: 2,
      '&::-webkit-scrollbar': { display: 'none' },
    },
    deleteIconButton: {
      color: 'grey',
    },
    addVariantButton: {
      marginTop: 2,
      color: '#FFA048',
      textTransform: 'none',
    },
    addItemButton: {
      backgroundColor: '#FFA048',
      '&:hover': {
        backgroundColor: '#FF8B26',
      },
      fullWidth: true,
    },
  };
  
  export default addNewItemPopupStyles;
  