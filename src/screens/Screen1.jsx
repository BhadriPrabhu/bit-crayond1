import Tables from "../components/Customer/tables"
import SearchBar from "../components/Customer/search-bar";
import Topbar from "../components/Customer/topbar";
import { Box } from "@mui/material";


function Screen1() {
  return (
    <Box>
      <Topbar/>
      <SearchBar/>
      <Tables/>
    </Box>
  )
}

export default Screen1;
