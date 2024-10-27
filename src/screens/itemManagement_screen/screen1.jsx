import React from 'react';
import TopNavbar from '../../components/topnavbar/topnavbar';
import Sidebar from '../../components/sidenavbar/sidenavbar';
import { Box } from '@mui/material';
export default function Screen1(){
    return(
        <Box sx={appStyles}>
            <TopNavbar/>
            <Box sx={contentWrapperStyles}>
                <Sidebar/>
            </Box>
        </Box>
    )
}
const appStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '90vh',
    marginLeft:'90px'
  };
  
  const contentWrapperStyles = {
    display: 'flex',
    flex: 1,
    marginTop: '3.5rem',
  };