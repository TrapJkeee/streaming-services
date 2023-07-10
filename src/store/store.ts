import { configureStore, combineReducers } from "@reduxjs/toolkit";
import seriesReduser from "./SeriesSlice/seriesSlice";
import cartoonsReduser from "./CartoonsSlice/cartoonsSlice";
import topMoviesReduser from "./TopMoviesSlice/topMoviesSlice";
import genresReduser from "./GenresSlice/genresSlice";
import currentFilmReducer from "./CurrentFilmSlise/currentFilsSlice";
import filmsByFilterReducer from "./FilmsByFilter/filmsByfilterSlice";
import personReducer from "./PersonSlice/personSlice";
import modalReducer from "./ModalSlice/modalSlice";
import moviesReduser from "./MoviesSlice/moviesSlice";
import { moviesApi, personApi } from "./api";

const rootReduser = combineReducers({
  movies: moviesReduser,
  series: seriesReduser,
  cartoons: cartoonsReduser,
  topMovies: topMoviesReduser,
  genres: genresReduser,
  currentFilm: currentFilmReducer,
  filmsByFilter: filmsByFilterReducer,
  person: personReducer,
  modal: modalReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
  [personApi.reducerPath]: personApi.reducer,
});

export const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([moviesApi.middleware, personApi.middleware]),
});

export type RootState = ReturnType<typeof rootReduser>;

export type AppDispatch = typeof store.dispatch;
