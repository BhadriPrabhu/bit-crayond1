
const stylesCategoryColor = {
    container: {
      bgcolor: "white",
      margin: "30px 0px",
      padding: "20px",
      borderRadius: "8px",
    },
    title: {
      width: "100%",
      display: "flex",
      position: "relative",
      fontWeight: "bold",
    },
    textField: {
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
  };
  
  export default stylesCategoryColor;
  