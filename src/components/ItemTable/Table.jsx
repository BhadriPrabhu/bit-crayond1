import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Grid, Typography, Button,InputBase, TableContainer, Box, Card, MenuItem, Select, Pagination, IconButton,FormControl, InputLabel} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import SyncIcon from '@mui/icons-material/Sync';
import table from './styles';

const TableData = [
  { code: '001', name: 'Levis shirts', category: 'Shirts', status: 'Active' },
  { code: '002a', name: 'Coffee cup', subName: 'Large', category: 'Drinks', status: 'Active' },
  { code: '002b', name: 'Coffee cup', subName: 'Small', category: 'Drinks', status: 'Active' },
  { code: '002c', name: 'Coffee cup', subName: 'Medium', category: 'Drinks', status: 'Inactive' },
  { code: '002d', name: 'Tea cup', category: 'Drinks', status: 'Active' },
  { code: '006', name: 'Juice', category: 'Drinks', status: 'Inactive' },
  { code: '007', name: 'Juice', category: 'Drinks', status: 'Active' },
  { code: '008', name: 'Juice', category: 'Drinks', status: 'Inactive' },
  { code: '009', name: 'Juice', category: 'Drinks', status: 'Inactive' },
];

const ItemTable = () => {


  const [data, setData] = useState(TableData);
  const [search, setSearch] = useState('');
  const picker = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.code.toLowerCase().includes(search.toLowerCase()) ||
    item.status.toLowerCase().includes(search.toLowerCase())
  );


  const [openCard, setOpenCard] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const handleCloseCard = () => {
    setOpenCard(false);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
    setEditItem(null);
  };


  const [page, setPage] = useState(0);
  const [prows, setProws] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1); 
  };
  const handleChangeRowsPerPage = (event) => {
    setProws(parseInt(event.target.value, 10));
    setPage(0);
  };

  const estatus = () => {
    if (editItem) {
      const newStatus = editItem.status === 'Active' ? 'Inactive' : 'Active';
      const updatedItem = { ...editItem, status: newStatus };
      const updatedData = data.map(item => item.code === editItem.code ? updatedItem : item);
      setData(updatedData);
      handleCloseEdit();
    }
  };

  const [bulkOpen, setBulkOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [bulkExport, setBulkExport] = useState(false);
  const [bulkImport, setBulkImport] = useState(false);
  const handleClick = () => {
    if (clickCount === 0) {
      setBulkOpen(true);
      setClickCount(1);
    } else {
      setBulkOpen(false);
      setClickCount(0);
    }
  };

  return (
    <Box sx={{ ...table.outer }}>
      <Grid container sx={{ ...table.inside }}>
        <Grid item xs={12} sx={{ ...table.table }}>
          <Box sx={{ ...table.topsearch }}>
            <SearchIcon sx={{ color: '#616A70', width: '20px', height: '35px' }} />
            <InputBase
              placeholder="Search by Item name, item code"
              sx={{ marginLeft: '10px', fontSize: '13px', color: '#616A70', width: '100%' }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>

          <Box sx={{ display: 'flex', gap: '15px', marginLeft: 'auto' }}>
            <Box sx={{ ...table.icons }}>
              <SwapVertIcon sx={{ ...table.iconimg }} />
            </Box>
            <Box sx={{ ...table.icons }} onClick={() => setFilterOpen(true)}>
              <FilterAltOutlinedIcon sx={{ ...table.iconimg }} />
            </Box>
            <Box sx={{ ...table.icons , border:bulkOpen ? '1px solid #FFA048' : '1px solid #ccc' ,cursor:'pointer'  }} onClick={handleClick} >
              <MoreVertIcon sx={{ ...table.iconimg  }} onClick={handleClick} />
            </Box>
            <hr style={{ border: '1px solid #ccc', margin: '3px 0' }} />
            <Button
              variant="contained"
              sx={{ backgroundColor: '#FF9A4C', textTransform: 'none', fontSize: '13px', padding: '5px 10px',boxShadow: 'none' ,'&:hover': {boxShadow: 'none'} }}
              onClick={() => setOpenCard(true)}
            >
              Sync items from POS
            </Button>
          </Box>
        </Grid>

        <TableContainer sx={{ height: '360px', overflowY: 'auto', '&::-webkit-scrollbar': { display: 'none' } ,marginTop:'30px'}}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#F0F3F6', fontWeight: 'bold' ,borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px'}}>Item code</TableCell>
                <TableCell sx={{ backgroundColor: '#F0F3F6', fontWeight: 'bold' }}>Item name</TableCell>
                <TableCell sx={{ backgroundColor: '#F0F3F6', fontWeight: 'bold' ,paddingLeft:'30px' }}>Category</TableCell>
                <TableCell sx={{ backgroundColor: '#F0F3F6', fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ backgroundColor: '#F0F3F6', borderTopRightRadius: '8px',borderBottomRightRadius: '8px' }} />
              </TableRow>
            </TableHead>
            <TableBody>
              {picker.slice(page * prows, page * prows + prows).map((row) => (
                <TableRow key={row.code}>
                  <TableCell sx={{ padding: '13px' }} >{row.code}</TableCell>
                  <TableCell sx={{ minWidth: 170, padding: '13px' }}>
                    <Typography style={{ fontSize: '14px', fontWeight: 500 }} >{row.name}</Typography>

                    {row.subName && 
                    <Typography style={{ fontSize: '10px', color: '#757575' }} >{row.subName}</Typography>
                    }
                  </TableCell>
                  <TableCell sx={{ minWidth: 200, padding: '13px' ,paddingLeft: '50px'}}>{row.category}</TableCell>
                  <TableCell>
                    <Button
                      sx={{
                        backgroundColor: row.status === 'Inactive' ? '#F5C6CB' : '#CBF2E0',
                        color: row.status === 'Inactive' ? '#721C24' : '#008545',borderRadius: '5px',fontSize: '12px',padding: '3px 8px',textTransform: 'capitalize'
                      }}
                    >
                      {row.status}
                    </Button>
                  </TableCell>
                  <TableCell sx={{ padding: '13px' }}>
                    <MoreVertIcon
                      onClick={() => {
                        setEditItem(row);
                        setOpenEdit(true);
                      }}
                    />
                  </TableCell>

                  {openEdit && editItem && editItem.code === row.code && (
                    <Card
                      sx={{ ...table.edit }}>
                      <Typography sx={{fontSize:'13px',marginTop: '5px'}}>Edit</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                        <Typography
                          onClick={estatus}
                          sx={{ cursor: 'pointer',fontSize:'14px'}}>
                          {editItem.status === 'Active' ? 'Inactive' : 'Active'}
                        </Typography>
                      </Box>
                    </Card>
                  )}

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', gap: '30px' ,marginTop:'30px' }}>
          <Select 
            value={prows}
            onChange={handleChangeRowsPerPage}
            sx={{ width: '100px', height: '24px', fontSize: '12px' }}
            IconComponent={ExpandMoreIcon}
          >
            {[5, 10, 25].map((rows) => (
              <MenuItem sx={{ fontSize: '12px', color: 'CFD2D4' }} key={rows} value={rows}>
                {rows} / Page
              </MenuItem>
            ))}
          </Select>

          <Typography sx={{ color: '#90969A', fontSize: '12px' }}>
            Showing {page * prows + 1} - {Math.min((page + 1) * prows, picker.length)} of {picker.length} records
          </Typography>

          <Pagination
            sx={{...table.pagination}}
            count={Math.ceil(picker.length / prows)}
            page={page + 1}
            onChange={handleChangePage}
          />
        </Box>

        {openCard && (
          <Card sx={{ ...table.synccard }}>
            <Box sx={{ ...table.syncicon }}>
              <SyncIcon sx={{ fontSize: '24px', color: '#4DD0E1' }} />
            </Box>

            <Typography sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              Sync items from POS?
            </Typography>
            <Typography sx={{ color: '#616A70', marginBottom: '20px' }}>
              New items will be synced from the POS.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
              <Button
                onClick={handleCloseCard}
                sx={{ color: '#FFA048', border: '1px solid #FFA048 ', flex: 1,backgroundColor:'#FFFFFF' }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleCloseCard}
                sx={{ backgroundColor: '#FF9A4C', color: '#FFFFFF', flex: 1 }}
              >
                Sync
              </Button>
            </Box>
          </Card>
        )}

              {bulkOpen && !bulkExport && !bulkImport && (
                <Card  sx={{
                  backgroundColor: '#FFFFFF',
                  padding: '10px',
                  borderRadius: '5px',
                  left: '65%',
                  top:'70px',
                  position: 'absolute',
                  zIndex: 500,
                  width:'120px',
                }}
                >
                  <Typography sx={{fontSize:'12px',fontWeight:'bold',cursor:'pointer'}}onClick={() => setBulkImport(true)} >Bulk import items</Typography>  
                  <Typography sx={{fontSize:'12px', marginTop:'8px',fontWeight:'bold',cursor:'pointer'}} onClick={() => setBulkExport(true)}>Bulk export items</Typography>
                </Card>
              )}

              {bulkExport && (
                <Box sx={{...table.export1}}>
                <Box
                  sx={{...table.export2}}>
                  <FileDownloadOutlinedIcon sx={{color:'#DF3813'}}/>
                </Box>

                <Typography sx={{fontSize:'15px' , fontWeight:'bold' ,marginTop:'15px'}}>
                  Bulk export items
                </Typography>
                <Typography sx={{fontSize:'15px' ,marginTop:'15px' , color: '#616A70'}}>
                  154 items will be exported in .CSV format
                </Typography>
                <Box sx={{ display: 'flex', gap: 10 ,marginLeft:'30px',marginTop:'20px'}}>
                  <Button variant="outlined" color="warning" sx={{ borderRadius: 2 ,textTransform: 'capitalize'}} 
                  onClick={() => {
                    setBulkExport(false);
                    setBulkOpen(false);
                  }}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="warning" sx={{ borderRadius: 2 ,textTransform: 'capitalize'}}>
                    Export
                  </Button>
                </Box>
                </Box>
              )}


              { bulkImport && (
                      <Box sx={{...table.import1}}>

                        <IconButton
                          sx={{ position: 'absolute', top: 2, right: 8 }}
                          onClick={() => {
                            setBulkImport(false);
                            setBulkOpen(false);
                          }}
                        >
                          <CloseIcon />
                        </IconButton>
                        <IconButton 
                        sx={{...table.import2}}>
                          <ReportProblemOutlinedIcon sx={{color:'#D17800'}}/>
                        </IconButton>
                        <Typography sx={{marginTop:'25px' , fontSize:'15px' ,fontWeight:'bold'}}>Data import failed</Typography>
                        <Typography sx={{marginTop:'25px'}}>Failed to import 4 records listed in the below datasheet. Download the file and reupload with proper data to successfully import all records.</Typography>
                        <Box sx={{ display: 'flex', marginLeft:'10px',marginTop:'20px'}}>
                          <Button sx={{  borderRadius: 2, backgroundColor: '#FF9E4E', color: 'white' , width:'100%' }}>
                            <FileDownloadOutlinedIcon sx={{color:'white' ,marginRight:'15px'}}/>
                            Download
                          </Button>
                        </Box>
                      </Box>
              )}
      </Grid>
    </Box>
  );
};

export default ItemTable;
