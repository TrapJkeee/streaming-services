import { createSlice } from "@reduxjs/toolkit";
import { fetchAllMoviesData } from "./moviesData";
import { MoviesSlice } from "types";

const initialState: MoviesSlice = {
  status: "idle",
  data: [],
};

const moviesSlice = createSlice({
  name: "moviesData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllMoviesData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAllMoviesData.fulfilled, (state, action) => {
      state.status = "finished";
      state.data = action.payload;
    });
    builder.addCase(fetchAllMoviesData.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default moviesSlice.reducer;
