import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  searchTerm: '',
  page: 0,
  rowsPerPage: 10,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
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
    sortItems: (state, action) => {
      const sortOrder = action.payload;
      state.items = [...state.items].sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.itemName.localeCompare(b.itemName);
        } else if (sortOrder === 'desc') {
          return b.itemName.localeCompare(a.itemName);
        } else if (sortOrder === 'recent') {
          return a.index - b.index; 
        }
      });
    },
  },
});

export const { setItems, setSearchTerm, setPage, setRowsPerPage, sortItems } = itemsSlice.actions;


export const selectPaginatedItems = (state) => {
  const { page, rowsPerPage, items } = state.items;
  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  return items.slice(start, end);
};

export const selectTotalRecords = (state) => state.items.items.length;

export default itemsSlice.reducer;
