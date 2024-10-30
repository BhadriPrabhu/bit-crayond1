import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material"

function Popup1([props]) {

    const [{onClose}] = props;

  return (
    <Box onclick={onClose}>
      
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Sort by</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="A-Z"
                name="radio-buttons-group"
            >
                <FormControlLabel value="A-Z" control={<Radio />} label="Female" />
                <FormControlLabel value="Z-A" control={<Radio />} label="Male" />
                <FormControlLabel value="Recently added" control={<Radio />} label="Recently added" />
            </RadioGroup>
        </FormControl>

    </Box>
  )
}

export default Popup1;
