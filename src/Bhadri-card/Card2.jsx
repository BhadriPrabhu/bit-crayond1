import { Avatar, Box, Divider, Typography } from "@mui/material";
import Icon40 from './Materials/Icon40.png';
import Star40 from './Materials/Star40.png';
import Flag48 from './Materials/Flag48.png';
import Loading50 from './Materials/Loading50.png';
import User40 from './Materials/User40.png';
import Task40 from './Materials/Task40.png';
import Bookmark20 from './Materials/Bookmark20.png';
import Sortdown40 from './Materials/Sortdown40.png'

function Card2() {
  return (
   
    <Box sx={{bgcolor: "#EBECF1", fontFamily: 'Poppins, sans-serif', padding: "0px", margin: "0px", position: "absolute",top: "-5px", left: "-5px" }}>

        <Box sx={{bgcolor: "#FFFFFF", height: "260px", width: "360px", borderRadius: "12px", opacity: "1", border: "solid 1px #E4EAEE", boxShadow: "0px 3px 6px #00000014", position: "relative", top: "168px", left: "20px", display: "inline-block"}}>

            <Box sx={{display: "inline-block", margin: "0px", padding: "0px", position: "relative", top: "15px", left: "16px"}}>
                <Typography sx={{fontSize: "14px", lineHeight: "21px", color: "#8D8D8D", opacity: "1", textAlign: "left", display: "inline-block"}}>001-bug | #Colabo</Typography>
                <Avatar src={Icon40} sx={{display: "inline-block", opacity: "1", width: "15px", height: "16px", position: "relative", left: "155px"}} />
                <Avatar src={Star40} sx={{display: "inline-block", opacity: "1", width: "15px", height: "17px", marginLeft: "8px", position: "relative", left: "155px"}} />
            </Box>
            <Box sx={{marginLeft: "16px", position: "relative", top: "26px"}}>
                <Typography variant="p" sx={{height: "48px", width: "300px" , fontSize: "16px", lineHeight: "24px", fontWeight: "600", color: "#101010", opacity: "1"}}>Sed ut perspiciatis unde omnis istena error sit voluptatem accusantium</Typography>        
            </Box>
            <Box sx={{display: "inline-block", position: "relative", left: "16px", top: "30px"}}>
                <Avatar sx={{width: "14px", height: "14px", display: "inline-block", bgcolor: "#FFFFFF", position: "relative", top: "1px"}}><Avatar src={Flag48} sx={{height: "14px", width: "14px"}}/></Avatar>
                <Typography variant="p" sx={{width: "224px", height: "20px", fontSize: "14px", lineHeight: "21px", textAlign: "left", color: "#535353", fontWeight: "500", display: "inline-block", position: "relative", left: "7px"}}>Jun 29, 2021 • 8:00 PM | <Typography variant="span" sx={{color: "#E74C3C", fontWeight: "500"}}>Overdue</Typography></Typography>

            </Box>
            <Box sx={{position: "relative", top: "48px", display: "block", left: "16px"}}>
                <Avatar src={Loading50} sx={{display: "inline-block", width: "42px", height: "42px", opacity: "1"}}/>
                <Typography variant="p" sx={{display: "inline-block", fontSize: "10px", lineHeight: "16px", textAlign: "center", fontWeight: "500", color: "#091B29", opacity: "1", position: "relative", top: "-17px", left: "-31px"}}>35%</Typography>
                <Box sx={{border: "solid 0.5px #E4EAEE", display: "inline-block", borderRadius: "4px 0px 0px 4px", width: "40px", height: "34px", position: "relative", top: "-20px", left: "-13px"}}>
                    <Avatar src={User40} sx={{width: "14px", height: "17px", opacity: "1", display: "inline-block", position: "relative", top: "7px", left: "7.5px"}}/>
                    <Typography variant="p" sx={{width: "8px", height: "17px", fontSize: "12px", lineHeight: "20px", textAlign: "left", color: "#101010", opacity: "1", position: "relative", top: "3px", left: "12px",}}>4</Typography>
                </Box>
                <Box sx={{display: "inline-block", border: "solid 0.5px #E4EAEE", borderRadius: "0px 4px 4px 0px", width: "40px", height: "34px", position: "relative", top: "-20px", left: "-13px"}}>
                    <Avatar src={Task40} sx={{width: "15px", height: "17px", opacity: "1", display: "inline-block", position: "relative", top: "7px", left: "7.5px"}}/>
                    <Typography variant="p" sx={{width: "8px", height: "17px", fontSize: "12px", lineHeight: "20px", textAlign: "left", color: "#101010", opacity: "1", position: "relative", top: "3px", left: "12px"}}>2</Typography>
                </Box>
                <Box sx={{display: "inline-block", width: "84px", height: "35px", borderRadius: "4px", bgcolor: "#1089FF14", position: "relative", top: "-20px", left: "100px"}}>
                    <Avatar src={Bookmark20} sx={{width: "17px", height: "18px", opacity: "1", display: "inline-block", position: "relative", top: "8px", left: "12px"}}/>
                    <Typography variant="h6" sx={{color: "#1089FF", width: "44px", height: "17px", fontWeight: "500", fontSize: "12px", lineHeight: "20px", opacity: "1", display: "inline-block", position: "relative", top: "3px", left: "18px"}}>Colabo</Typography>
                </Box>

            </Box>
            <Divider sx={{borderTop: "1px", borderStyle: "dashed", borderColor: "#C6C6C699", position: "relative", top: "45px"}}/>

            <Box sx={{position: "relative", top: "56px", left: "16px"}}>
                <Typography variant="p" sx={{width: "152px", height: "17px", fontSize: "12px", lineHeight: "18px", fontWeight: "500", color: "#535353", opacity: "1"}}>Est. 2h30m | Act. ETA 4hrs</Typography>
                <Box sx={{display: "inline-block", border: "solid 1px #E4EAEE", opacity: "1", borderRadius: "4px", width: "96px", height: "34px", position: "relative", left: "78px"}}>
                    <Typography variant="h6" sx={{display: "inline-block", width: "50px", height: "17px", fontSize: "12px", lineHeight: "18px", wordSpacing: "0.02px", fontWeight: "500", color: "#101010", opacity: "1", textAlign: "left", position: "relative", left: "12px", top: "3px"}}>Pending</Typography>
                    <Avatar src={Sortdown40} sx={{display: "inline-block", width: "12px", height: "15px", color: "#101010", opacity: "1", position: "relative", top: "5px", left: "22px"}}/>
                </Box>
            </Box>

        </Box>


  </Box>

  )
}

export default Card2;
