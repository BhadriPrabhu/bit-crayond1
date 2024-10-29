import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ArrowIcon from "../../assets/icons/arrow";
import Bell from "../../assets/icons/bell";
import Boy from "../../assets/images/boy";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, Grid2 } from "@mui/material";
import Search from "../../assets/icons/search";
import Paper from "@mui/material/Paper";
import Add from "../../assets/icons/add";
import Pencil from "../../assets/icons/pencil";
import InputBase from "@mui/material/InputBase";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import styles from "./styles1";
import Customericon from "../../assets/icons/cusicon";

export default function ButtonAppBar(props) {
  const {
    customername,
    basicinfotxt,
    addcredits,
    edit,
    info,
    transaction,
    offers,
  } = props;

  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [credits, setCredits] = React.useState("");
  const [editValue, setEditValue] = React.useState("");

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

  return (
    <>
      <Grid2 container spacing={2} sx={styles.mainbox}>
        <Box sx={styles.appbarbox}>
          <AppBar position="static" sx={styles.appbar}>
            <Toolbar>
              <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={styles.arrowiconbtn}>
                <ArrowIcon />
              </IconButton>
              <Typography sx={styles.cusname}>{customername}</Typography>
              <Box sx={styles.bellandboy}>
                <IconButton color="inherit">
                  <Bell />
                </IconButton>
                <Box>
                  <Boy />
                  
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>

        <Grid2 sx={styles.basicinfogrid}>
          <Box sx={styles.basicinfobox}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={styles.basictxt}>{basicinfotxt}</Box>
              <Box sx={styles.addeditbox}>
                <Button sx={styles.addbtn} onClick={handleAddClickOpen}>
                  <Add /> {addcredits}
                </Button>
                <Button sx={styles.editbtn} onClick={handleEditClickOpen}>
                  <Pencil /> {edit}{" "}
                </Button>
              </Box>
            </Box>
            <Box sx={styles.infobox}>
              {info.map((item) => (
                <Box key={item.name} sx={styles.infoindividualbox}>
                  {item.id == 2 ? (
                    <Box sx={{ ...styles.infoicon, marginLeft: "33px" }}>
                      <item.icon />
                    </Box>
                  ) : item.id == 6 ? (
                    <Box sx={{ ...styles.infoicon, marginLeft: "-15px" }}>
                      <item.icon />
                    </Box>
                  ) : (
                    <Box sx={{ ...styles.infoicon, marginLeft: "10px" }}>
                      <item.icon />
                    </Box>
                  )}
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    {item.id == 2 ? (
                      <Box sx={{ ...styles.infoname, width: "120px" }}>{item.name}</Box>
                    ) : (
                      <Box sx={{ ...styles.infoname, width: "150px" }}>{item.name}</Box>
                    )}
                    {item.id == 2 ? (
                      <Box sx={styles.infodata}>{item.data}</Box>
                    ) : item.id == 7 ? (
                      <Box sx={{ ...styles.infodata, width: "500px" }}>{item.data}</Box>
                    ) : (
                      <Box sx={styles.infodata}>{item.data}</Box>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid2>

        <Grid2 sx={styles.transactiongrid}>
          <Box sx={styles.transactionbox}>
            <Box sx={styles.secondcontainer}>
              <Box sx={styles.transactiontxt}>{transaction}</Box>
              <Paper component="form" sx={styles.searchbar}>
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <Search />
                </IconButton>
                <InputBase sx={styles.inputbase} placeholder="Search by offers" inputProps={{ "aria-label": "search by offers" }} />
              </Paper>
              <Box sx={styles.scrollablecontent}>
                {offers.map((item) => (
                  <Box key={item.id} sx={styles.transindividualbox}>
                    <Box>
                      <Box sx={styles.time}>{item.timeanddate}</Box>
                      <Box sx={styles.distxtandnamebox}>
                        <Box sx={styles.distxt}>{item.discounttxt}</Box>
                        <Box sx={styles.name}>{item.name}</Box>
                      </Box>
                      {item.id == 2 ? (
                        <Box sx={styles.feedback}>{item.feedback}</Box>
                      ) : (
                        <Button sx={styles.disname}>{item.discountname}</Button>
                      )}
                    </Box>
                    {item.status === "Redeemed" ? (
                      <Button sx={styles.disstatus}>{item.status}</Button>
                    ) : (
                      <Box>
                        <Box sx={styles.credits}>
                          {item.credits}
                          <Typography sx={styles.SAR}>{item.SAR}</Typography>
                        </Box>
                        <Button sx={{ ...styles.disstatus, backgroundColor: "rgba(203, 242, 224, 1)", width: "150px", marginTop: "5px" }}>
                          {item.status}
                        </Button>
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid2>
      </Grid2>


      <Dialog open={addOpen} onClose={handleCloseAdd}>
        <DialogTitle>Add Credits</DialogTitle>
        <DialogContent>
            <Box ><Box sx={styles.cusicon}><Customericon/></Box><Box>{customername}</Box></Box>
          <TextField
            autoFocus
            margin="dense"
            label="Credits"
            type="number"
            fullWidth
            variant="outlined"
            value={credits}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd}>{addcredits}</Button>
         
        </DialogActions>
      </Dialog>

      <Dialog open={editOpen} onClose={handleCloseEdit}>
        <DialogTitle>Edit Information</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Edit Value"
            type="text"
            fullWidth
            variant="outlined"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button onClick={handleEditSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
