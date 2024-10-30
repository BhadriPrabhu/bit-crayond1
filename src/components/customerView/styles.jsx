import { margin } from "@mui/system";

const styles = {
  wholescreen: {
    display: "flex",
    flexDirection: "column",
    height: '100vh', // Ensure full viewport height
    width: '100vw', // Ensure full viewport width
    overflowY: 'auto', // Enable vertical scrolling
    overflowX: 'hidden', // Prevent horizontal scrolling
    position: 'relative', // Add position relative for absolute children if necessary
    '&::-webkit-scrollbar': {
      display: 'none', // For Chrome, Safari, and Opera
    },
    scrollbarWidth: 'none', // For Firefox
  },
  header: {
    position:'fixed',
    top: 0,
    width:'94%',
    flexGrow: 0,
    marginLeft: "96px",
    zIndex: 1000,
  },
  appbar: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.04)",
  },
  customername: {
    flexGrow: 1,
    color: "rgba(2, 17, 26, 1)",
    marginTop: "10px",
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
  twocontainers:{
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflowY: 'scroll',
    scrollbarWidth: 'none', // For Firefox
    '&::-webkit-scrollbar': {
      display: 'none', // For Chrome, Safari, and Opera
    },
    marginTop: '80px',
  },
  infobox: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "60%",
    //overflow: "hidden",
    borderRadius: "8px",
    overflowY: "auto",
    
  },
  infogrid: {
    flex:1,
    position:'absolute',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
   
   
  },
  basicrow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10px",
    height: "30px",
    width: "97.5%",
  },
  basictxt: {
    marginTop: "10px",
    marginLeft: "10px",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    marginRight: "10px",
  },
  addbtn: {
    border: "1px solid rgba(78, 88, 94, 1)",
    color: "rgba(78, 88, 94, 1)",
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "capitalize",
    gap: "7px",
    paddingTop: "20px",
    paddingBottom: "20px",
    borderRadius: "8px",
  },
  editbtn: {
    border: "1px solid rgba(78, 88, 94, 1)",
    color: "rgba(78, 88, 94, 1)",
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "capitalize",
    gap: "7px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "17px",
    paddingRight: "20px",
    borderRadius: "8px",
  },
  infomap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginLeft: "10px",
    marginBottom: "20px",
  },
  individualbox: {
    display: "flex",
    flexDirection: "row",
    width: "32%",
    alignItems: "center",
    padding: "8px",
    boxSizing: "border-box",
    marginTop: "20px",
  },
  iconbox: {
    width: "40px",
    height: "40px",
    borderRadius: "63px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(240, 243, 246, 1)",
  },
  nameanddata: {
    marginLeft: "10px",
  },
  cusname: {
    color: "rgba(2, 17, 26, 1)",
    fontSize: "16px",
    fontWeight: 500,
  },
  data: {
    color: "rgba(78, 88, 94, 1)",
    fontSize: "14px",
    fontWeight: 400,
  },
  icon7box: {
    width: "80px",
    height: "44px",
    borderRadius: "63px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(240, 243, 246, 1)",
    boxSizing: "border-box",
    padding: "15px",
  },
  headerofcreditsbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "50px",
    alignItems: "center",
  },
  adddialogbox: {
    "& .MuiDialog-paper": {
      width: "500px",
      height: "100%",
      borderRadius: "8px",
    },
  },
  cancelbtn: {
    marginRight: "10px",
    backgroundColor: "transparent", 
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&:active": {
      backgroundColor: "transparent", 
      boxShadow: "none",
    },
    "&:focus": {
      backgroundColor: "transparent",
      outline: "none",
      boxShadow: "none", 
    },
    "&.MuiButton-root": {
      boxShadow: "none",
    },
  },
  customerprofilecredits: {
    display: "flex",
    flexDirection: "row",
    
    height: "50px",
    padding: "10px",
    marginTop: "-12px",
    marginLeft: "-10px",
  },
  cusicon: {
    width: "48px",
    borderRadius: "63px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(240, 243, 246, 1)",
  },
  nameandcredits: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5px",
    marginLeft: "10px",
    gap: "8px",
  },
  lcredits: {
    color: "rgba(78, 88, 94, 1)",
    fontSize: "12px",
    fontWeight: 400,
  },
  creditscustomer: {
    color: "rgba(2, 17, 26, 1)",
    fontSize: "18px",
    fontWeight: 500,
  },
  inputfieldofamount: {
    m: 1,
    border: "2px solid rgba(217, 219, 221, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: "8px",
    "& .MuiFilledInput-root": {
      backgroundColor: "rgba(255, 255, 255, 1) !important",
      border: "none",
      borderRadius: "8px",
      padding: "1px 10px",
    },
    "& .MuiFilledInput-root:before": {
      display: "none",
    },
    "& .MuiFilledInput-root:after": {
      display: "none",
    },
    "& .MuiInputLabel-root": {
      color: "rgba(78, 88, 94, 1)", // Set your default color
      "&.Mui-focused": {
        color: "rgba(78, 88, 94, 1)",
        marginLeft: "10px",
        fontSize: "16px",
        fontWeight: 500,
      },
    },
  },
  amounttxt: {
    fontSize: "14px",
    fontWeight: 400,
  },
  sartxt: {
    fontSize: "0.55rem", // Change this to your desired size
    lineHeight: "1.5",
    padding: "0 4px",
    color: "rgba(106, 113, 117, 1)",
  },
  discountbox: {
    marginLeft: "10px",
    width: "25px",
    height: "25px",
    borderRadius: "63px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(240, 243, 246, 1)",
  },
  disandcredits: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  disandequi: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    marginTop: "5px",
  },
  equivalent:{
    color:'rgba(78, 88, 94, 1)',
    fontSize:'14px',
    fontWeight:400,
    marginTop:'3px'
  },
  creditsnum:{
    color:'rgba(2, 17, 26, 1)',
    fontSize:'16px',
    fontWeight:600,
    marginTop:'5px',
    
  },
  remarkbox:{
     m: 1,
     border:'2px solid rgba(217, 219, 221, 1)',
     borderRadius:'8px',
     height:'120px',
    "& .MuiFilledInput-root": {
    backgroundColor: "rgba(255, 255, 255, 1) !important",
    border: "none",
    borderRadius: "8px",
    padding: "1px 10px",
  },
  "& .MuiFilledInput-underline:before": {
    borderBottom: "none", 
  },
  "& .MuiFilledInput-underline:after": {
    borderBottom: "none",
  },
  "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
    borderBottom: "none", 
  },
  "& .MuiInputLabel-root": {
    color: "rgba(78, 88, 94, 1)", 
    "&.Mui-focused": {
      color: "rgba(78, 88, 94, 1)",
     
    },
  },
     },
     footerbox:{
      backgroundColor:'rgba(255, 255, 255, 1)',
      height:'60px',
      boxShadow: "0px 10px 10px 12px rgba(0, 0, 0, 0.08)",
    },
    addcreditsbtn:{
      color:'rgba(255, 255, 255, 1)',
      textTransform:'capitalize',
      width:'100%',
      paddingBottom:'10px',
      paddingTop:'10px'
    },
    addcreditsbox:{
      backgroundColor:'rgba(255, 160, 72, 1)',
      width:'100%',
      textAlign:'center',
      borderRadius:'8px',
      //paddingTop:'8px'
     
    },
    editpopup:{
      "& .MuiDialog-paper": {
      width: "500px",
      height: "100%",
      borderRadius: "8px",
      overflowX:'hidden',
      
    },
    },
    editheader: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
      height:'50px'
    },
    customer_name: {
      '& .MuiInput-underline:before': {
        borderBottom: 'none',
      },
      '& .MuiInput-underline:after': {
        borderBottom: 'none',
      },
      border: '1px solid rgba(217, 219, 221, 1)',
      borderRadius: '8px',
      height: '60px',
      "& .MuiInputLabel-root": {
        marginLeft: '15px',
        marginTop: '8px',
        color: "rgba(78, 88, 94, 1)", 
      },
      "& .MuiInputLabel-root.Mui-focused": {
    color: "rgba(78, 88, 94, 1)", // Prevent color change on focus
  },
     
      "& .MuiInputBase-input": {
        marginLeft: '15px',
        marginTop: '8px',
        fontSize: '14px',
        fontWeight: 500,
      },
      marginBottom:'20px',
    
    "&:hover .MuiInput-underline:before": {
      borderBottom: "none", // Remove bottom line on hover
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none", // Removes the hover effect line
    },
    "& .Mui-focused": {
  color: "rgba(78, 88, 94, 1)", 
},
    },
    
    mobnumbox:{
      "& .MuiInput-underline:before": {
      borderBottom: "none", // Remove bottom line before focus
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none", // Remove bottom line after focus
    },
    "&:hover .MuiInput-underline:before": {
      borderBottom: "none", // Remove bottom line on hover
    },
    marginLeft:'10px',
    "& .MuiInputLabel-root": {
        
        color: "rgba(78, 88, 94, 1)", 
      },
    },
    
    dropdownandtextfield:{
      border:'1px solid  rgba(217, 219, 221, 1)',
      borderRadius:'8px'
    },
    formcontrol:{ 
      display: "flex",
       alignItems: "center"
       },
    boxofphonenumber:{ 
      display: "flex",
       alignItems: "center",
        width: "100%",
      },
    dropdownmenu:{ 
      minWidth: "100px",
       marginRight: "8px",
       border: 'none', 
       '& .MuiOutlinedInput-notchedOutline':
        { border: 'none' } 
       },
      dividerphnum:{
         height: 38,
         marginLeft:'-15PX'
        },
        onboardbox:{
          display:'flex',
          flexDirection:'row',
        },
        checkbox:{
          color: 'rgba(255, 160, 72, 1)', 
          
          '&.Mui-checked': { color: 'rgba(255, 160, 72, 1)' },
          borderRadius: '5px', 
          '&.MuiCheckbox-root': {
              borderRadius: '2px', 
            },
        },

    transactiongrid: {
      flex:1,
      position: 'absolute',
      bottom: 0, 
      left: 0,
      right: 0, 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflowY: 'auto', 
      bottom:'-140px'
      
    
    },
    transactionhistorybox:{
    
      backgroundColor: "rgba(255, 255, 255, 1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
      width: "60%",
      height:"100%",
      borderRadius: "8px 8px 0 0",
     
     

      
    },
    transactionhistorytxt:{
         marginLeft:'20px',
         marginTop:'20px',
    },
    searchbox:{
      marginLeft:'20px',
      marginTop:'20px',
      width:'95%'
    },
    searchbar:{
      p: "2px 4px",
      display: "flex",
      alignItems: "center",
      width:'99%',
      border:'1px solid rgba(217, 219, 221, 1)',
      borderRadius:'8px',
      boxShadow:'none'
    },
    scrollablecontent: {
      height: "360px", 
      overflowY: "auto",
      overflowX: "hidden",
      width:'100%',
      paddingLeft:'10px',
    "&::-webkit-scrollbar": {
      display: "none", 
    },
    scrollbarWidth: "none",
      marginLeft:'2px',
      marginTop:'10px'
    },
    individualboxtransaction:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingBottom:'10px',
      borderBottom:'1px solid rgba(229, 232, 235, 1)'
    },
    leftside:{
      display:'flex',
      flexDirection:'column',
       marginTop:'10px',
      marginLeft:'10px'
    },
    rightside:{
       display:'flex',
      flexDirection:'column',
      marginRight:'20px'

    },
    time:{
      color:'rgba(78, 88, 94, 1)',
      fontSize:'14px',
      fontWeight:400, 
    },
    discounttxtandname:{
      display:'flex',
      flexDirection:'row',
      marginTop:'5px'
    },
    discounttxt:{
      color:'rgba(2, 17, 26, 1)',
      fontSize:'16px',
      fontWeight:600,
    },
    namecus:{
      color:'rgba(78, 88, 94, 1)',
      fontSize:'16px',
      fontWeight:400,
    },
    discountname:{
      border:'1px dashed rgba(255, 160, 72, 1)',
      backgroundColor:'rgba(255, 236, 218, 1)',
      color:'rgba(46, 21, 0, 1)',
      fontSize:'16px',
      fontWeight:400,
      width: "fit-content",
      borderRadius:'4px',
      marginTop:'5px',
      paddingLeft:'4px',
      paddingRight:'4px'
    },
    feedback:{
      color:'rgba(46, 21, 0, 1)',
      fontSize:'14px',
      fontWeight:400,
      marginTop:'5px'

    },
    redeemed:{
      width: "fit-content",
      backgroundColor: "rgba(255, 218, 211, 1)",
      color: "rgba(61, 6, 0, 1)",
      borderRadius: "24px",
      fontSize: "14px",
      fontWeight: 400,
      marginRight:'20px',
      paddingLeft:'7px',
      paddingRight:'7px',
      paddingTop:'4px',
      paddingBottom:'4px',
    },
    creditsandstatus:{
      display:'flex',
      flexDirection:'column',
    },
    creditsandsar:{
      display:'flex',
      flexDirection:'row',
      marginLeft:'auto',
      marginRight:'20px'
    },
    creditstxt:{
      fontSize:'16px',
      fontWeight:600,
    },
    sartxt:{
      color:'rgba(78, 88, 94, 1)',
      fontSize:'1px',
      fontWeight:500,
      marginTop:'15px'
    },
    notredeemed:{
      width: "fit-content",
      backgroundColor:'rgba(203, 242, 224, 1)',
      color:'rgba(0, 61, 32, 1)',
      borderRadius:'24px',
      paddingLeft:'7px',
      paddingRight:'7px',
      paddingTop:'1px',
      paddingBottom:'1px',
      marginLeft:'auto',
      marginRight:'20px'
      
    },
  
   pagenumbox:{
    width: "20px",
    border: "1px solid rgba(255, 160, 72, 1)",
    height: "20px",
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(255, 160, 72, 1)",
  },
  arrownav:{
    
      display: "flex",
      justifyContent: "space-between",
      ml: 2,
    
  },
  rowperpage:{ 
    display: 'flex', 
    alignItems: 'center', 
    border: '1px solid rgba(217, 219, 221, 1)', 
    borderRadius: '4px', 
    padding: '2px 5px',
    marginLeft:'-8px' 
  },
  show:{
     color: "rgba(78, 88, 94, 1)",
     marginLeft:'-25px'
  }
    
};

export default styles;
