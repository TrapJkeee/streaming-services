import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { selectMovies } from "store/MoviesSlice/moviesSelector";
import { useAppDispatch } from "store/redux-hooks";
import { fetchAllMoviesData } from "store/MoviesSlice/moviesData";
import { fetchMoviesByFilterData } from "store/FilmsByFilter/filmsByFilterData";
import { selectFilmsByFilter } from "store/FilmsByFilter/filmsByFilterSelector";

import Catalog from "./Catalog";
import { useGetMoviesByFilterQuery, useGetMoviesQuery } from "store/api";

const CatalogFilms = () => {
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const valueSearch = search.slice(1);

  const { data, isLoading } = useGetMoviesQuery();
  const { data: filterMovies, status } = useGetMoviesByFilterQuery(valueSearch);

  const filterLoading = status === "pending" ? true : false;
  // const { data, status } = useSelector(selectMovies);
  // const { moviesFilter, status: filterStatus } =
  //   useSelector(selectFilmsByFilter);
  // useEffect(() => {
  //   if (!search) {
  //     dispatch(fetchAllMoviesData());
  //   }
  //   const valueSearch = search.slice(1);

  //   dispatch(fetchMoviesByFilterData(valueSearch));
  // }, [search]);

  if (filterMovies) {
    return (
      <Catalog
        title="Фильмы"
        data={filterMovies?.docs}
        status={filterLoading}
      />
    );
  }
  return <Catalog title="Фильмы" data={data?.docs} status={isLoading} />;
};

export default CatalogFilms;
