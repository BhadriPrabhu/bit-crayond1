import React, { useState } from 'react';
import { Box, Typography, Switch, TextField, InputAdornment } from '@mui/material';
import Colorpicker from '../icon/colorpicker';
import stylesCategoryColor from './stylesCategorycolor';

const CategoryColorPicker = () => {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <Box sx={stylesCategoryColor.container}>
      <Typography sx={stylesCategoryColor.title}>
        Customer loyalty page customization 
        <Switch 
          sx={{ 
            position: "absolute", 
            right: "3px", 
            '& .MuiSwitch-switchBase.Mui-checked': { color: 'rgb(255, 160, 72)' }, 
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { bgcolor: 'rgb(255, 160, 72)' } 
          }} 
        />
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
