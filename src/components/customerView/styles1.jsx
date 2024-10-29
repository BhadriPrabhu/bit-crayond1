import { display } from "@mui/system";

const styles = {
  mainbox: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
  },
  appbarbox: {
    flexGrow: 0,
    width: "100%",
    height: "64px",
    marginLeft: "10px",
  },
  appbar: {
    marginLeft: "96px",
    display: "block",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.04)",
  },
  arrowiconbtn: {
    mr: 2,
    borderRadius: "63px",
    backgroundColor: "rgba(240, 243, 246, 1)",
    border: "1 px solid rgba(229, 232, 235, 1)",
    width: "40px",
    height: "40px",
    marginTop: "10px",
  },
  cusname: {
    flexGrow: 1,
    color: "rgba(2, 17, 26, 1)",
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: 600,
  },
  bellandboy: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    paddingRight: "90px",
    gap: "10px",
  },
  basicinfogrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10px",
    flexGrow: 1,
  },
  basicinfobox: {
    width: "913px",
    height: "350px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    mb: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "8px",
  },
  basictxt: {
    marginTop: "-15px",
    marginLeft: "20px",
    paddingBottom: "25px",
  },
  addedit: {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    marginTop: "-10px",
  },
  addbtn: {
    border: "1px solid rgba(78, 88, 94, 1)",
    gap: "8px",
    borderRadius: "8px",
    color: "rgba(78, 88, 94, 1)",
    marginTop: "-25px",
    textTransform: "capitalize",
    paddingLeft: "5px",
    paddingRight: "5px",
    height: "40px",
    marginRight:'10px'
  },
  editbtn: {
    border: "1px solid rgba(78, 88, 94, 1)",
    gap: "8px",
    borderRadius: "8px",
    color: "rgba(78, 88, 94, 1)",
    paddingLeft: "10px",
    paddingRight: "10px",
    marginTop: "-25px",
    marginRight: "20px",
    textTransform: "capitalize",
    height: "40px",
  },
  infobox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "30px",
  },
  infoindividualbox: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "10px",
  },
  infoicon: {
    width: "40px",
    height: "40px",
    borderRadius: "55px",
    backgroundColor: "rgba(240, 243, 246, 1)",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  infoname: {
    marginLeft: "10px",
    paddingRight: "50px",
    fontSize: "16px",
  },
  infodata: {
    marginLeft: "10px",
    color: "rgba(78, 88, 94, 1)",
    paddingRight: "50px",
    fontSize: "14px",
  },
  transactiongrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "-250px",
    flexGrow: 1,
    
  },
  transactionbox: {
    width: "913px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    maxHeight: "00px",
    paddingBottom: "40px",
    marginTop: "0px",
      borderRadius:'12px'
  
  },
  secondcontainer: {
    display: "flex",
    flexDirection: "column",
    height: "560px",
    backgroundColor: "rgba(255, 255, 255, 1)",
      borderRadius:'12px'
    
  },
  transactiontxt: {
    marginTop: "10px",
    marginLeft: "10px",
  },
  searchbar: {
    p: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "95%",
    marginLeft: "10px",
    marginTop: "10px",
  },
  inputbase:{
    ml: 1, flex: 1 
  },
  scrollablecontent:{
    maxHeight: "300px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none", // Hide scrollbar for WebKit browsers
    },
    scrollbarWidth: "none", // Hide scrollbar for Firefox
  },
  transindividualbox:{ 
    borderBottom: "1px solid #ddd", 
    padding: "10px",
    height:'90px',
},
  

  time: {
    color: "rgba(78, 88, 94, 1)",
    fontSize: "14px",
  },

  distxt: {
    color: "rgba(2, 17, 26, 1)",
    fontSize: "16px",
  },
  name: {
    color: "rgba(78, 88, 94, 1)",
    fontSize: "16px",
    marginLeft: "5px",
  },
  distxtandnamebox: {
    display: "flex",
  },
  disname: {
    border: "2px dashed rgba(255, 160, 72, 1)",
    fontSize: "14px",
    color: "rgba(46, 21, 0, 1)",
    marginTop:'10px'
  },
  disstatus: {
    borderRadius: "18px",
    color: "rgba(61, 6, 0, 1)",
    backgroundColor: "rgba(255, 218, 211, 1)",
    fontSize: "14px",
    display:'flex',
    flexDirection:'row',
    marginLeft:'750px',
    alignItems:'end',
    justifyContent:'end',
    marginTop:'-80px',
   
  },
  feedback:{
    fontSize:'12px'
  },
  credits:{ 
    height:'30px',
    marginLeft:'730px',
    width:'170px',
    marginTop:'-60px',
    fontSize:'14px',
    display:'flex',
    flexDirection:'row'
    ,fontWeight:600},
    SAR:{
        fontSize:'12px',
        color:'rgba(78, 88, 94, 1)',
        marginTop:'2px'
    },
    cusicon:{
        width:'40px',
        height:'40px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'55px',
        backgroundColor:'rgba(240, 243, 246, 1)'
    }
};
export default styles;
