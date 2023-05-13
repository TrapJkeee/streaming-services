import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesReduser from "./MoviesSlice/moviesSlice";
import seriesReduser from "./SeriesSlice/seriesSlice";
import cartoonsReduser from "./CartoonsSlice/cartoonsSlice";
import topMoviesReduser from "./TopMoviesSlice/topMoviesSlice";
import genresReduser from "./GenresSlice/genresSlice";
import currentFilmReduce from "./CurrentFilmSlise/currentFilsSlice";

const rootReduser = combineReducers({
  movies: moviesReduser,
  series: seriesReduser,
  cartoons: cartoonsReduser,
  topMovies: topMoviesReduser,
  genres: genresReduser,
  currentFilm: currentFilmReduce,
});

export const store = configureStore({
  reducer: rootReduser,
});

export type RootState = ReturnType<typeof rootReduser>;

export type AppDispatch = typeof store.dispatch;
