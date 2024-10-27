import React, { useState } from 'react';
import { Box, Button, Typography, Select, MenuItem, Stack, IconButton, FormControl, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import DoneIcon from '@mui/icons-material/Done'; // Import DoneIcon for the tick mark

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
        
        {/* Spacer to separate filters from dropdown */}
        <Box sx={{ marginBottom: 1 }} /> {/* Reduced space */}

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
              <Divider sx={{ my: 1 }} /> {/* Divider between options and add new */}
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

          {/* Spacer to separate item status from buttons */}
          <Box sx={{ marginBottom: 1 }} /> {/* Space before Item Status (reduced space) */}

          <Box>
            <Typography variant="subtitle2" color="text.secondary">Item Status</Typography>
            <Box sx={{ marginBottom: 2 }} /> {/* Space between Item Status and buttons */}
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#FFA048', // Background color for Active button
                  color: 'white', // Text color for Active button
                  '&:hover': {
                    bgcolor: '#FF8C1A', // Darker shade on hover
                  },
                }}
                startIcon={<DoneIcon />} // Add tick icon to Active button
              >
                Active
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#D9DBDD', // Border color for Inactive button
                  color: 'black', // Text color for Inactive button
                  '&:hover': {
                    borderColor: '#B2B2B2', // Darker border color on hover
                    color: '#333', // Darker text color on hover
                  },
                }}
              >
                Inactive
              </Button>
            </Stack>
          </Box>

          {/* Spacer to separate item status and buttons */}
          <Box sx={{ marginBottom: 2 }} /> {/* Space before buttons */}
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
        <Button
    variant="outlined"
    fullWidth
    onClick={onClose}
    sx={{
      borderColor: '#FFA048', // Border color for Reset button
      color: '#FFA048', // Text color for Reset button
      '&:hover': {
        borderColor: '#FF8C1A', // Darker border color on hover
        color: '#FF8C1A', // Darker text color on hover
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
