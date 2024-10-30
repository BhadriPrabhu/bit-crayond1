import { TextField, InputAdornment, Paper, List, ListItem, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Customerstyle } from "./Customerstyle";
import { useRef, useEffect, useState } from "react";

// Extended data for suggestions
const rows = [
  { id: 1, name: 'Sam Richard', amount: 'SAR 200.00', date: '29-10-2023' },
  { id: 2, name: 'Srikrishna Elagovan', amount: 'SAR 200.00', date: '29-11-2023' },
  { id: 3, name: 'Harini Manikandan', amount: 'SAR 200.00', date: '29-09-2023' },
  { id: 4, name: 'Harish Rajkumar', amount: 'SAR 200.00', date: '29-09-2023' },
  { id: 5, name: 'Gowtham Anandh', amount: 'SAR 200.00', date: '29-09-2023' },
  { id: 6, name: 'Harish', amount: 'SAR 200.00', date: '29-11-2023' },
  { id: 7, name: 'Richard', amount: 'SAR 200.00', date: '29-10-2023' },
  { id: 8, name: 'Harini', amount: 'SAR 200.00', date: '29-09-2023' },
  { id: 9, name: 'Rajkumar', amount: 'SAR 200.00', date: '29-09-2023' },
  { id: 10, name: 'Gowtham', amount: 'SAR 200.00', date: '29-09-2023' },
  { id: 11, name: 'Sam', amount: 'SAR 200.00', date: '29-10-2023' },
  { id: 12, name: 'Elagovan', amount: 'SAR 200.00', date: '29-11-2023' },
  { id: 13, name: 'Manikandan', amount: 'SAR 200.00', date: '29-09-2023'},
  { id: 14, name: 'Rajkumar', amount: 'SAR 200.00', date: '29-09-2023'},
  { id: 15, name: 'Anandh', amount: 'SAR 200.00', date: '29-09-2023'},
  { id: 16, name: 'Sanjay', amount: 'SAR 200.00', date: '29-10-2023'},
  { id: 17, name: 'krishna', amount: 'SAR 200.00', date: '29-11-2023'},


];

function Input() {
  const searchInputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = rows.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm]);

  return (
    <div style={{ position: "relative" }}>
      <TextField
        id="search"
        variant="outlined"
        type="search"
        size="small"
        placeholder="Search by customer name"
        inputRef={searchInputRef}
        sx={Customerstyle.search3}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={Customerstyle.search4} />
            </InputAdornment>
          ),
        }}
      />

      {/* Display filtered suggestions as a dropdown */}
      {searchTerm && filteredData.length > 0 && (
        <Paper
          sx={{
            position: "absolute",
            top: "40px",
            width: "100%",
            zIndex: 1,
            maxHeight: "450px",
            overflowY: "auto"
          }}
        >
          <List>
            {filteredData.map((item) => (
              <ListItem key={item.id} button onClick={() => setSearchTerm(item.name)}>
                <ListItemText primary={item.name} secondary={`${item.amount} - ${item.date}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
}

export default Input;

