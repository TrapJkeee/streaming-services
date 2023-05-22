import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "constants/api";
import { API_KEY2 } from "constants/api";
import { Person } from "types";

export const fetchPersonData = createAsyncThunk<Person[], number>(
  "person",
  async (id) => {
    const response = await fetch(
      `https://api.kinopoisk.dev/v1/person/${id}?token=${API_KEY}`
    );

    const data = await response.json();

    return [data];
  }
);
