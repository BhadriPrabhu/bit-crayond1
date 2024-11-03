
const stylesRightGrid = {
    container:{ backgroundColor: "white", borderRadius: "8px", overflow: "hidden" },
    innercontainer:{ padding: "20px", display: "flex", flexDirection: "column", gap: "15px" },
    boxprovider:{ display: "flex", gap: "20px", width: "100%", marginTop: "20px" },
    imgupload:{
        display: "flex",
        width: '425px',
        height: '200px',
        flexDirection: "column",
        gap: "10px",
        border: "2.5px dashed rgb(229, 232, 235)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        padding: "15px",
        marginTop: "15px"
    },
    uploadbotton:{
        bgcolor: "rgb(255, 236, 218)",
        color: "rgb(255, 160, 72)",
        boxShadow: "none",
        '&:hover': {
            boxShadow: "none",
        },
        '&:active': {
            border: "none",
        },
    },
    elseupload:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        border: "1px solid rgb(229, 232, 235)",
        borderRadius: "8px",
        backgroundColor: "rgb(240, 243, 246)",
        maxWidth: "425px",
        height: 'auto',
    },
    textfieldstyle:{
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
            backgroundColor:"white"
        },
        "& .MuiFilledInput-root.Mui-focused": {
            backgroundColor:"white",
        },
        "& .MuiFilledInput-root": {
            backgroundColor: "transparent",
            borderRadius: "8px",
            "&:hover": {
                backgroundColor: "white",
            }
        },
        border: '1px solid',
        borderColor: '#D9DBDD',
        borderRadius: 1.5,
        color: '#000'
    },
  };
  
  export default stylesRightGrid;
  