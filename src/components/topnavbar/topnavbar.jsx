import React from 'react';
import { Badge, IconButton, Avatar } from '@mui/material';
import { StyledAppBar, StyledToolbar, Title, NotificationButton, StyledBadge, StyledAvatar, RightSection } from './topnavbar_styles';
import Notifications1 from '../../icons/notification';
import Profile from '../../../src/profile1.png';

const TopNavbar = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        
        <Title variant="h6">Item management</Title>

        
        <RightSection>
          
          <NotificationButton>
            <StyledBadge badgeContent={9} color="error">
              <Notifications1 />
            </StyledBadge>
          </NotificationButton>

          
          <StyledAvatar alt="Profile" src={Profile} />
        </RightSection>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default TopNavbar;
