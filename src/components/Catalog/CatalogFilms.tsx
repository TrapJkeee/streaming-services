import { useSelector } from "react-redux";
import { selectMovies } from "store/MoviesSlice/moviesSelector";
import Catalog from "./Catalog";

const CatalogFilms = () => {
  const { data } = useSelector(selectMovies);
  return <Catalog title="Фильмы" data={data} />;
};

export default CatalogFilms;
