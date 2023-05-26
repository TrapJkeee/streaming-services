import { createSlice } from "@reduxjs/toolkit";
import { MoviesSlice } from "types";
import { fetchAllSeriesData } from "./seriesData";

const initialState: MoviesSlice = {
  data: [],
  status: "idle",
  page: 10,
};

const seriesSlice = createSlice({
  name: "seriesData",
  initialState,
  reducers: {
    addPage(state) {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllSeriesData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAllSeriesData.fulfilled, (state, action) => {
      state.status = "finished";
      state.data = action.payload;
      // state.data = state.data.concat(action.payload);
    });
    builder.addCase(fetchAllSeriesData.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const seriesAction = seriesSlice.actions;

export default seriesSlice.reducer;
