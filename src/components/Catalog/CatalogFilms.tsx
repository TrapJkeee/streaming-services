import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectMovies } from "store/MoviesSlice/moviesSelector";
import Catalog from "./Catalog";
import { useAppDispatch } from "store/redux-hooks";
import { fetchAllMoviesData } from "store/MoviesSlice/moviesData";
import { useLocation } from "react-router-dom";
import { fetchMoviesByFilterData } from "store/FilmsByFilter/filmsByFilterData";
import { selectFilmsByFilter } from "store/FilmsByFilter/filmsByFilterSelector";
import { Movies } from "types";
import { ScrollbarEvents } from "swiper/types";
import { moviesAction } from "store/MoviesSlice/moviesSlice";

const CatalogFilms = () => {
  // const [page, setPage] = useState(1);
  // const [fetching, setFetching] = useState(true);
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

  console.log(moviesFilter.length, "moviesFilter.length");

  if (moviesFilter.length > 0) {
    return <Catalog title="Фильмы" data={moviesFilter} />;
  }
  return <Catalog title="Фильмы" data={data} status={status} />;
};

export default CatalogFilms;
