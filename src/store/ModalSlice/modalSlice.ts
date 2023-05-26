import { createSlice } from "@reduxjs/toolkit";

const initialState = { isModalOpen: false };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
