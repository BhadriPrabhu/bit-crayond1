
const stylesTopbar = {
  topBarContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "15px",
    backgroundColor: "white",
    zIndex: 10,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },

  backIconStyle: {
    backgroundColor: "rgb(240, 243, 246)",
    borderRadius: "50px",
    padding: "3px",
    border: "1px solid rgb(229, 232, 235)",
    color: "rgb(78, 88, 94)",
  },

  rightBoxStyle: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    right: "15px",
    gap: "20px",
  },

  notificationIconStyle: {
    height: "35px",
  },

  avatarStyle: {
    height: "32px",
    width: "32px",
    marginRight: "25px",
  },
};

export default stylesTopbar;
