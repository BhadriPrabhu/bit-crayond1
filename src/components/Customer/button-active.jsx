import { Button,Box } from "@mui/material";
import { Popover,FormControl,FormLabel } from "@mui/material";
import { useState } from "react";


function ButtonActive(){

  const [popovering,setPopovering] = useState();
  const [anchoring,setAnchoring] = useState();

  const click = (event) => {
    setAnchoring(event.currentTarget);
    setPopovering(true);
  };

  const handleClose = () => {
    setPopovering(false);
  };


  return (
    <>
      <Button sx={{bgcolor: "#CBF2E0", color: "#008545", fontWeight: "400", fontSize: "14px", lineHeight: "20px"}} onClick={click}>Active</Button>
      <Popover
              open={popovering}
              anchorEl={anchoring}
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

export default ButtonActive;
