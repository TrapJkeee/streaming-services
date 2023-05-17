import { useState, memo } from "react";
import { useSelector } from "react-redux";

import { selectGenres } from "store/GenresSlice/genresSelector";
import GenreSwiper from "components/GenreSwiper/GenreSwiper";
import Carusel from "components/Carusel/Carusel";

const HomePage = () => {
  const { newCartoons, comedyFilms, daramaFilms, newFilms, thrillerFilms } =
    useSelector(selectGenres);

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

export default memo(HomePage);
