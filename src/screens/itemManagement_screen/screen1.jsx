import React from 'react';
import TopNavbar from '../../components/topnavbar/topnavbar';
import Sidebar from '../../components/sidenavbar/sidenavbar';
import ItemTable from '../../components/maincontent/mainContent';
import { Box } from '@mui/material';

export default function Screen1() {
  return (
    <Box sx={appStyles}>
      <TopNavbar />
      <Box sx={contentWrapperStyles}>
        <Sidebar />
        <Box sx={tableContainerStyles}>
          <ItemTable />
        </Box>
      </Box>
    </Box>
  );
}

const appStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: '85vh',
  marginLeft:'75px'
};

const contentWrapperStyles = {
  display: 'flex',
  flex: 1,
  marginTop: '3.5rem',
};

const tableContainerStyles = {
  flex: 1,
  marginLeft: '-90px',
  overflow: 'auto',
  boxSizing: 'border-box',
  backgroundColor: '#f5f5f5',
  padding: '1rem',
  marginTop:'-70px',
  marginRight:'-10px'
};

