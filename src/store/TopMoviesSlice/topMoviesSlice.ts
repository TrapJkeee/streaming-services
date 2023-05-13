import { createSlice } from "@reduxjs/toolkit";
import { Movies, TopMovies } from "types";
import { fetchTopMoviesData } from "./topMoviesData";

type TopMoviesSlice = {
  status: "idle" | "loading" | "finished" | "error";
  data: TopMovies[];
};

const initialState: TopMoviesSlice = {
  data: [],
  status: "idle",
};

const topMoviesSlice = createSlice({
  name: "seriesData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopMoviesData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTopMoviesData.fulfilled, (state, action) => {
      state.status = "finished";
      state.data = action.payload;
    });
    builder.addCase(fetchTopMoviesData.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default topMoviesSlice.reducer;
