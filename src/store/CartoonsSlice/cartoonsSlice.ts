import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCartoonsData } from "./cartoonsData";
import { MoviesSlice } from "types";

const initialState: MoviesSlice = {
  status: "idle",
  data: [],
};

const cartoonsSlice = createSlice({
  name: "cartoonsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCartoonsData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAllCartoonsData.fulfilled, (state, action) => {
      state.status = "finished";
      state.data = action.payload;
    });
    builder.addCase(fetchAllCartoonsData.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default cartoonsSlice.reducer;
