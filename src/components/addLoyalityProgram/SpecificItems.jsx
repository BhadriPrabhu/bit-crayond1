// SpecificItems.jsx
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import stylesItem from './stylesitem'; 
import Delete from '../icon/delete';

const SpecificItems = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [items, setItems] = useState([
    { id: 1, name: "Coffee", size: "Small", image: "/src/components/addLoyalityProgram/images/images.jpeg" },
    { id: 2, name: "Boost", size: "Small", image: "/src/components/addLoyalityProgram/images/images.jpeg" },
    { id: 3, name: "Tea", size: "Small", image: "/src/components/addLoyalityProgram/images/images.jpeg" },
  ]);

  const [customerGets, setCustomerGets] = useState([
    { id: 4, name: "Coffee", size: "Small", image: "/src/components/addLoyalityProgram/images/images.jpeg" },
    { id: 5, name: "Boost", size: "Small", image: "/src/components/addLoyalityProgram/images/images.jpeg" },
    { id: 6, name: "Tea", size: "Small", image: "/src/components/addLoyalityProgram/images/images.jpeg" },
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCustomerGets = customerGets.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleDeleteCustomerGet = (id) => {
    setCustomerGets(customerGets.filter(item => item.id !== id));
  };

  return (
    <Box sx={stylesItem.containerStyle}>
      <TextField
        placeholder="Search by item name"
        variant="outlined"
        fullWidth
        onChange={handleSearchChange}
        sx={stylesItem.textFieldStyle}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {filteredItems.length > 0 ? (
        filteredItems.map(item => (
          <Box key={item.id} sx={stylesItem.itemContainerStyle}>
            <img alt={item.name} src={item.image} style={stylesItem.imgStyle} />
            <Box>
              <Typography sx={stylesItem.itemTextStyle}>{item.name}</Typography>
              <Typography sx={stylesItem.itemSizeStyle}>{item.size}</Typography>
            </Box>
            <Delete 
              style={stylesItem.deleteIconStyle} 
              onClick={() => handleDelete(item.id)}
            />
          </Box>
        ))
      ) : (
        <Typography sx={stylesItem.notFoundTextStyle}>
          Not found
        </Typography>
      )}

      <Box sx={{ paddingTop: "20px" }}>
        <Typography sx={{ padding: "20px 0px" }}>Customer gets</Typography>

        <TextField
          placeholder="Search by item name"
          variant="outlined"
          fullWidth
          onChange={handleSearchChange}
          sx={stylesItem.textFieldStyle}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {filteredCustomerGets.length > 0 ? (
          filteredCustomerGets.map(item => (
          
            <Box key={item.id} sx={stylesItem.itemContainerStyle}>
              <img alt={item.name} src={item.image} style={stylesItem.imgStyle} />
              <Box>
                <Typography sx={stylesItem.itemTextStyle}>{item.name}</Typography>
                <Typography sx={stylesItem.itemSizeStyle}>{item.size}</Typography>
              </Box>
              <Delete 
                style={stylesItem.deleteIconStyle} 
                onClick={() => handleDeleteCustomerGet(item.id)}
              />
            </Box>
            
          ))
        ) : (
          <Typography sx={stylesItem.notFoundTextStyle}>
            Not found
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SpecificItems;
