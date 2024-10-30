import { Avatar, Badge, Box, Typography } from "@mui/material"
import { Customerstyle } from "./Customerstyle"
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

function Topbar() {
  return (
    <Box sx={Customerstyle.topEl1}>
      <Typography sx={Customerstyle.topEl2}>Customer management</Typography>
      <Box sx={Customerstyle.topEl8}></Box>
      <Box sx={Customerstyle.topEl3}>
        <Box sx={Customerstyle.topEl5}>
            <Badge badgeContent={9} color="warning" sx={Customerstyle.topEl7}>
                <NotificationsOutlinedIcon sx={Customerstyle.topEl4} />
            </Badge>
        </Box>
        <Avatar src="https://mui.com/static/images/avatar/1.jpg" sx={Customerstyle.topEl6}/>
      </Box>
    </Box>
  )
}

export default Topbar
