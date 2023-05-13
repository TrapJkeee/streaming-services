import { createSlice } from "@reduxjs/toolkit";
import { CurrentFilm, Status } from "types";
import { fetchCurrentFilmData } from "./currentFilmData";

type CurrentFilmSlice = {
  status: Status;
  data: CurrentFilm[];
};

const initialState: CurrentFilmSlice = {
  status: "idle",
  data: [],
};

const currentFilmSlice = createSlice({
  name: "currentFilm",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentFilmData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCurrentFilmData.fulfilled, (state, action) => {
      state.status = "finished";
      state.data = action.payload;
    });
    builder.addCase(fetchCurrentFilmData.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default currentFilmSlice.reducer;
