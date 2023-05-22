import { createSlice } from "@reduxjs/toolkit";
import { fetchPersonData } from "./personData";
import { Person, Status } from "types";

type PersonState = {
  status: Status;
  data: Person[];
};

const initialState: PersonState = {
  status: "idle",
  data: [],
};

const personSlice = createSlice({
  name: "perosnData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPersonData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPersonData.fulfilled, (state, action) => {
      state.status = "finished";
      state.data = action.payload;
    });
    builder.addCase(fetchPersonData.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default personSlice.reducer;
