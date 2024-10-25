

/*WEB*/


import { useState } from 'react';
import { Avatar, Button, Divider, Grid, Typography, Box, Autocomplete, TextField} from "@mui/material";
import Flag40 from './Materials/Flag40.png';
import Star40 from './Materials/Star40.png';
import Goal40 from './Materials/Goal40.png';
import Task40 from './Materials/Task40.png';
import Flowchart40 from './Materials/Flowchart40.png';
import User40 from './Materials/User40.png';
import Dot30 from './Materials/Dot30.png';
import Profilepic from './Materials/Profilepic.png';
import Time40 from './Materials/Time40.png';
import Chat20 from './Materials/Chat20.png';
import Edit40 from './Materials/Edit40.png';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import ErrorIcon from '@mui/icons-material/Error';
import CircularProgress from '@mui/material/CircularProgress';
import CartStyle from './styles';



export function Card1(){
    const [hover,setHover] = useState(false); 

    return(
      <Box sx={CartStyle.box1}>
          <Box sx={CartStyle.box}>
          
            <Box sx={CartStyle.el1}>
                <Box sx={CartStyle.el2}>
                    <Grid>

                    <Button sx={CartStyle.el3} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Label{hover && <Avatar src={Edit40} sx={CartStyle.el4}/>}</Button>
                    <Typography variant='label' sx={CartStyle.el5}>
                        <ErrorIcon sx={CartStyle.el6}/>
                        <Typography variant='p'sx={CartStyle.el7}>Risk</Typography>
                    </Typography>    

                    </Grid>
                </Box>
                <Box sx={CartStyle.el8}>
                    <Box sx={CartStyle.el9}>
                      <Grid>
                        <Typography variant='p' sx={CartStyle.el10}> {props.date} <Typography variant='span' sx={CartStyle.el11}>.</Typography> 8:00 PM</Typography>
                        <Avatar sx={CartStyle.el12}><Avatar src={Flag40} sx={CartStyle.el13}/></Avatar>
                        <Button variant="outlined" sx={CartStyle.el14}>Overdue</Button>
                        
                      </Grid>
                    </Box>
                    <Box sx={CartStyle.el15}>
                      <Grid>
                        <InfoOutlinedIcon sx={CartStyle.el16}/>
                        <Avatar src={Star40} sx={CartStyle.el17}/>
                        <MoreVertRoundedIcon sx={CartStyle.el18}/>
                      </Grid>
                    </Box>
                </Box>
                <Box>
                  <Typography variant='h1' sx={CartStyle.el19}>
                    Completion of productivity framework design on or before July 7th, 2021.
                  </Typography>
                </Box>
                <Box sx={CartStyle.el20} >
                  <Typography variant='label' sx={CartStyle.el21}>5157-Feature</Typography>
                  <Typography variant='label' sx={CartStyle.el21}>Goal</Typography>
                  <Typography variant='label' sx={CartStyle.el21}>#Colabo</Typography>
                </Box>
                <Box sx={CartStyle.el22}>
                    <Box sx={CartStyle.el23}>
                      <Typography variant='div' sx={CartStyle.el24}>
                            <Avatar src={Goal40} sx={CartStyle.el25}/>
                            <Avatar src={Task40} sx={CartStyle.el26}/>
                            <Avatar src={Flowchart40} sx={CartStyle.el27}/>
                            <CircularProgress variant="determinate" value={35} thickness={7} size={24} sx={CartStyle.el28} />
                            <CircularProgress variant="determinate" value={100} thickness={7} size={24} sx={CartStyle.el29} />
                            <Typography sx={CartStyle.el30}>35%</Typography>
                      </Typography>
                  
                      <Box sx={CartStyle.el31}>
                        <Avatar src={User40} sx={CartStyle.el32}/>
                        <Typography variant='h6' sx={CartStyle.el33}>4</Typography>
                        <Avatar src={Dot30} sx={CartStyle.el34}/>
                      </Box>
                      
                      <Box sx={CartStyle.el45}>
                          <Autocomplete sx={CartStyle.el35}
                          options={["hi", "hello"]} disableClearable
                          renderInput={(params) => <TextField {...params} 
                          sx={CartStyle.el36} label="Pending"/>} />
                      </Box>
                                          
                      <Divider sx={CartStyle.el37}/>
                      
                      <Box sx={CartStyle.el38}>
                        <Avatar src={Profilepic} sx={CartStyle.el39}/>
                        <Avatar src={Time40} sx={CartStyle.el40} />
                        <Typography variant='p' sx={CartStyle.el41} >Est. 2h 30 m</Typography>
                        <Typography variant='p' sx={CartStyle.el42}>Discuss</Typography>
                        <Avatar sx={CartStyle.el43}><Avatar  src={Chat20} sx={CartStyle.el44}/></Avatar>
                      </Box>
                    </Box>
              </Box>


            </Box>
          </Box>
      </Box>
    )
}

  