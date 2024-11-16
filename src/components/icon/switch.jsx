import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, FormControlLabel, Switch } from '@mui/material';

const CustomStyledSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(() => ({
  width: "32px",
  height: "20px",
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: "2px 0px 2px 2px",
    margin: 2,
    height:"15px",
    width:"18px",
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(10px)',
      color: '#FFFFFF', 
      '& + .MuiSwitch-track': {
        backgroundColor: '#FFA048', 
        opacity: 1,
        border: 0,
      },
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: 'black', 
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      backgroundColor: 'rgb(255, 236, 218)', 
      opacity: 0.5,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 13,
    height: 13,
    backgroundColor: 'black',
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: 'rgb(255, 236, 218)', 
    opacity: 1,
    transition: 'background-color 500ms',
  },
  '& .Mui-checked .MuiSwitch-thumb': {
    backgroundColor: '#FFFFFF', 
  },
}));

function CustomSwitch({ 
  defaultState = false, 
  disabled = false, 
}) {
  const [checked, setChecked] = React.useState(defaultState);

  const handleToggle = (event) => {
    if (!disabled) {
      setChecked(event.target.checked);
    }
  };

  return (
    <Box onClick={() => !disabled && setChecked(!checked)} sx={{ cursor: disabled ? 'default' : 'pointer' }}>
      <FormControlLabel
        control={
          <CustomStyledSwitch
            checked={checked}
            onChange={handleToggle}
            disabled={disabled}
          />
        }
      />
    </Box>
  );
}

export default function AllSwitches() {
  return (
      <CustomSwitch defaultState={true} />
  );
}
