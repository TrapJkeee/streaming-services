import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { selectMovies } from "store/MoviesSlice/moviesSelector";
import { useAppDispatch } from "store/redux-hooks";
import { fetchAllMoviesData } from "store/MoviesSlice/moviesData";
import { fetchMoviesByFilterData } from "store/FilmsByFilter/filmsByFilterData";
import { selectFilmsByFilter } from "store/FilmsByFilter/filmsByFilterSelector";

import Catalog from "./Catalog";

const CatalogFilms = () => {
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const { data, status } = useSelector(selectMovies);
  const { moviesFilter, status: filterStatus } =
    useSelector(selectFilmsByFilter);

  useEffect(() => {
    if (!search) {
      dispatch(fetchAllMoviesData());
    }
    const valueSearch = search.slice(1);

    dispatch(fetchMoviesByFilterData(valueSearch));
  }, [search]);

  if (moviesFilter.length > 0) {
    return <Catalog title="Фильмы" data={moviesFilter} />;
  }
  return <Catalog title="Фильмы" data={data} status={status} />;
};

export default CatalogFilms;
