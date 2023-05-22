import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCartoonsByFilterData,
  fetchMoviesByFilterData,
  fetchTVSeriesByFilterData,
} from "./filmsByFilterData";
import { Movies, MoviesSlice, Status } from "types";

type filmsByFilterSlice = {
  status: Status;
  moviesFilter: Movies[];
  serialsFilter: Movies[];
  cartoonsFilter: Movies[];
};

const initialState: filmsByFilterSlice = {
  status: "idle",
  moviesFilter: [],
  cartoonsFilter: [],
  serialsFilter: [],
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
      state.moviesFilter = action.payload;
    });
    builder.addCase(fetchMoviesByFilterData.rejected, (state) => {
      state.status = "error";
    });

    builder.addCase(fetchTVSeriesByFilterData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTVSeriesByFilterData.fulfilled, (state, action) => {
      state.status = "finished";
      state.serialsFilter = action.payload;
    });
    builder.addCase(fetchTVSeriesByFilterData.rejected, (state) => {
      state.status = "error";
    });

    builder.addCase(fetchCartoonsByFilterData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCartoonsByFilterData.fulfilled, (state, action) => {
      state.status = "finished";
      state.cartoonsFilter = action.payload;
    });
    builder.addCase(fetchCartoonsByFilterData.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default filmsByFilterSlice.reducer;
