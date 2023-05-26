import GenreItem from "./GenreItem";
import { memo } from "react";
import { Container } from "components/Contanier/Container";

import "swiper/css";
import "swiper/css/navigation";
import "./GenreSwiper.scss";
import { CurrentFilm, Movies, SimilarMovies } from "types";

export interface GenreSwiperProps {
  title: string;
  data: Movies[] | [];
  similarMovies?: SimilarMovies[];
}

const GenreSwiper = ({ title, data, similarMovies }: GenreSwiperProps) => {
  return (
    <div className="genre">
      <Container>
        <div className="genre__body">
          <h2 className="genre__type">{title}</h2>
          {similarMovies && (
            <GenreItem similarMovies={similarMovies} data={[]} />
          )}
          {data && <GenreItem data={data} />}
        </div>
      </Container>
    </div>
  );
};

export default memo(GenreSwiper);
