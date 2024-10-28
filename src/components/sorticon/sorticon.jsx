import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

const SortByComponent = () => {
  const [selectedValue, setSelectedValue] = useState('recentlyAdded');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box
      sx={{
        width: '170px',
        height:'160px',
        padding: '16px',
        bgcolor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
        Sort by
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          value={selectedValue}
          onChange={handleChange}
          name="sort-by-options"
        >
          <FormControlLabel
            value="recentlyAdded"
            control={<Radio sx={{ color: '#FFA048', '&.Mui-checked': { color: '#FFA048' } }} />}
            label="Recently added"
            sx={{ color: '#333' }}
          />
          <FormControlLabel
            value="aToZ"
            control={<Radio sx={{ color: '#D9DBDD', '&.Mui-checked': { color: '#FFA048' } }} />}
            label="A-Z"
            sx={{ color: '#333' }}
          />
          <FormControlLabel
            value="zToA"
            control={<Radio sx={{ color: '#D9DBDD', '&.Mui-checked': { color: '#FFA048' } }} />}
            label="Z-A"
            sx={{ color: '#333' }}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default SortByComponent;
