import GenreItem from "./GenreItem";
import { memo } from "react";
import { Container } from "components/Contanier/Container";

import "swiper/css";
import "swiper/css/navigation";
import "./GenreSwiper.scss";
import { Movies } from "types";

export interface GenreSwiperProps {
  title: string;
  data: Movies[];
}

const GenreSwiper = ({ title, data }: GenreSwiperProps) => {
  return (
    <div className="genre">
      <Container>
        <div className="genre__body">
          <h2 className="genre__type">{title}</h2>
          <GenreItem data={data} />
        </div>
      </Container>
    </div>
  );
};

export default memo(GenreSwiper);
