import { styled } from '@mui/material/styles';
import { Drawer, ListItem } from '@mui/material';

export const drawerWidth = '90px';

export const SidebarContainer = styled('div')(() => ({
  width: drawerWidth,
  flexShrink: 0,
}));

export const DrawerStyled = styled(Drawer)(() => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: '#002116',
    paddingTop: '20px',
  },
}));

export const IconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

export const ListItemStyled = styled(ListItem)(() => ({
  color: '#6A7175',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  padding: '16px 0',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#30AF89',
    color: '#FFFFFF',  
    '& .MuiListItemIcon-root svg': {
      fill: '#FFFFFF', 
    },
    '& .MuiListItemText-root': {
      color: '#FFFFFF', 
    },
  },
}));

export const ListStyled = styled('div')(() => ({
  gap: '32px',
}));
