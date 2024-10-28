import { AppBar, Toolbar, Typography, IconButton, Badge, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: '#FFFFFF', 
  boxShadow: 'none', 
  height: '64px', 
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between', 
  height: '100%',
}));

export const Title = styled(Typography)(() => ({
  fontFamily: 'sans-serif', 
  fontWeight: 600, 
  fontSize: '16.5px', 
  color: '#02111A', 
  marginTop:'-15px'
}));

export const NotificationButton = styled(IconButton)(() => ({
  color: '#000000', 
  marginTop:'-10px'
}));


export const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#DF3813', 
    color: '#FFFFFF', 
    top: '2px', 
    right: '3px', 
    minWidth: '18px', 
    height: '18px', 
    borderRadius: '50%', 
  },
}));

export const StyledAvatar = styled(Avatar)(() => ({
  marginTop: '-15px',
}));


export const RightSection = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '13px', 
}));
