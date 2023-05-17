import { useSelector } from "react-redux";
import { selectMovies } from "store/MoviesSlice/moviesSelector";
import Catalog from "./Catalog";
import { selectFilmsByFilter } from "store/FilmsByFilter/filmsByFilterSelector";

const CatalogFilms = () => {
  const { data, status } = useSelector(selectMovies);

  const { data: filmFilterData, status: statusFilter } =
    useSelector(selectFilmsByFilter);

  if (status === "loading" || statusFilter === "loading") {
    <div className="catalog__body">Loading</div>;
  }

  console.log(filmFilterData, "filmFilterData");

  if (filmFilterData.length > 1) {
    return <Catalog title="Фильмы" data={filmFilterData} />;
  } else {
    return <Catalog title="Фильмы" data={data} />;
  }
};

export default CatalogFilms;
