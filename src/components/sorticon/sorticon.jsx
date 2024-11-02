
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { sortItems } from '../../redux/slices/itemSlice';
import sortByComponentStyles from './sortByComponentStyles';

const SortByComponent = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState('asc');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    dispatch(sortItems(value));
  };

  return (
    <Box sx={sortByComponentStyles.container}>
      <Typography variant="subtitle2" sx={sortByComponentStyles.title}>
        Sort by
      </Typography>
      <RadioGroup value={selectedValue} onChange={handleChange}>
        <FormControlLabel
          value="recent"
          control={<Radio size="small" />}
          label={
            <Typography variant="body2" sx={sortByComponentStyles.radioLabel}>
              Recently added
            </Typography>
          }
        />
        <FormControlLabel
          value="asc"
          control={<Radio size="small" />}
          label={
            <Typography variant="body2" sx={sortByComponentStyles.radioLabel}>
              A-Z
            </Typography>
          }
        />
        <FormControlLabel
          value="desc"
          control={<Radio size="small" />}
          label={
            <Typography variant="body2" sx={sortByComponentStyles.radioLabel}>
              Z-A
            </Typography>
          }
        />
      </RadioGroup>
    </Box>
  );
};

export default SortByComponent;
