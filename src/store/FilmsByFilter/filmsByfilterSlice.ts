import { createSlice } from "@reduxjs/toolkit";
import { fetchMoviesByFilterData } from "./filmsByFilterData";
import { MoviesSlice } from "types";

const initialState: MoviesSlice = {
  status: "idle",
  data: [],
};

const filmsByFilterSlice = createSlice({
  name: "filmsByFilterSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesByFilterData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMoviesByFilterData.fulfilled, (state, action) => {
      state.status = "finished";
      state.data = action.payload;
    });
    builder.addCase(fetchMoviesByFilterData.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default filmsByFilterSlice.reducer;
