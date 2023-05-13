import GenreItem from "./GenreItem";
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
          <GenreItem title={title} data={data} />
        </div>
      </Container>
    </div>
  );
};

export default GenreSwiper;
