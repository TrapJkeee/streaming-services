import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "constants/api";
import { API_KEY2 } from "constants/api";
import { TopMovies } from "types";

export const fetchTopMoviesData = createAsyncThunk<TopMovies[]>(
  "topMovies",
  async () => {
    const response = await fetch(
      `https://api.kinopoisk.dev/v1.3/movie?selectFields=backdrop&selectFields=id&selectFields=poster&selectFields=genres&selectFields=name&selectFields=rating&selectFields=year&selectFields=videos&page=1&limit=10&top10=%21null&selectFields=videos&token=${API_KEY2}`
    );

    const data = await response.json();

    return data.docs;
  }
);
