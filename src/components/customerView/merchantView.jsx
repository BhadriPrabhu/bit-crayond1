import * as React from "react";
import styles from "./styles";
import Discount from "../../assets/icons/discount";
import Customer from "../../assets/icons/customer";
import Bell from "../../assets/icons/bell";
import Boy from "../../assets/images/boy";
import search from "../../assets/icons/search";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Divider,
  Grid2,
  Input,
  FilledInput,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormHelperText,
  FormControl,
  Paper,
  InputBase,
} from "@mui/material";
import ArrowIcon from "../../assets/icons/arrow";
import Add from "../../assets/icons/add";
import Pencil from "../../assets/icons/pencil";
import Cancel from "../../assets/icons/cancel";
import Info from "../../assets/icons/info";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { Select, MenuItem } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function MerchantView(props) {
  const {
    customername,
    basicinfotxt,
    addcredits,
    edit,
    info,
    transaction,
    offers,
    lcredits,
    amount,
    sar,
    equivalent,
    creditsnum,
    remarks,
    edittxt,
    phnum,
    save,
  } = props;
  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [credits, setCredits] = React.useState("");
  const [editValue, setEditValue] = React.useState("");
  const [selectedCountryCode, setSelectedCountryCode] = React.useState(
    phnum[0]?.label || ""
  );
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleAddClickOpen = () => setAddOpen(true);
  const handleEditClickOpen = () => setEditOpen(true);
  const handleCloseAdd = () => setAddOpen(false);
  const handleCloseEdit = () => setEditOpen(false);

  const handleAddCredits = () => {
    console.log("Credits added:", credits);
    setCredits("");
    handleCloseAdd();
  };

  const handleEditSubmit = () => {
    console.log("Edited value:", editValue);
    setEditValue("");
    handleCloseEdit();
  };
  const filteredOffers = offers.filter((item) =>
    item.discounttxt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase())||
    item.status.toLowerCase().includes(searchTerm.toLowerCase())||
(item.discountname && item.discountname.toLowerCase().includes(searchTerm.toLowerCase()))    
  );

  return (
    <>
      <Grid2 sx={styles.wholescreen}>
        <Box sx={styles.header}>
          <AppBar position="static" sx={styles.appbar}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={styles.arrowiconbtn}
              >
                <ArrowIcon />
              </IconButton>
              <Typography sx={styles.customername}>{customername}</Typography>
              <Button color="inherit">
                <Bell />
              </Button>
              <Box>
                <Boy />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Grid2 sx={styles.infogrid}>
          <Box sx={styles.infobox}>
            <Box sx={styles.basicrow}>
              <Box sx={styles.basictxt}>{basicinfotxt}</Box>
              <Box sx={styles.buttonGroup}>
                <Button sx={styles.addbtn} onClick={handleAddClickOpen}>
                  <Add /> {addcredits}
                </Button>
                <Button sx={styles.editbtn} onClick={handleEditClickOpen}>
                  <Pencil /> {edit}
                </Button>
              </Box>
            </Box>
            <Box sx={styles.infomap}>
              {info.map((item) => (
                <Box key={item.id} sx={styles.individualbox}>
                  {item.id === 7 ? (
                    <Box sx={styles.icon7box}>
                      <item.icon />
                    </Box>
                  ) : (
                    <Box sx={styles.iconbox}>
                      <item.icon />
                    </Box>
                  )}
                  <Box sx={styles.nameanddata}>
                    <Box sx={styles.cusname}>{item.name}</Box>
                    {item.id === 7 ? (
                      <Box sx={{ ...styles.data, width: "500px" }}>
                        {item.data}
                      </Box>
                    ) : (
                      <Box sx={styles.data}>{item.data}</Box>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid2>
        <Grid2 sx={styles.transactiongrid}>
          <Box sx={styles.transactionhistorybox}>
            <Box sx={styles.transactionhistorytxt}>{transaction}</Box>
            <Box sx={styles.searchbox}>
              <Paper component="form" sx={styles.searchbar}>
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <Search />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search by offer"
                  inputProps={{ "aria-label": "Search by offer" }}
                  value={searchTerm} // Bind search input value
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
                />
              </Paper>
            </Box>
            <Box sx={styles.scrollablecontent}>
              {filteredOffers.length>0?(filteredOffers.map((item) => (
                <Box sx={styles.individualboxtransaction}>
                  <Box sx={styles.leftside}>
                    <Box sx={styles.time}>{item.timeanddate}</Box>
                    <Box sx={styles.discounttxtandname}>
                      <Box sx={styles.discounttxt}>{item.discounttxt} </Box>
                      <Box sx={styles.namecus}>{item.name}</Box>
                    </Box>
                    {item.id === 2 ? (
                      <Box sx={styles.feedback}>{item.feedback}</Box>
                    ) : (
                      <Box sx={styles.discountname}>{item.discountname}</Box>
                    )}
                  </Box>
                  <Box sx={styles.rightside}>
                    {item.id === 2 || item.id === 5 ? (
                      <Box sx={styles.creditsandstatus}>
                        <Box sx={styles.creditsandsar}> 
                          <Box sx={styles.creditstxt}>{item.credits}</Box>
                          <Typography sx={styles.sar}>{item.SAR}</Typography>
                        </Box>
                        <Box sx={styles.notredeemed}>{item.status}</Box>
                      </Box>
                    ) : (
                      <Box
                        sx={styles.redeemed}
                      >
                        {item.status}
                      </Box>
                    )}
                  </Box>
                </Box>
                ))
              ) : (
                <Box sx={styles.noResults}>No results found</Box>
              )}
            </Box>
          </Box>
        </Grid2>
      </Grid2>
      <Dialog open={addOpen} onClose={handleCloseAdd} sx={styles.adddialogbox}>
        <Box sx={styles.headerofcreditsbox}>
          <DialogTitle>{addcredits}</DialogTitle>
          <IconButton sx={styles.cancelbtn} onClick={handleCloseAdd}>
            <Cancel />
          </IconButton>
        </Box>
        <DialogContent>
          <Box sx={styles.customerprofilecredits}>
            <Box sx={styles.cusicon}>
              <Customer />
            </Box>
            <Box sx={styles.nameandcredits}>
              <Box sx={styles.creditscustomer}>{customername}</Box>
              <Box sx={styles.lcredits}>{lcredits}</Box>
            </Box>
          </Box>
          <FormControl
            fullWidth
            sx={styles.inputfieldofamount}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-amount" sx={styles.amounttxt}>
              {amount}
            </InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              endAdornment={
                <InputAdornment position="end" sx={styles.sartxt}>
                  {sar}
                </InputAdornment>
              }
            />
          </FormControl>
          <Box sx={styles.disandcredits}>
            <Box sx={styles.disandequi}>
              <Box sx={styles.discountbox}>
                <Discount />
              </Box>
              <Box sx={styles.equivalent}>{equivalent}</Box>
            </Box>
            <Box sx={styles.creditsnum}>{creditsnum}</Box>
          </Box>
          <FormControl fullWidth sx={styles.remarkbox} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">{remarks}</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
            />
          </FormControl>
        </DialogContent>
        <DialogActions sx={styles.footerbox}>
          <Box sx={styles.addcreditsbox}>
            <Button onClick={handleCloseAdd} sx={styles.addcreditsbtn}>
              {addcredits}
            </Button>
          </Box>
        </DialogActions>
      </Dialog>

      <Dialog open={editOpen} onClose={handleCloseEdit} sx={styles.editpopup}>
        <Box sx={styles.editheader}>
          <DialogTitle sx={styles.edittxt}>{edittxt}</DialogTitle>
          <IconButton
            sx={{ ...styles.cancelbtn, marginTop: "5px" }}
            onClick={handleCloseEdit}
          >
            <Cancel />
          </IconButton>
        </Box>
        <DialogContent sx={{ overflowX: "hidden" }}>
          <TextField
            required
            id="standard-required"
            label="Customer name"
            defaultValue="Jessie pinkman"
            variant="standard"
            fullWidth
            sx={{ ...styles.customer_name, marginTop: "0px" }}
          />
          <Box sx={styles.dropdownandtextfield}>
            <FormControl fullWidth variant="outlined" sx={styles.formcontrol}>
              <Box sx={styles.boxofphonenumber}>
                <Select
                  value={selectedCountryCode}
                  onChange={(e) => setSelectedCountryCode(e.target.value)}
                  variant="outlined"
                  sx={styles.dropdownmenu}
                  displayEmpty
                >
                  {phnum.map((option) => (
                    <MenuItem key={option.id} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                <Divider sx={styles.dividerphnum} orientation="vertical" />
                <TextField
                  required
                  id="standard-required"
                  label="Mobile number"
                  defaultValue="7890798765"
                  variant="standard"
                  fullWidth
                  sx={styles.mobnumbox}
                />
              </Box>
            </FormControl>
          </Box>
          <TextField
            required
            id="standard-required"
            label=" Email"
            defaultValue="Jessie@gmail.com"
            variant="standard"
            fullWidth
            sx={{ ...styles.customer_name, marginTop: "20px" }}
          />
          <TextField
            required
            id="standard-required"
            label="Address"
            defaultValue="Address display here"
            variant="standard"
            fullWidth
            sx={{ ...styles.customer_name, marginTop: "0px" }}
          />
          <Box sx={styles.onboardbox}>
            <FormControlLabel
              control={<Checkbox defaultChecked sx={styles.checkbox} />}
              label="Onboard to loyalty"
            />
            <IconButton sx={{ marginLeft: "-15px" }}>
              <Info />
            </IconButton>
          </Box>
        </DialogContent>
        <DialogActions sx={styles.footerbox}>
          <Box sx={styles.addcreditsbox}>
            <Button onClick={handleCloseEdit} sx={styles.addcreditsbtn}>
              {save}
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
}