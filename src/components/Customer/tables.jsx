import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import buttonActive from './button-active';
import buttonInactive from './button-Inactive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Stack } from '@mui/material';
import { Customerstyle } from './Customerstyle';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function createData(
  name,
  earned,
  spent,
  earnings,
  date,
  status,
  icon
  ) {
  return { name, earned, spent, earnings, date, status, icon };
}

const rows = [
  createData('Sam richard', 168, 68,"SAR 200.00", "29-10-2023",buttonActive,MoreVertIcon),
  createData('Srikrishna Elagovan', 200, 123, "SAR 200.00", "29-11-2023",buttonInactive,MoreVertIcon),
  createData('Harini Manikandan', 250, 267, "SAR 200.00", "29-09-2023",buttonInactive,MoreVertIcon),
  createData('Harish Rajkumar', 300, 345, "SAR 200.00", "29-09-2023",buttonActive,MoreVertIcon),
  createData('Gowtham Anandh', 301, 196, "SAR 200.00", "29-09-2023",buttonActive,MoreVertIcon),
  createData('Harish', 304, 123, "SAR 200.00", "29-11-2023",buttonInactive,MoreVertIcon),
  createData('richard', 307, 68,"SAR 200.00", "29-10-2023",buttonActive,MoreVertIcon),
  createData('Harini', 310, 267, "SAR 200.00", "29-09-2023",buttonInactive,MoreVertIcon),
  createData('Rajkumar', 320, 345, "SAR 200.00", "29-09-2023",buttonActive,MoreVertIcon),
  createData('Gowtham', 350, 196, "SAR 200.00", "29-09-2023",buttonActive,MoreVertIcon),
  createData('Sam', 358, 68,"SAR 200.00", "29-10-2023",buttonActive,MoreVertIcon),
  createData('Elagovan', 375, 123, "SAR 200.00", "29-11-2023",buttonInactive,MoreVertIcon),
  createData('Manikandan', 392, 267, "SAR 200.00", "29-09-2023",buttonInactive,MoreVertIcon),
  createData('Rajkumar', 399, 345, "SAR 200.00", "29-09-2023",buttonActive,MoreVertIcon),
  createData('Anandh', 410, 196, "SAR 200.00", "29-09-2023",buttonActive,MoreVertIcon),
  createData('Sanjay', 458, 68,"SAR 200.00", "29-10-2023",buttonActive,MoreVertIcon),
  createData('krishna', 450, 123, "SAR 200.00", "29-11-2023",buttonInactive,MoreVertIcon),
  createData('Mani', 470, 267, "SAR 200.00", "29-09-2023",buttonInactive,MoreVertIcon),
  createData('kumar', 480, 345, "SAR 200.00", "29-09-2023",buttonActive,MoreVertIcon),
  createData('Anandh', 490, 196, "SAR 200.00", "29-09-2023",buttonActive,MoreVertIcon),
  createData('richard', 519, 68,"SAR 200.00", "29-10-2023",buttonActive,MoreVertIcon),
  createData('Elagovan', 600, 123, "SAR 200.00", "29-11-2023",buttonInactive,MoreVertIcon),
  createData('Harini', 650, 267, "SAR 200.00", "29-09-2023",buttonInactive,MoreVertIcon),
  createData('Harish kumar', 700, 345, "SAR 200.00", "29-09-2023",buttonActive,MoreVertIcon),
  createData('Gowtham', 800, 196, "SAR 200.00", "29-09-2023",buttonActive,MoreVertIcon)
];



export default function Tables() {

    const [page,setPage] = useState(1);
    const [rowsperpage,setRowsPerPage] = useState(5);

    const pageChange = (event, newPage) => {
      setPage(newPage);
    };
    
    const rowChange = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(1);
    }
    const totalRecords = rows.length; 
    const totalPages = Math.ceil(totalRecords / rowsperpage);


    const start = (page - 1) * rowsperpage + 1;
    const end = Math.min(page * rowsperpage, totalRecords);
  

  return (
  <Box>
    <Box sx={Customerstyle.table1}>
          <TableContainer component={Paper} sx={Customerstyle.table3}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={Customerstyle.table4}>
                  <TableCell sx={Customerstyle.table2}>Customer name</TableCell>
                  <TableCell align="left" sx={Customerstyle.table6}>Points earned</TableCell>
                  <TableCell align="left" sx={Customerstyle.table8}>Points spent</TableCell>
                  <TableCell align="left" sx={Customerstyle.table7}>Total earnings</TableCell>
                  <TableCell align="left" sx={Customerstyle.table2}>Date of onboarding</TableCell>
                  <TableCell align="left" sx={Customerstyle.table2}>Status</TableCell>
                  <TableCell sx={Customerstyle.table5}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice((page - 1) * rowsperpage, page * rowsperpage).map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, ...Customerstyle.table9 }}
                  >
                    <TableCell component="th" scope="row" sx={Customerstyle.cell1}>
                      {row.name}
                    </TableCell>
                    <TableCell align="left" sx={Customerstyle.cell3}>{row.earned}</TableCell>
                    <TableCell align="left" sx={Customerstyle.cell6}>{row.spent}</TableCell>
                    <TableCell align="center" sx={Customerstyle.cell4}>{row.earnings}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left"><row.status/></TableCell>
                    <TableCell align="left" sx={Customerstyle.cell5}><row.icon /></TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={Customerstyle.page1}>
            <Box sx={Customerstyle.page2}>
                
              <Select sx={Customerstyle.select}
              value={rowsperpage}
              onChange={rowChange}
              size="small"
              variant="outlined"
            >
              <MenuItem value={5} sx={Customerstyle.text1}>5/Page</MenuItem>
              <MenuItem value={10}>10/Page</MenuItem>
              <MenuItem value={25}>25/Page</MenuItem>
            </Select>
            <Typography sx={Customerstyle.text2}>
              Showing {start}-{end} of {totalRecords} records
            </Typography>

            </Box>
            <Stack>
                <Pagination sx={Customerstyle.pagination}
                component="div"
                page={page}
                count={totalPages}
                onChange={pageChange}
                color= "primary"
                shape="rounded">

                </Pagination>
            </Stack>
          </Box>
    </Box>
  </Box>
  );
}