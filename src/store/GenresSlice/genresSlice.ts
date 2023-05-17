import { createSlice } from "@reduxjs/toolkit";
import { Movies } from "types";
import {
  fetchComedyFilmsData,
  fetchDramaFilmsData,
  fetchNewCartoonsData,
  fetchNewFilmsData,
  fetchThrillerFilmsData,
} from "./genresData";

type GenresSlice = {
  status: "idle" | "loading" | "finished" | "error";
  newFilms: Movies[];
  newCartoons: Movies[];
  comedyFilms: Movies[];
  daramaFilms: Movies[];
  thrillerFilms: Movies[];
};

const initialState: GenresSlice = {
  status: "idle",
  newFilms: [],
  comedyFilms: [],
  daramaFilms: [],
  newCartoons: [],
  thrillerFilms: [],
};

const genresSlice = createSlice({
  name: "genresData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewFilmsData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchNewFilmsData.fulfilled, (state, action) => {
      state.status = "finished";
      state.newFilms = action.payload;
    });
    builder.addCase(fetchNewFilmsData.rejected, (state) => {
      state.status = "error";
    });
    // builder.addCase(fetchNewCartoonsData.pending, (state) => {
    //   state.status = "loading";
    // });
    // builder.addCase(fetchNewCartoonsData.fulfilled, (state, action) => {
    //   state.status = "finished";
    //   state.newCartoons = action.payload;
    // });
    // builder.addCase(fetchNewCartoonsData.rejected, (state) => {
    //   state.status = "error";
    // });

    // builder.addCase(fetchComedyFilmsData.pending, (state) => {
    //   state.status = "loading";
    // });
    // builder.addCase(fetchComedyFilmsData.fulfilled, (state, action) => {
    //   state.status = "finished";
    //   state.comedyFilms = action.payload;
    // });
    // builder.addCase(fetchComedyFilmsData.rejected, (state) => {
    //   state.status = "error";
    // });

    // builder.addCase(fetchDramaFilmsData.pending, (state) => {
    //   state.status = "loading";
    // });
    // builder.addCase(fetchDramaFilmsData.fulfilled, (state, action) => {
    //   state.status = "finished";
    //   state.daramaFilms = action.payload;
    // });
    // builder.addCase(fetchDramaFilmsData.rejected, (state) => {
    //   state.status = "error";
    // });

    // builder.addCase(fetchThrillerFilmsData.pending, (state) => {
    //   state.status = "loading";
    // });
    // builder.addCase(fetchThrillerFilmsData.fulfilled, (state, action) => {
    //   state.status = "finished";
    //   state.thrillerFilms = action.payload;
    // });
    // builder.addCase(fetchThrillerFilmsData.rejected, (state) => {
    //   state.status = "error";
    // });
  },
});

export default genresSlice.reducer;
