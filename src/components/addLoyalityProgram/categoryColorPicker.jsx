import React, { useState } from 'react';
import { Box, Typography, Switch, TextField, InputAdornment } from '@mui/material';
import Colorpicker from '../icon/colorpicker';
import stylesCategoryColor from './stylesCategorycolor';
import AllSwitches from '../icon/switch';

const CategoryColorPicker = () => {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <Box sx={stylesCategoryColor.container}>
      <Typography sx={{...stylesCategoryColor.title,display:"flex",justifyContent:"space-between"}}>
        Customer loyalty page customization 
        <AllSwitches></AllSwitches>
      </Typography>
      <TextField
        sx={stylesCategoryColor.textField}
        variant="filled"
        label="Pick background color"
        value={color}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <Colorpicker
                style={{ cursor: 'pointer' }}
                onClick={() => document.getElementById('color-input').click()}
              />
              <input
                type="color"
                id="color-input"
                style={{ display: 'none' }}
                onChange={handleColorChange}
              />
            </InputAdornment>
          )
        }}
      />
    </Box>
  );
}

export default CategoryColorPicker;
