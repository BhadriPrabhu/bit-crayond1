const stylesItemsColor = {
    containerStyle: {
      bgcolor: "white",
      margin: "30px 0px",
      padding: "20px",
      borderRadius: "8px",
    },
    titleStyle: {
      width: "100%",
      display: "flex",
      position: "relative",
      fontWeight: "bold",
    },
    switchStyle: {
      position: "absolute",
      right: "3px",
      '& .MuiSwitch-switchBase.Mui-checked': {
        color: 'rgb(255, 160, 72)',
      },
      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        bgcolor: 'rgb(255, 160, 72)',
      },
    },
    textFieldStyle: {
      "& .MuiFilledInput-root": {
        backgroundColor: "transparent",
      },
      "& .MuiFilledInput-underline:before": {
        borderBottom: "none",
      },
      "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
        borderBottom: "none",
      },
      "& .MuiFilledInput-underline:after": {
        borderBottom: "none",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#4E585E",
      },
      "& .MuiFilledInput-root": {
        backgroundColor: "transparent",
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: "white",
        },
      },
      border: '1px solid',
      borderColor: '#D9DBDD',
      borderRadius: 1.5,
      color: '#000',
      width: "100%",
      marginTop: "20px",
    },
    sectionStyle: {
      padding: "15px 0px",
      borderBottom: "1px solid rgb(229, 232, 235)",
    },
    sectionTitleStyle: {
      fontWeight: "bold",
    },
    sectionContentStyle: {
      display: "flex",
      gap: "10px",
      paddingTop: "10px",
    },
    iconStyle: {
      padding: "10px",
      border: "2px dashed rgb(229, 232, 235)",
      bgcolor: "rgb(240, 243, 246)",
      borderRadius: "8px",
    },
    itemNameStyle: {
      fontWeight: "bold",
    },
    itemSizeStyle: {
      fontSize: "small",
      color: "rgb(106, 113, 117)",
    },
  };
  
  export default stylesItemsColor;
  