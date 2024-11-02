const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1300,
    },
    modal: {
      width: '700px',
      bgcolor: 'white',
      borderRadius: '8px',
      p: 3,
      position: 'relative',
      height: '90vh',
      display: 'flex',
      flexDirection: 'column',
    },
    closeButton: {
      position: 'absolute',
      top: 8,
      right: 8,
    },
    title: {
      fontWeight: '600',
      marginTop: '-5px',
    },
    select: {
      '& .MuiSelect-select': {
        display: 'flex',
        alignItems: 'center',
      },
      borderBottom: '1px solid #D9DBDD',
    },
    menuItem: {
      width: '100%',
      justifyContent: 'space-between',
    },
    addNew: {
      color: 'blue',
      cursor: 'pointer',
      width: '100%',
    },
    activeStatus: {
      bgcolor: '#FFA048',
      color: 'white',
      fontWeight: '500',
      padding: '6px 12px',
      borderRadius: '5px',
      border: '1px solid transparent',
      display: 'inline-block',
      width: 'fit-content',
    },
    inactiveStatus: {
      color: 'black',
      fontWeight: '500',
      padding: '6px 12px',
      borderRadius: '5px',
      border: '1px solid #D9DBDD',
      display: 'inline-block',
      width: 'fit-content',
    },
    resetButton: {
      borderColor: '#FFA048',
      color: '#FFA048',
      '&:hover': {
        borderColor: '#FF8C1A',
        color: '#FF8C1A',
      },
    },
  };
export default styles;
