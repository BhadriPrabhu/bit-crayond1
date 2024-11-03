import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import stylesCategory from './stylesCategory';
import Delete from '../icon/delete';

export const SpecificCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([
    { id: 1, name: "Levis Jeans", image: "/src/components/addLoyalityProgram/images/jeanss.jpeg" },
    { id: 2, name: "Trousers", image: "/src/components/addLoyalityProgram/images/jeanss.jpeg" },
    { id: 3, name: "Shirts", image: "/src/components/addLoyalityProgram/images/jeanss.jpeg" },
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  return (
    <Box sx={stylesCategory.containerStyle}>
      <TextField
        placeholder="Search by specific category"
        variant="outlined"
        fullWidth
        onChange={handleSearchChange}
        sx={stylesCategory.searchInputStyle}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {filteredCategories.length > 0 ? (
        filteredCategories.map(category => (
          <Box key={category.id} sx={stylesCategory.categoryItemStyle}>
            <img alt={category.name} src={category.image} style={stylesCategory.categoryImageStyle} />
            <Box>
              <Typography sx={stylesCategory.categoryNameStyle}>{category.name}</Typography>
            </Box>
            <Delete style={stylesCategory.deleteIconStyle} 
              onClick={() => handleDelete(category.id)} />
          </Box>
        ))
      ) : (
        <Typography sx={stylesCategory.notFoundTextStyle}>
          Not found
        </Typography>
      )}
    </Box>
  );
};
