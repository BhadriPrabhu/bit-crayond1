import { Toolbar } from "@mui/material";
import "./App.css";
import ItemTable from "./components/maincontent/mainContent";
import Sidebar from "./components/sidenavbar/sidenavbar";
import TopNavbar from "./components/topnavbar/topnavbar";
import Screen1 from "./screens/itemManagement_screen/screen1";
import Moreverticon from "./components/moreverticon/Moreverticon";
import FilterModal from "./components/filtericon/filtericon";
import SortByComponent from "./components/sorticon/sorticon";

function App() {
  return (
    <div className="el1">
      {/* <Sidebar/> */}
      {/* <TopNavbar/> */}
      <Screen1/>
      {/* <ItemTable/> */}
      {/* <Moreverticon/> */}
      {/* <FilterModal/> */}
      {/* <Simple/> */}
      {/* <SortByComponent/> */}
      {/* <Sample/> */}
    </div>  


  )
}
export default App;