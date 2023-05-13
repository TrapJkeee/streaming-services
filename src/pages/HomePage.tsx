import Carusel from "components/Carusel/Carusel";
import GenreSwiper from "components/GenreSwiper/GenreSwiper";
import { useSelector } from "react-redux";
import { selectGenres } from "store/GenresSlice/genresSelector";

const HomePage = () => {
  const { newCartoons } = useSelector(selectGenres);
  const { comedyFilms } = useSelector(selectGenres);
  const { daramaFilms } = useSelector(selectGenres);
  const { newFilms } = useSelector(selectGenres);
  const { thrillerFilms } = useSelector(selectGenres);

  return (
    <>
      <Carusel />
      <GenreSwiper title="Новые фильмы" data={newFilms} />
      <GenreSwiper title="Новые мультфильмы" data={newCartoons} />
      <GenreSwiper title="Комедии" data={comedyFilms} />
      <GenreSwiper title="Трийлеры" data={thrillerFilms} />
      <GenreSwiper title="Драма" data={daramaFilms} />
    </>
  );
};

export default HomePage;
