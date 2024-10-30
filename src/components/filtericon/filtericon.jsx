import React, { useState } from 'react';
import { Box, Button, Typography, Select, MenuItem, Stack, IconButton, FormControl, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import DoneIcon from '@mui/icons-material/Done';

const FilterModal = ({ open, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('Biscuits');

  if (!open) return null;

  const categories = ['Biscuits', 'Shirts', 'Drinks'];

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="rgba(0, 0, 0, 0.5)"
      zIndex={1300}
    >
      <Box
        width="700px"
        bgcolor="white"
        borderRadius="8px"
        p={3}
        position="relative"
        height="90vh"
        display="flex"
        flexDirection="column"
      >
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: '600', marginTop: '-5px' }}>
          Filters
        </Typography>
        
        
        <Box sx={{ marginBottom: 1 }} /> 

        <Stack spacing={2} flexGrow={1}>
          <FormControl fullWidth variant="outlined">
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              displayEmpty
              renderValue={() => (
                <Stack>
                  <Typography variant="subtitle2" color="text.secondary">Choose Category</Typography>
                  <Typography variant="body1">{selectedCategory}</Typography>
                </Stack>
              )}
              MenuProps={{
                PaperProps: {
                  sx: {
                    borderBottom: '1px solid #D9DBDD',
                  },
                },
              }}
              sx={{
                '& .MuiSelect-select': {
                  display: 'flex',
                  alignItems: 'center',
                },
                borderBottom: '1px solid #D9DBDD',
              }}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
                    <span>{category}</span>
                    {selectedCategory === category && <CheckIcon sx={{ color: 'blue' }} />}
                  </Stack>
                </MenuItem>
              ))}
              <Divider sx={{ my: 1 }} /> 
              <MenuItem>
                <Typography
                  sx={{ color: 'blue', cursor: 'pointer', width: '100%' }}
                  onClick={() => alert('Add New clicked')}
                >
                  + Add New
                </Typography>
              </MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ marginBottom: 1 }} />

          <Box>
            <Typography variant="subtitle2" color="text.secondary">Item Status</Typography>
            <Box sx={{ marginBottom: 2 }} /> 
            <Stack direction="row" spacing={2}>
              <Typography
                sx={{
                  bgcolor: '#FFA048',
                  color: 'white',
                  fontWeight: '500',
                  padding: '6px 12px',
                  borderRadius: '5px',
                  border: '1px solid transparent',
                  display: 'inline-block',
                  width: 'fit-content',
                }}
              >
                Active
              </Typography>
              <Typography
                sx={{
                  color: 'black',
                  fontWeight:'500',
                  padding: '6px 12px',
                  borderRadius: '5px',
                  border: '1px solid #D9DBDD',
                  display: 'inline-block',
                  width: 'fit-content',
                }}
              >
                Inactive
              </Typography>
            </Stack>
          </Box>

          <Box sx={{ marginBottom: 2 }} /> 
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
          <Button
            variant="outlined"
            fullWidth
            onClick={onClose}
            sx={{
              borderColor: '#FFA048', 
              color: '#FFA048', 
              '&:hover': {
                borderColor: '#FF8C1A', 
                color: '#FF8C1A', 
              },
            }}
          >
            Reset
          </Button>
          <Button variant="contained" fullWidth color="warning" onClick={onClose}>Apply Filter</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default FilterModal;
