

/*WEB*/


import { useState } from 'react';
import { Avatar, Button, Divider, Grid, Typography, Box} from "@mui/material";
import Alert10 from './Materials/Alert10.png'
import Flag40 from './Materials/Flag40.png';
import Icon40 from './Materials/Icon40.png';
import Star40 from './Materials/Star40.png';
import More40 from './Materials/More40.png';
import Goal40 from './Materials/Goal40.png';
import Task40 from './Materials/Task40.png';
import Flowchart40 from './Materials/Flowchart40.png';
import Loading50 from './Materials/Loading50.png';
import User40 from './Materials/User40.png';
import Dot30 from './Materials/Dot30.png';
import Sortdown40 from './Materials/Sortdown40.png';
import Profilepic from './Materials/Profilepic.png';
import Time40 from './Materials/Time40.png';
import Chat20 from './Materials/Chat20.png';
import Edit40 from './Materials/Edit40.png';




function Card1(){
    const [hover,setHover] = useState(false);

    return(
      <Box sx={{position: "relative", top: "40px", left: "150px"}}>
       
        <Box sx={{ height: "225px", bgcolor: "#FFF", width: "303px", position: "relative", backgroundOrigin: "padding-box", boxShadow: "0px 3px 6px #0000000A", border: "1px solid #E4EAEE", borderRadius: "12px", opacity: "1",}}>
            <Box sx={{marginLeft: "12px"}}>
                <Grid>

                <Button sx={{ color: "#FFF", bgcolor: "#27AE61", fontSize: "10px", borderRadius: "4px", height: "15px", minWidth: "43px", maxWidth: "57px", position: "relative", top: "5.5px", textTransform: "capitalize"}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Label{hover && <Avatar src={Edit40} sx={{width: "9px", height: "9px", backgroundOrigin: "padding-box", opacity: "1", position: "relative", left: "3px"}}/>}</Button>
                <Typography variant='label' sx={{fontSize: "10px", display: "inline-block", borderRadius: "4px", height: "15px",width: "40px", bgcolor: "#E74C3C", position: "relative", top: "4px", color: "white", marginLeft: "6px"}}>
                    <Avatar sx={{height: "9px", width: "9px", display: "inline-block", position: "relative", top: "1.5px", left: "4px"}} ><Avatar src={Alert10} sx={{width: "9px", height: "9px"}} /></Avatar>
                    <Typography variant='p'sx={{position: "relative", top: "0.5px", left: "7px"}}>Risk</Typography>
                </Typography>    

                </Grid>
            </Box>
            <Box sx={{marginLeft: "12px", position: "relative", top: "4px"}}>
                <Box sx={{display: "inline-block", fontSize: "10px", font: "Poppins"}}>
                  <Grid>
                    <Typography variant='p' sx={{display: "inline-block",height: "15px", width: "108px", color: "#535353", letterSpacing: "0px", opacity: "1", lineHeight: "16px", fontWeight: "medium", fontStyle: "normal", fontVariant: "normal", marginRight: "3px"}}> Jun 29, 2021 <Typography variant='span' sx={{position: "relative", top: "-3px",fontWeight: "bolder"}}>.</Typography> 8:00 PM</Typography>
                    <Avatar sx={{display: "inline-block", height: "20px", width: "20px", position: "relative", top: "6px", backgroundOrigin: "padding-box", marginRight: "8px", bgcolor: "#F7CBC7"}}><Avatar src={Flag40} sx={{width: "11px", height: "11px", position: "relative", top: "5px", left: "5px",bgcolor: "#F9D7D4" }}/></Avatar>
                    <Button variant="outlined" sx={{borderRadius: "4px", textTransform: "capitalize", border: "solid 1px #E74C3C", height: "23px", width: "56px", marginBottom: "3px",bgcolor: "#E74C3C14", color: "#E74C3C", fontWeight: "600", fontStyle: "normal", fontVariant: "normal", fontSize: "10px"}}>Overdue</Button>
                    
                  </Grid>
                </Box>
                <Box sx={{marginLeft: "30px", display: "inline-block", position: "relative", top: "-28px", left: "192px"}}>
                  <Grid>
                    <Avatar src={Icon40} sx={{display: "inline-block", height: "17px", width: "14px", backgroundOrigin: "padding-box", opacity: "1", padding: "5px", position: "relative", left: "4px"}}/>
                    <Avatar src={Star40} sx={{display: "inline-block", height: "17px", width: "14px", backgroundOrigin: "padding-box", opacity: "1", padding: "5px", position: "relative", left: "2px"}}/>
                    <Avatar src={More40} sx={{display: "inline-block", height: "17px", width: "8px", backgroundOrigin: "padding-box", opacity: "1", padding: "5px"}} />
                  </Grid>
                </Box>
            </Box>
            <Box>
              <Typography variant='h1' sx={{fontSize: "12px", lineHeight: "20px", color: "#101010", width: "250px", height: "37px", textAlign: "left", letterSpacing: "0px", opacity:"1", fontWeight: "medium", fontVariant: "normal", fontStyle: "normal", marginLeft: "12px", position: "relative", top: "-20px"}}>
                Completion of productivity framework design on or before July 7th, 2021.
              </Typography>
            </Box>
            <Box sx={{fontSize: "10px",lineHeight: "16px", width: "199px",height: "23px", marginLeft: "10px", position: "relative", top: "-2px"}} >
              <Typography variant='label' sx={{color: "#535353", bgcolor: "#C6C6C63D", margin: "2px", borderRadius: "4px",padding: "6px 9px"}}>5157-Feature</Typography>
              <Typography variant='label' sx={{color: "#535353", bgcolor: "#C6C6C63D", margin: "2px", borderRadius: "4px",padding: "6px 9px"}}>Goal</Typography>
              <Typography variant='label' sx={{color: "#535353", bgcolor: "#C6C6C63D", margin: "2px", borderRadius: "4px",padding: "6px 9px"}}>#Colabo</Typography>
            </Box>
            <Box sx={{display: "inline-block"}}>
                <Box sx={{display: "inline-block", opacity: "1", height: "20px",}}>
                  <Typography variant='div' sx={{display: "inline-block", position: "relative", top: "-26px"}}>
                        <Avatar src={Goal40} sx={{display: "inline-block", height: "17px", width: "15px", backgroundOrigin: "padding-box", opacity: "1", marginLeft: "12px"  }}/>
                        <Avatar src={Task40} sx={{display: "inline-block", height: "17px", width: "15px", backgroundOrigin: "padding-box", opacity: "1", marginLeft: "6px"}}/>
                        <Avatar src={Flowchart40} sx={{display: "inline-block", height: "18px", width: "18px", backgroundOrigin: "padding-box", opacity: "1", marginLeft: "6px"}}/>
                        <Avatar src={Loading50} sx={{display: "inline-block", height: "20px", width: "20px", bgcolor: "#E4EAEE", marginLeft: "5px", position: "relative", top: "2px"}}/>
                        <Typography variant='p' sx={{display: "inline-block", color: "#8D8D8D", fontSize: "10px", lineHeight: "16px", letterSpacing: "0px", fontStyle: "normal", fontVariant: "normal", fontWeight: "medium", height: "15px", width: "20px", position: "relative", top:"-5px", left: "5px", marginRight: "10px"}}>35%</Typography>
                  </Typography>
              
                  <Box sx={{width: "34px", height: "23px", backgroundOrigin: "padding-box" , opacity: "1", border: "1px solid #E4EAEE", borderRadius: "6px", display: "inline-block", margin: "10px", position: "relative", left: "39px", top: "-4px"}}>
                    <Avatar sx={{display: "inline-block", height: "12px", width: "12px", opacity: "1", backgroundOrigin: "padding-box", marginLeft: "3px", position: "relative", left: "2px"}}><Avatar src={User40} sx={{width: "12px", height: "12px"}}/></Avatar>
                    <Typography variant='h6' sx={{display: "inline-block",width: "6px", height: "15px", textAlign: "left", fontSize: "11px", lineHeight: "20px",color: "#101010", opacity: "1",letterSpacing: "0px", fontWeight: "medium", fontStyle: "normal", fontVariant: "normal", position: "relative", top: "-3px", left: "6px"}}>4</Typography>
                    <Avatar src={Dot30} sx={{display: "inline-block", width: "11px", height: "14px", backgroundOrigin: "padding-box", border: "2px solid #FFFFFF", opacity: "1", position: "relative", top: "-35px", left: "25px"}}/>
                  </Box>
                  <Box sx={{display: "inline-block", border: "1px solid #E4EAEE", borderRadius: "4px", opacity: "1", width: "72px", height: "23px", position: "relative", top: "-28.5px", left: "35px"}}>
                    <Typography variant='p' sx={{display: "inline-block", width: "41px", height: "15px", textAlign: "left", fontSize: "10px", lineHeight: "16px", opacity: "1", letterSpacing: "0px", color: "#101010", fontWeight: "medium", fontStyle: "normal", fontVariant: "normal", paddingLeft: "7px", position: "relative", top: "-3px"}}>Pending</Typography>
                    <Avatar src={Sortdown40} sx={{display: "inline-block", width: "9px", height: "15px", backgroundOrigin: "padding-box", opacity: "1", marginLeft: "5px", position: "relative", top: "-1px"}}/>
                  </Box>
                  <Divider sx={{borderTop: "1px", borderStyle: "dashed", color: "#C6C6C699", width: "302px", opacity: "1", position: "relative", top: "-18px" }}/>
                  
                  <Box sx={{display: "inline-block", position: "relative", top: "9px"}}>
                    <Avatar src={Profilepic} sx={{width: "55px", height: "21px", opacity: "1", overflow:"visible",backgroundOrigin: "padding-box", position: "relative", top: "-20px", left: "8px", display: "inline-block"}}/>
                    <Avatar src={Time40} sx={{width: "14px", height: "16px", backgroundOrigin: "padding-box", opacity: "1", display: "inline-block", position: "relative", top: "-24px", left: "14px"}} />
                    <Typography variant='p' sx={{width: "60px", height: "15px", textAlign: "left", fontSize: "10px", lineHeight: "16px", color: "#535353", opacity: "1", fontStyle: "normal", fontVariant: "normal", fontWeight: "medium", display: "inline-block", position: "relative", top: "-27px", paddingLeft: "2px", left: "14px"}}>Est. 2h 30 m</Typography>
                    <Typography variant='p' sx={{width: "38px", height: "15px", textAlign: "left", letterSpacing: "0px", opacity: "1", color: "#535353", fontSize: "10px", lineHeight: "16px", fontStyle: "normal", fontVariant: "normal", fontWeight: "medium", display: "inline-block", position: "relative", top: "-29px", left: "90px"}}>Discuss</Typography>
                    <Avatar sx={{width: "24px", height: "24px", border: "1px dashed #00B7A8", backgroundOrigin: "padding-box", opacity: "1",bgcolor: "#FFFFFF", position: "relative", top: "-50.5px", left: "267px" }}><Avatar  src={Chat20} sx={{height: "13px", width: "13px", bgcolor: "#FFFFFF"}}/></Avatar>
                  </Box>
                </Box>
          </Box>


        </Box>
      </Box>
    )


}
export default Card1;