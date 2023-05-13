import { createSlice } from "@reduxjs/toolkit";
import { Movies, MoviesSlice } from "types";
import { fetchAllSeriesData } from "./seriesData";

const initialState: MoviesSlice = {
  data: [],
  status: "idle",
};

const seriesSlice = createSlice({
  name: "seriesData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllSeriesData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAllSeriesData.fulfilled, (state, action) => {
      state.status = "finished";
      state.data = action.payload;
    });
    builder.addCase(fetchAllSeriesData.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default seriesSlice.reducer;
