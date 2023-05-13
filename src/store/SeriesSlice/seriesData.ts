import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "constants/api";
import { API_KEY2 } from "constants/api";

export const fetchAllSeriesData = createAsyncThunk("series", async () => {
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.3/movie?page=1&limit=100&type=tv-series&token=${API_KEY2}`
  );

  const data = await response.json();

  return data.docs;
});
