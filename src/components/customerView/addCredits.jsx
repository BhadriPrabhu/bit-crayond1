// AddCreditsPopup.jsx
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const AddCreditsPopup = ({ open, onClose }) => {
  const [credits, setCredits] = useState("");

  const handleAddCredits = () => {
    // Logic for adding credits can be implemented here
    console.log("Credits added:", credits);
    setCredits(""); // Clear the input field
    onClose(); // Close the dialog
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Credits</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Enter Credits"
          type="number"
          fullWidth
          variant="outlined"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddCredits} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCreditsPopup;
