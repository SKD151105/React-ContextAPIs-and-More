import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  category: "all",
  status: "all",
  favoritesOnly: false,
  sortBy: "updated",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    toggleFavoritesOnly: (state) => {
      state.favoritesOnly = !state.favoritesOnly;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    clearFilters: () => initialState,
  },
});

export const selectFilters = (state) => state.filters;

export const {
  setSearchTerm,
  setCategory,
  setStatus,
  toggleFavoritesOnly,
  setSortBy,
  clearFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
