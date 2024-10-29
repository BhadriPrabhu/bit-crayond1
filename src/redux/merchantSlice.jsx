import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addOpen: false,  // Tracks if the Add Dialog is open
  editOpen: false, // Tracks if the Edit Dialog is open
  credits: "",     // Stores credits information
  editValue: "",   // Holds the value to edit
  selectedCountryCode: "",  // Holds the selected country code
  mobileNumber: "", // Stores the entered mobile number
  searchTerm: "",   // Stores the search term for filtering offers
  page: 0,          // Tracks the current page in pagination
  rowsPerPage: 5,   // Stores the number of rows per page
};

const merchantSlice = createSlice({
  name: "merchant",
  initialState,
  reducers: {
    toggleAddDialog: (state) => {
      state.addOpen = !state.addOpen;
    },
    toggleEditDialog: (state) => {
      state.editOpen = !state.editOpen;
    },
    setCredits: (state, action) => {
      state.credits = action.payload;
    },
    setEditValue: (state, action) => {
      state.editValue = action.payload;
    },
    setSelectedCountryCode: (state, action) => {
      state.selectedCountryCode = action.payload;
    },
    setMobileNumber: (state, action) => {
      state.mobileNumber = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload;
    },
  },
});

export const {
  toggleAddDialog,
  toggleEditDialog,
  setCredits,
  setEditValue,
  setSelectedCountryCode,
  setMobileNumber,
  setSearchTerm,
  setPage,
  setRowsPerPage,
} = merchantSlice.actions;

export default merchantSlice.reducer;
