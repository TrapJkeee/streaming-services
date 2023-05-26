import { createSlice } from "@reduxjs/toolkit";
import { fetchAllMoviesData } from "./moviesData";
import { MoviesSlice } from "types";

const initialState: MoviesSlice = {
  status: "idle",
  data: [],
  page: 1,
};

const moviesSlice = createSlice({
  name: "moviesData",
  initialState,
  reducers: {
    addPage(state) {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllMoviesData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAllMoviesData.fulfilled, (state, action) => {
      state.status = "finished";
      state.data = action.payload;
      // state.data = state.data.concat(action.payload);
    });
    builder.addCase(fetchAllMoviesData.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const moviesAction = moviesSlice.actions;

export default moviesSlice.reducer;
