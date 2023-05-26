import GenreSwiper from "components/GenreSwiper/GenreSwiper";
import React from "react";
import { SimilarMovies } from "types";

interface ItemInfoSimilarMoviesProps {
  similarMovies: SimilarMovies[];
}

const ItemInfoSimilarMovies = ({
  similarMovies,
}: ItemInfoSimilarMoviesProps) => {
  console.log(similarMovies);
  return (
    <div>
      <GenreSwiper
        title="Похожие фильмы"
        similarMovies={similarMovies}
        data={[]}
      />
    </div>
  );
};

export default ItemInfoSimilarMovies;
