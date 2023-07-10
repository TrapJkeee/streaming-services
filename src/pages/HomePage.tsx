import { useState, memo } from "react";
import { useSelector } from "react-redux";

import { selectGenres } from "store/GenresSlice/genresSelector";
import GenreSwiper from "components/GenreSwiper/GenreSwiper";
import Carusel from "components/Carusel/Carusel";
import {
  useGetComedyFilmsQuery,
  useGetDramaFilmsQuery,
  useGetNewCartoonsQuery,
  useGetNewMoviesQuery,
  useGetThrillerFilmsQuery,
} from "store/api";

const HomePage = () => {
  // const { newCartoons, comedyFilms, daramaFilms, newFilms, thrillerFilms } =
  //   useSelector(selectGenres);

  const { data: movies } = useGetNewMoviesQuery();
  const { data: cartoons } = useGetNewCartoonsQuery();
  const { data: comedy } = useGetComedyFilmsQuery();
  const { data: thriller } = useGetThrillerFilmsQuery();
  const { data: drama } = useGetDramaFilmsQuery();

  return (
    <>
      <Carusel />
      <GenreSwiper title="Новые фильмы" data={movies?.docs} />
      <GenreSwiper title="Новые мультфильмы" data={cartoons?.docs} />
      <GenreSwiper title="Комедии" data={comedy?.docs} />
      <GenreSwiper title="Трийлеры" data={thriller?.docs} />
      <GenreSwiper title="Драма" data={drama?.docs} />
    </>
  );
};

export default memo(HomePage);
