import React, { useState } from 'react';
import { Button } from '@mui/material'; // Correct import for Button
import Box from '@mui/material/Box'; // Correct import for Box
import FilterModal from './filtericon';

const Simple = () => {
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  const handleOpenModal = () => {
    setFilterModalOpen(true);
  };

  const handleCloseModal = () => {
    setFilterModalOpen(false);
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleOpenModal}>
        Open Filter Modal
      </Button>
      <FilterModal open={isFilterModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default Simple;
