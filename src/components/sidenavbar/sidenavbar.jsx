// Sidebar.jsx
import React from 'react'; 
import { List, ListItemIcon, ListItemText } from '@mui/material';
import Dashboard from '../../icons/dashboard';
import Cashier from '../../icons/cashier';
import { Loyalty } from '@mui/icons-material';
import Settings1 from '../../icons/settings';
import Shops from '../../icons/shop';
import Outline from '../../icons/outline';
import Group from '../../icons/group';
import { SidebarContainer, DrawerStyled, IconWrapper, ListItemStyled, ListStyled } from './sidenavbar_styles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <DrawerStyled variant="permanent" anchor="left">
        <IconWrapper>
          <Group sx={{ color: '#6A7175' }} />
        </IconWrapper>
        <ListStyled>
          <ListItemStyled button>
            <ListItemIcon sx={{ color: '#6A7175', justifyContent: 'center' }}>
              <Dashboard />
            </ListItemIcon>
            <ListItemText 
              primary="Dashboard" 
              primaryTypographyProps={{ 
                fontSize: '12px',  
                textAlign: 'center',
              }} 
            />
          </ListItemStyled>
          <ListItemStyled button>
            <ListItemIcon sx={{ color: '#6A7175', justifyContent: 'center' }}>
              <Cashier />
            </ListItemIcon>
            <ListItemText 
              primary="Redeem" 
              primaryTypographyProps={{ 
                fontSize: '12px', 
                textAlign: 'center',
              }} 
            />
          </ListItemStyled>
          <ListItemStyled button>
            <ListItemIcon sx={{ color: '#6A7175', justifyContent: 'center' }}>
              <Loyalty />
            </ListItemIcon>
            <ListItemText 
              primary="Programs" 
              primaryTypographyProps={{ 
                fontSize: '12px', 
                textAlign: 'center',
              }} 
            />
          </ListItemStyled>
          <ListItemStyled button>
            <ListItemIcon sx={{ color: '#6A7175', justifyContent: 'center' }}>
              <Outline />
            </ListItemIcon>
            <ListItemText 
              primary="Customers" 
              primaryTypographyProps={{ 
                fontSize: '12px', 
                textAlign: 'center',
              }} 
            />
          </ListItemStyled>
          <ListItemStyled button>
            <ListItemIcon sx={{ color: '#6A7175', justifyContent: 'center' }}>
              <Shops />
            </ListItemIcon>
            <ListItemText 
              primary="Items" 
              primaryTypographyProps={{ 
                fontSize: '12px', 
                textAlign: 'center',
              }} 
            />
          </ListItemStyled>
          <ListItemStyled button>
            <ListItemIcon sx={{ color: '#6A7175', justifyContent: 'center' }}>
              <Settings1 />
            </ListItemIcon>
            <ListItemText 
              primary="Settings" 
              primaryTypographyProps={{ 
                fontSize: '12px', 
                textAlign: 'center',
              }} 
            />
          </ListItemStyled>
        </ListStyled>
      </DrawerStyled>
    </SidebarContainer>
  );
};

export default Sidebar;
