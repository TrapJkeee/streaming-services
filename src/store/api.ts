import { API_KEY } from "constants/api";
import { Movies, Person } from "types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CurrentFilm } from "types";

type Data = {
  docs: Movies[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};

export const moviesApi = createApi({
  reducerPath: "moviesData",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.kinopoisk.dev/v1.3/` }),
  endpoints: (build) => ({
    getMovies: build.query<Data, void>({
      query: () => `movie?page=1&limit=50&type=movie&token=${API_KEY}`,
    }),
    getSeries: build.query<Data, void>({
      query: () => `movie?page=1&limit=50&type=tv-series&token=${API_KEY}`,
    }),
    getCartoons: build.query<Data, void>({
      query: () => `movie?page=1&limit=50&type=cartoon&token=${API_KEY}`,
    }),
    getTopMovies: build.query<Data, void>({
      query: () =>
        `movie?selectFields=backdrop&selectFields=id&selectFields=poster&selectFields=genres&selectFields=name&selectFields=rating&selectFields=year&selectFields=videos&page=1&limit=10&top10=%21null&selectFields=videos&token=${API_KEY}`,
    }),
    getNewMovies: build.query<Data, void>({
      query: () =>
        `movie?page=1&limit=30&type=movie&year=${new Date().getFullYear()}&token=${API_KEY}`,
    }),
    getNewCartoons: build.query<Data, void>({
      query: () =>
        `movie?page=1&limit=30&type=cartoon&year=${new Date().getFullYear()}&token=${API_KEY}`,
    }),
    getComedyFilms: build.query<Data, void>({
      query: () =>
        `movie?page=2&limit=30&type=movie&genres.name=%D0%BA%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F&token=${API_KEY}`,
    }),
    getDramaFilms: build.query<Data, void>({
      query: () =>
        `movie?page=3&limit=30&type=movie&genres.name=%D0%B4%D1%80%D0%B0%D0%BC%D0%B0&token=${API_KEY}`,
    }),
    getThrillerFilms: build.query<Data, void>({
      query: () =>
        `movie?page=1&limit=30&type=movie&genres.name=%D1%82%D1%80%D0%B8%D0%BB%D0%BB%D0%B5%D1%80&token=${API_KEY}`,
    }),
    getCurrentFilm: build.query<CurrentFilm, number>({
      query: (id) => `movie/${id}?token=${API_KEY}`,
    }),
    getMoviesByFilter: build.query<Data, string>({
      query: (genre) =>
        `movie?page=1&limit=50&type=movie&${genre}&token=${API_KEY}`,
    }),
    getSerialsByFilter: build.query<Data, string>({
      query: (genre) =>
        `movie?page=1&limit=50&type=tv-series&${genre}&token=${API_KEY}`,
    }),
    getCartoonsByFilter: build.query<Data, string>({
      query: (genre) =>
        `movie?page=1&limit=50&type=cartoon&${genre}&token=${API_KEY}`,
    }),
  }),
});

export const personApi = createApi({
  reducerPath: "personData",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.kinopoisk.dev/v1/` }),
  endpoints: (build) => ({
    getPersonData: build.query<Person, Number>({
      query: (id) => `person/${id}?token=${API_KEY}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetCartoonsQuery,
  useGetComedyFilmsQuery,
  useGetCurrentFilmQuery,
  useGetDramaFilmsQuery,
  useGetMoviesByFilterQuery,
  useGetNewCartoonsQuery,
  useGetNewMoviesQuery,
  useGetSeriesQuery,
  useGetThrillerFilmsQuery,
  useGetTopMoviesQuery,
  useGetCartoonsByFilterQuery,
  useGetSerialsByFilterQuery,
} = moviesApi;

export const { useGetPersonDataQuery } = personApi;
