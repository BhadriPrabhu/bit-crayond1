import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import stylesTopbar from './stylesTopbar'; 

const TopBar = () => {
  return (
    <Box sx={stylesTopbar.topBarContainer}>
      <ArrowBackIosNewRoundedIcon sx={stylesTopbar.backIconStyle} />
      <Typography sx={{ fontWeight: "bold" }}>Join loyalty program</Typography>
      <Box sx={stylesTopbar.rightBoxStyle}>
        <NotificationsNoneOutlinedIcon sx={stylesTopbar.notificationIconStyle} />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={stylesTopbar.avatarStyle} />
      </Box>
    </Box>
  );
};

export default TopBar;
