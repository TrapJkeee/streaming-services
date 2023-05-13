import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "constants/api";
import { API_KEY2 } from "constants/api";

export const fetchNewFilmsData = createAsyncThunk("newFilms", async () => {
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.3/movie?page=1&limit=20&type=movie&year=${new Date().getFullYear()}&token=${API_KEY2}`
  );

  const data = await response.json();

  return data.docs;
});

export const fetchNewCartoonsData = createAsyncThunk(
  "newCartoons",
  async () => {
    const response = await fetch(
      `https://api.kinopoisk.dev/v1.3/movie?page=1&limit=20&type=cartoon&year=${new Date().getFullYear()}&token=${API_KEY2}`
    );

    const data = await response.json();

    return data.docs;
  }
);

export const fetchComedyFilmsData = createAsyncThunk(
  "comedyFilms",
  async () => {
    const response = await fetch(
      `https://api.kinopoisk.dev/v1.3/movie?page=2&limit=20&type=movie&genres.name=%D0%BA%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F&token=${API_KEY2}`
    );

    const data = await response.json();

    return data.docs;
  }
);

export const fetchDramaFilmsData = createAsyncThunk("dramaFilms", async () => {
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.3/movie?page=3&limit=20&type=movie&genres.name=%D0%B4%D1%80%D0%B0%D0%BC%D0%B0&token=${API_KEY2}`
  );

  const data = await response.json();

  return data.docs;
});

export const fetchThrillerFilmsData = createAsyncThunk(
  "thrillerFilms",
  async () => {
    const response = await fetch(
      `https://api.kinopoisk.dev/v1.3/movie?page=1&limit=10&type=movie&genres.name=%D1%82%D1%80%D0%B8%D0%BB%D0%BB%D0%B5%D1%80&token=${API_KEY2}`
    );

    const data = await response.json();

    return data.docs;
  }
);
