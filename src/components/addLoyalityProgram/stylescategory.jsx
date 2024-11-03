
const stylesCategory = {
  containerStyle: {
    padding: "10px 0px",
  },
  
  searchInputStyle: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgb(221, 222, 224)",
      },
      "&:hover fieldset": {
        borderColor: "rgb(221, 222, 224)",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid rgb(221, 222, 224)",
      },
    },
  },
  
  categoryItemStyle: {
    display: "flex",
    alignItems: "center",
    paddingTop: "20px",
    gap: "20px",
    position: "relative",
    borderBottom: "2px solid rgb(229, 232, 235)",
    paddingBottom: "20px",
  },
  
  categoryImageStyle: {
    height: "48px",
    width: "48px",
    border: "1px solid rgb(229, 232, 235)",
    borderRadius: "8px",
  },
  
  categoryNameStyle: {
    fontWeight: "bold",
  },
  
  deleteIconStyle: {
    position: "absolute",
    right: "10px",
    cursor: "pointer",
  },
  
  notFoundTextStyle: {
    padding: "20px",
    textAlign: "center",
    color: "rgb(150, 150, 150)",
  },
};

export default stylesCategory;
