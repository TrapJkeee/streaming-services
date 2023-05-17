import Item from "components/Item/Item";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilmsByFilter } from "store/FilmsByFilter/filmsByFilterSelector";
import { selectMovies } from "store/MoviesSlice/moviesSelector";
import { Movies } from "types";

interface CatalogBodyProps {
  data: Movies[];
}

const CatalogBody = ({ data }: CatalogBodyProps) => {
  const { status } = useSelector(selectMovies);

  const { status: statusFilter } = useSelector(selectFilmsByFilter);

  return (
    <div className="catalog__body">
      {data.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          poster={item.poster.previewUrl}
          movieLength={item.movieLength}
          rating={item.rating.kp}
          title={item.name}
          year={item.year}
        />
      ))}
    </div>
  );
};

export default CatalogBody;
