import React, { useState } from 'react';
import {
  Box, Button, TextField, IconButton, Dialog, DialogTitle, DialogContent, 
  DialogActions, RadioGroup, FormControlLabel, FormControl, Select, MenuItem, Radio
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const AddNewItemPopup = ({ open, onClose }) => {
  const [variants, setVariants] = useState([{ code: '', name: '' }]);
  const [itemType, setItemType] = useState('Item with variants');
  const [category, setCategory] = useState('');

  const handleAddVariant = () => {
    setVariants([...variants, { code: '', name: '' }]);
  };

  const handleDeleteVariant = (index) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  const handleItemTypeChange = (event) => {
    setItemType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add new items</DialogTitle>
      <DialogContent dividers style={{ height: '80vh' }}>
        <FormControl component="fieldset" fullWidth>
          <RadioGroup
            row
            value={itemType}
            onChange={handleItemTypeChange}
          >
            <FormControlLabel
              value="Individual item"
              control={
                <Radio
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                  sx={{
                    color: '#D9DBDD',
                    '&.Mui-checked': { color: '#FFA048' },
                    '&:hover': { color: '#FFA048' },
                  }}
                />
              }
              label="Individual item"
              sx={{ color: 'black' }}
            />
            <FormControlLabel
              value="Item with variants"
              control={
                <Radio
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                  sx={{
                    color: '#D9DBDD',
                    '&.Mui-checked': { color: '#FFA048' },
                    '&:hover': { color: '#FFA048' },
                  }}
                />
              }
              label="Item with variants"
              sx={{ color: 'black' }}
            />
          </RadioGroup>
        </FormControl>

        <TextField
          label="Item name"
          fullWidth
          margin="normal"
          variant="outlined"
        />

        <FormControl fullWidth margin="normal" variant="outlined">
          <Select
            value={category}
            onChange={handleCategoryChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Category' }}
          >
            <MenuItem value="" disabled>
              Category
            </MenuItem>
            <MenuItem value="Drinks">Drinks</MenuItem>
            <MenuItem value="Shirts">Shirts</MenuItem>
          </Select>
        </FormControl>

        {itemType === 'Individual item' && (
          <TextField
            label="Item Code"
            fullWidth
            margin="normal"
            variant="outlined"
          />
        )}

        {itemType === 'Item with variants' && (
          <Box
            sx={{
              maxHeight: '30vh',
              overflowY: variants.length > 4 ? 'auto' : 'visible',
              mt: 2,
              pr: 2,
              '&::-webkit-scrollbar': { display: 'none' }, 
            }}
          >
            {variants.map((variant, index) => (
              <Box display="flex" alignItems="center" gap={2} mt={2} key={index}>
                <TextField
                  label={`Variant ${index + 1} Code`}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  label={`Variant ${index + 1} Name`}
                  variant="outlined"
                  fullWidth
                />
                <IconButton
                  onClick={() => handleDeleteVariant(index)}
                  sx={{ color: 'grey' }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}

            <Button
              onClick={handleAddVariant}
              sx={{
                mt: 2,
                color: '#FFA048',
                textTransform: 'none',
              }}
            >
              + Add variant
            </Button>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#FFA048',
            '&:hover': {
              backgroundColor: '#FF8B26',
            },
          }}
        >
          Add item
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewItemPopup;
