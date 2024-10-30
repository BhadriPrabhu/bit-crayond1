import React, { useState } from 'react';   
import {
  Box, Button, TextField, IconButton, InputAdornment, Divider,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Menu, MenuItem, Select, Typography, Popover
} from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import Searchicon from '../../icons/search';
import Sorticons from '../../icons/sorticons';
import Filtericons from '../../icons/filtericon';
import Moreverticons1 from '../moreverticon/Moreverticon';
import FilterModal from '../filtericon/filtericon';
import SortByComponent from '../sorticon/sorticon';
import AddNewItemPopup from '../newitem_button/Addnewpopup';
import BulkImportModal from '../moreverticon/BulkimportModal';
import BulkExportModal from '../moreverticon/BulkexportMore';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../../redux/slices/itemSlice';
import { setItems } from '../../redux/slices/itemSlice';



const data = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  itemCode: `00${index + 1}`,
  itemName: ['Levis Shirts', 'Coffee Cup', 'Tea Cup', 'Juice'][index % 4],
  itemSize: index % 4 === 1 ? 'Large' : '',
  category: index % 2 === 0 ? 'Shirts' : 'Drinks',
  status: index % 5 === 0 ? 'Inactive' : 'Active'
}));

const ItemTable = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const searchTerm = useSelector((state) => state.items.searchTerm);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const [anchorElSort, setAnchorElSort] = useState(null); 
  const [anchorElAction, setAnchorElAction] = useState(null);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isBulkImportOpen, setIsBulkImportOpen] = useState(false);
  const [isBulkExportOpen, setIsBulkExportOpen] = useState(false);

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterMenuClick = (event) => setAnchorElFilter(anchorElFilter ? null : event.currentTarget);
  const handleFilterMenuClose = () => setAnchorElFilter(null);

  const handleSortMenuClick = (event) => setAnchorElSort(anchorElSort ? null : event.currentTarget);
  const handleSortMenuClose = () => setAnchorElSort(null); 

  const handleActionMenuClick = (event) => setAnchorElAction(anchorElAction ? null : event.currentTarget);
  const handleActionMenuClose = () => setAnchorElAction(null);

  const handleFilterIconClick = () => setFilterModalOpen(true);
  const handleFilterModalClose = () => setFilterModalOpen(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const handleBulkImportClick = () => {
    setIsBulkImportOpen(true);
  };
  
  const handleCloseBulkImport = () => {
    setIsBulkImportOpen(false);
  };

  const handleBulkExportClick = () => {
    setIsBulkExportOpen(true);
  };
  
  const handleCloseBulkExport = () => {
    setIsBulkExportOpen(false);
  };

  const filteredData = items.filter((row) =>
    row.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const totalRecords = filteredData.length;
  const startRecord = page * rowsPerPage + 1;
  const endRecord = Math.min(totalRecords, startRecord + rowsPerPage - 1);
  const visibleRows = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const renderPaginationButtons = () => {
    const totalPages = Math.ceil(totalRecords / rowsPerPage);
    const displayPages = [];

    if (totalPages <= 7) {
      for (let i = 0; i < totalPages; i++) displayPages.push(i);
    } else {
      if (page < 3) {
        displayPages.push(0, 1, 2, '...', totalPages - 3, totalPages - 2, totalPages - 1);
      } else if (page > totalPages - 4) {
        displayPages.push(0, 1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1);
      } else {
        displayPages.push(0, '...', page - 1, page, page + 1, '...', totalPages - 1);
      }
    }

    return displayPages.map((pageIndex, idx) => (
      <Button
        key={idx}
        onClick={() => typeof pageIndex === 'number' && setPage(pageIndex)}
        sx={{
          minWidth: 32,
          height: 32,
          mx: 0.5,
          color: page === pageIndex ? '#1363DF' : 'inherit',
          borderColor: page === pageIndex ? '#1363DF' : 'transparent',
          borderWidth: 1,
          borderStyle: 'solid',
          borderRadius: '4px',
          '&:hover': { borderColor: '#1363DF' },
        }}
        disabled={pageIndex === '...'}
      >
        {pageIndex === '...' ? '...' : pageIndex + 1}
      </Button>
    ));
  };

  return (
    <Box width="1230px" height="600px" display="flex" flexDirection="column" padding="15px" bgcolor="#f5f5f5">
      <Box
        width="110%"
        height="80px"
        display="flex"
        alignItems="center"
        bgcolor="white"
        borderRadius="2px"
        padding="0 10px"
        mb={0}
      >
        <TextField
          variant="outlined"
          placeholder="Search by Item name"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Searchicon />
              </InputAdornment>
            ),
          }}
          sx={{
            width: '40%',
            marginRight: 'auto',
            '& .MuiOutlinedInput-root': { borderRadius: '8px', borderColor: '#D9DBDD' },
          }}
        />

        {[Sorticons, Filtericons, MoreVertIcon].map((IconComponent, index) => (
          <IconButton
            key={index}
            onClick={
              IconComponent === Filtericons
                ? handleFilterIconClick
                : IconComponent === Sorticons
                ? handleSortMenuClick  
                : IconComponent === MoreVertIcon
                ? handleFilterMenuClick
                : undefined
            }
            disableRipple
            sx={{
              width: 40,
              height: 40,
              marginRight: 2,
              borderColor: '#D9DBDD',
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: '4px',
              boxShadow: 'none',
              '&:hover': { borderColor: '#FFA048' },
            }}
          >
            <IconComponent />
          </IconButton>
        ))}
        <Popover
          open={Boolean(anchorElSort)}
          anchorEl={anchorElSort}
          onClose={handleSortMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{
            boxShadow: 'none',
            '& .MuiPaper-root': {
              boxShadow: 'none !important', 
              border: '1px solid #E0E0E0',
            },
          }}
        >
          <SortByComponent /> 
        </Popover>
        <Popover
          open={Boolean(anchorElFilter)}
          anchorEl={anchorElFilter}
          onClose={handleFilterMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{
            boxShadow: 'none',
            '& .MuiPaper-root': {
              boxShadow: 'none !important',
              border: '1px solid #E0E0E0', 
            },
          }}
        >
          <Moreverticons1 
          onBulkImportClick={handleBulkImportClick}
          onBulkExportClick={handleBulkExportClick}/>
        </Popover>

        <Divider orientation="vertical" flexItem sx={{ height: 32, bgcolor: '#D9DBDD', mr: 2, marginTop: '22px' }} />

        <Button
          variant="contained"
          disableElevation
          sx={{ bgcolor: '#FFA726', color: 'white', borderRadius: '10px' }}
          onClick={handleOpenPopup}
        >
          New Item
        </Button>
      </Box>
      <TableContainer 
  sx={{
    maxHeight: 450,
    width: '1372px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': { display: 'none' },
    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',
    borderRadius: '2px'
  }}
