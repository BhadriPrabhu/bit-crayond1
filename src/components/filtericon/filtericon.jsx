import React, { useState } from 'react';
import { Box, Button, Typography, Select, MenuItem, Stack, IconButton, FormControl, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import DoneIcon from '@mui/icons-material/Done';
import styles from './styles_filtericon'

const FilterModal = ({ open, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('Biscuits');

  if (!open) return null;

  const categories = ['Biscuits', 'Shirts', 'Drinks'];

  return (
    <Box sx={styles.overlay}>
      <Box sx={styles.modal}>
        <IconButton onClick={onClose} sx={styles.closeButton}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" gutterBottom sx={styles.title}>
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
              sx={styles.select}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  <Stack direction="row" alignItems="center" sx={styles.menuItem}>
                    <span>{category}</span>
                    {selectedCategory === category && <CheckIcon sx={{ color: 'blue' }} />}
                  </Stack>
                </MenuItem>
              ))}
              <Divider sx={{ my: 1 }} />
              <MenuItem>
                <Typography onClick={() => alert('Add New clicked')} sx={styles.addNew}>
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
              <Typography sx={styles.activeStatus}>Active</Typography>
              <Typography sx={styles.inactiveStatus}>Inactive</Typography>
            </Stack>
          </Box>

          <Box sx={{ marginBottom: 2 }} />
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
          <Button variant="outlined" fullWidth onClick={onClose} sx={styles.resetButton}>
            Reset
          </Button>
          <Button variant="contained" fullWidth color="warning" onClick={onClose}>
            Apply Filter
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default FilterModal;