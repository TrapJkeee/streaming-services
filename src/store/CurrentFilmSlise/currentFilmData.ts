import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "constants/api";
import { API_KEY2 } from "constants/api";
import { CurrentFilm } from "types";

export const fetchCurrentFilmData = createAsyncThunk<CurrentFilm[], number>(
  "currentFilm",
  async (id) => {
    const response = await fetch(
      `https://api.kinopoisk.dev/v1.3/movie?selectFields=persons&selectFields=rating&selectFields=id&selectFields=year&selectFields=countries&selectFields=movieLength&selectFields=shortDescription&selectFields=description&selectFields=facts&selectFields=logo&selectFields=backdrop&selectFields=genres&selectFields=name&page=1&limit=10&id=${id}&token=${API_KEY2}`
    );

    const data = await response.json();

    return data.docs;
  }
);
