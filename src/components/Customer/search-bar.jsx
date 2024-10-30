import Input from "./input";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Box, Button, Typography } from "@mui/material";
import { Customerstyle } from "./Customerstyle";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DialogComponent from './dialog'

function SearchBar() {

  const [popover, setPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setPopover(true);
  };

  const handleClose = () => {
    setPopover(false);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);


  return (
    <>
      <Box sx={Customerstyle.search2}>
          <Input/>
          <Box sx={Customerstyle.search1}>
            <Typography sx={Customerstyle.icon1} onClick={handleClick}>
              <SwapVertIcon sx={Customerstyle.icon3} />
            </Typography>
            <Popover 
              open={popover}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}>
                <Box sx={{ p: 2 }}>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Sort by</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Recently added"
                      name="radio-buttons-group">
                      <FormControlLabel value="Recently added" control={<Radio />} label="Recently added" />
                      <FormControlLabel value="A-Z" control={<Radio />} label="A-Z" />
                      <FormControlLabel value="Z-A" control={<Radio />} label="Z-A" />
                    </RadioGroup>
                  </FormControl>
                </Box>
            </Popover>

            <Typography sx={Customerstyle.icon2} onClick={openPopup}>
              <FilterAltOutlinedIcon sx={Customerstyle.icon3}/>
            </Typography>

            <DialogComponent onclose={closePopup} opened={isPopupOpen} />

            <Box sx={Customerstyle.icon5}></Box>
            <Button variant="contained" sx={Customerstyle.but1}>New customer</Button>
          </Box>
      </Box>
    </>
  )
}

export default SearchBar;
