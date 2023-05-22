import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectMovies } from "store/MoviesSlice/moviesSelector";
import Catalog from "./Catalog";
import { useAppDispatch } from "store/redux-hooks";
import { fetchAllMoviesData } from "store/MoviesSlice/moviesData";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchMoviesByFilterData } from "store/FilmsByFilter/filmsByFilterData";
import { selectFilmsByFilter } from "store/FilmsByFilter/filmsByFilterSelector";
import { Movies } from "types";

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
    return <Catalog title="Фильмы" data={moviesFilter} status={filterStatus} />;
  }
  return <Catalog title="Фильмы" data={data} status={status} />;
};

export default CatalogFilms;