>
  <Table stickyHeader>
    <TableHead>
      <TableRow>
        {['Item Code', 'Item Name', 'Category', 'Status', 'Action'].map((heading, idx) => (
          <TableCell
            key={heading}
            align={idx < 3 ? 'left' : 'right'}
            sx={{
              bgcolor: '#F0F3F6',
              fontWeight: 600,
              color: '#4E585E',
              paddingLeft: idx === 0 ? '30px' : '5px', 
              paddingRight: idx === 4 ? '30px' : '5px', 
              borderRight: idx === 2 ? '50px solid transparent' : 'none',
              width: idx === 3 ? '90px' : 'auto',
            }}
          >
            {heading}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {visibleRows.map((row) => (
        <TableRow key={row.id} sx={{ bgcolor: 'white', height: 40, borderBottom: '1px solid #E5E8EB' }}>
          <TableCell align="left" sx={{ paddingLeft: '30px', paddingRight: '5px' }}>{row.itemCode}</TableCell> 
          <TableCell align="left" sx={{ paddingLeft: '5px', paddingRight: '5px' }}>
            {row.itemName}
            {row.itemSize && (
              <Typography
                variant="caption"
                display="block"
                sx={{ fontSize: '12px', color: '#4E585E', mt: '2px' }}
              >
                {row.itemSize}
              </Typography>
            )}
          </TableCell>
          <TableCell align="left" sx={{ paddingLeft: '5px', paddingRight: '5px', borderRight: '50px solid transparent' }}>{row.category}</TableCell>
          <TableCell align="right" sx={{ width: '90px', paddingRight: '10px' }}> 
            <Typography
              variant="body2"
              sx={{
                color: row.status === 'Active' ? '#003D20' : '#3D0600',
                bgcolor: row.status === 'Active' ? '#CBF2E0' : '#FFDAD3',
                borderRadius: '4px',
                width: '70px', 
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '20px', 
              }}
            >
              {row.status}
            </Typography>
          </TableCell>
          <TableCell align="right" sx={{ paddingLeft: '5px', paddingRight: '30px' }}> 
            <IconButton onClick={(e) => handleActionMenuClick(e)}>
              <MoreVertIcon />
            </IconButton>
            <Menu 
              anchorEl={anchorElAction} 
              open={Boolean(anchorElAction)} 
              onClose={handleActionMenuClose}
              sx={{ 
                boxShadow: 'none',  
                '& .MuiPaper-root': { boxShadow: 'none' }  
              }}
            >
              <MenuItem onClick={handleActionMenuClose}>Edit</MenuItem>
              <MenuItem onClick={handleActionMenuClose}>Inactive</MenuItem>
            </Menu>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

<Box 
  width="98%" 
  mt="auto" 
  display="flex" 
  justifyContent="space-between" 
  alignItems="center" 
  sx={{ paddingLeft: '30px', paddingRight: '30px' }} 
> 
  <Box display="flex" alignItems="center">
    <Select
      value={rowsPerPage}
      onChange={handleChangeRowsPerPage}
      size="small"
      variant="outlined"
      sx={{
        mr: 2,
        width: 100,
        height: 32,
        fontSize:'0.85rem',
        '& .MuiOutlinedInput-root': { borderRadius: '4px', borderColor: '#D9DBDD' },
        '&:hover .MuiOutlinedInput-root': { borderColor: '#FFA048' }
      }}
      renderValue={(value) => `${value}/Page`}
    >
      {Array.from({ length: 5 }, (_, i) => (i + 1) * 5).map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
    <Typography variant="body2" color="#666666" sx={{ marginLeft: '20px' , fontSize:'13px'}}>
      {`Showing ${startRecord}-${endRecord} of ${totalRecords} records`}
    </Typography>
  </Box>

  <Box display="flex" alignItems="center" sx={{ marginRight: '-100px' }}> 
    <Button 
      onClick={() => setPage(page - 1)} 
      disabled={page === 0} 
      sx={{ minWidth: '32px' }}
    >
      {'<'}
    </Button>
    {renderPaginationButtons()}
    <Button 
      onClick={() => setPage(page + 1)} 
      disabled={page >= Math.ceil(totalRecords / rowsPerPage) - 1} 
      sx={{ minWidth: '32px' }}
    >
      {'>'}
    </Button>
  </Box>
</Box>


      {filterModalOpen && <FilterModal open={filterModalOpen} onClose={handleFilterModalClose} />}
      <AddNewItemPopup open={isPopupOpen} onClose={handleClosePopup} />
      {isBulkImportOpen && (
     <BulkImportModal open={isBulkImportOpen} onClose={handleCloseBulkImport} />
     
)}
{isBulkExportOpen && (
  <BulkExportModal open={isBulkExportOpen} onClose={handleCloseBulkExport} />
)}
    </Box>
  );
};

export default ItemTable;
