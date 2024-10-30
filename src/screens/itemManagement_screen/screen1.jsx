import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from '../../redux/slices/itemSlice';
import TopNavbar from '../../components/topnavbar/topnavbar';
import Sidebar from '../../components/sidenavbar/sidenavbar';
import ItemTable from '../../components/maincontent/mainContent';
import { Box } from '@mui/material';

const Screen1 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchedData = Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      itemCode: `00${index + 1}`,
      itemName: ['Levis Shirts', 'Coffee Cup', 'Tea Cup', 'Juice'][index % 4],
      itemSize: index % 4 === 1 ? 'Large' : '',
      category: index % 2 === 0 ? 'Shirts' : 'Drinks',
      status: index % 5 === 0 ? 'Inactive' : 'Active'
    }));
    
    dispatch(setItems(fetchedData));
  }, [dispatch]);

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
};

const appStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: '85vh',
  marginLeft: '75px'
};

const contentWrapperStyles = {
  display: 'flex',
  flex: 1,
  marginTop: '3.5rem',
};

const tableContainerStyles = {
  flex: 1,
  overflow: 'auto',
  boxSizing: 'border-box',
  backgroundColor: '#f5f5f5',
  marginTop:'-60px',
  marginLeft:'-80px',
  padding:'10px'
};

export default Screen1;
