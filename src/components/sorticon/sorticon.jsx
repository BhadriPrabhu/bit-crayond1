import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { sortItems } from '../../redux/slices/itemSlice';

const SortByComponent = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState('asc');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    dispatch(sortItems(value)); 
  };

  return (
    <Box
      sx={{
        width: '150px', 
        height: '135px',
        padding: '10px',
        bgcolor: 'white',
        borderRadius: '6px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, fontSize: '0.9rem' }}>
        Sort by
      </Typography>
      <RadioGroup value={selectedValue} onChange={handleChange}>
        <FormControlLabel value="recent" control={<Radio size="small" />} label={<Typography variant="body2" fontSize="0.8rem">Recently added</Typography>} />
        <FormControlLabel value="asc" control={<Radio size="small" />} label={<Typography variant="body2" fontSize="0.8rem">A-Z</Typography>} />
        <FormControlLabel value="desc" control={<Radio size="small" />} label={<Typography variant="body2" fontSize="0.8rem">Z-A</Typography>} />
      </RadioGroup>
    </Box>
  );
};

export default SortByComponent;
