
const stylesItem = {
  containerStyle: {
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    overflow: "hidden",
  },
  textFieldStyle: {
    marginBottom: "20px",
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#4E585E",
      backgroundColor:"white"
  },
  "& .MuiFilledInput-root": {
      backgroundColor: "transparent",
      borderRadius: "8px",
      "&:hover": {
          backgroundColor: "white",
          
      }
  },
  },
  itemContainerStyle: {
    display: "flex",
    alignItems: "center",
    position:"relative",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  imgStyle: {
    width: "50px",
    height: "50px",
    borderRadius: "7px",
    marginRight: "10px",
    border: "1px solid rgb(229, 232, 235)",
  },
  itemTextStyle: {
    fontWeight: "bold",
    color: "rgb(78, 88, 94)",
  },
  itemSizeStyle: {
    color: "rgb(106, 113, 117)",
    fontSize: "small",
  },
  deleteIconStyle: {
    cursor: "pointer",
    color: "red",
    '&:hover': {
      color: "darkred",
    },
    position:"absolute",
    right:"5px"
  },
  notFoundTextStyle: {
    textAlign: "center",
    color: "gray",
    marginTop: "10px",
  },
};

export default stylesItem;
