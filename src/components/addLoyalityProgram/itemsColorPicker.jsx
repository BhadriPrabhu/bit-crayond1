import React, { useState } from 'react';
import { Box, Typography, Switch, TextField, InputAdornment } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Colorpicker from '../icon/colorpicker';
import stylesItemsColor from './stylesItemsColor';

const ItemsColorPicker = () => {
    const [color, setColor] = useState('#000000');

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <Box sx={stylesItemsColor.containerStyle}>
            <Typography sx={stylesItemsColor.titleStyle}>
                Customer loyalty page customization
                <Switch sx={stylesItemsColor.switchStyle}></Switch>
            </Typography>
            <TextField
                sx={stylesItemsColor.textFieldStyle}
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
                    ),
                }}
            />
            <Box sx={stylesItemsColor.sectionStyle}>
                <Typography sx={stylesItemsColor.sectionTitleStyle}>Purchase item image</Typography>
                <Box sx={stylesItemsColor.sectionContentStyle}>
                    <AddCircleOutlineIcon sx={stylesItemsColor.iconStyle}></AddCircleOutlineIcon>
                    <Box>
                        <Typography sx={stylesItemsColor.itemNameStyle}>Coffee</Typography>
                        <Typography sx={stylesItemsColor.itemSizeStyle}>Large</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={stylesItemsColor.sectionStyle}>
                <Typography sx={stylesItemsColor.sectionTitleStyle}>Offer item image</Typography>
                <Box sx={stylesItemsColor.sectionContentStyle}>
                    <AddCircleOutlineIcon sx={stylesItemsColor.iconStyle}></AddCircleOutlineIcon>
                    <Box>
                        <Typography sx={stylesItemsColor.itemNameStyle}>Coffee</Typography>
                        <Typography sx={stylesItemsColor.itemSizeStyle}>Large</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ItemsColorPicker;
