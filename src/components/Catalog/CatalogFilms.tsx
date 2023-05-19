import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectMovies } from "store/MoviesSlice/moviesSelector";
import Catalog from "./Catalog";
import { selectFilmsByFilter } from "store/FilmsByFilter/filmsByFilterSelector";
import { useAppDispatch } from "store/redux-hooks";
import { fetchAllMoviesData } from "store/MoviesSlice/moviesData";

const CatalogFilms = () => {
  const { data, status } = useSelector(selectMovies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllMoviesData());
  }, []);

  return <Catalog title="Фильмы" data={data} status={status} />;
};

export default CatalogFilms;
