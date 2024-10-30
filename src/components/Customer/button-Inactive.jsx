import { Button,Box } from "@mui/material";
import { Popover,FormControl,FormLabel } from "@mui/material";
import { useState } from "react";


function ButtonInactive() {

  const [popovered,setPopovered] = useState();
  const [anchored,setAnchored] = useState();

  const clicked = (event) => {
    setAnchored(event.currentTarget);
    setPopovered(true);
  };

  const handleClose = () => {
    setPopovered(false);
  };

  return (
    <>
      <Button sx={{bgcolor: "#FFDAD3", color: "#3D0600", fontWeight: "400", fontSize: "14px", lineHeight: "20px"}} onClick={clicked}>Inactive</Button>
      <Popover
              open={popovered}
              anchorEl={anchored}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}>
                <Box sx={{ p: 2 }}>
                  <FormControl sx={{gap: "8px"}}>
                    <FormLabel id="demo-radio-buttons-group-label" sx={{color: "#02111A"}}>View</FormLabel>
                    <FormLabel id="demo-radio-buttons-group-label" sx={{color: "#DF3813"}}>Delete</FormLabel>
                  </FormControl>
                </Box>
            </Popover>
    </>
  )
}

export default ButtonInactive;
