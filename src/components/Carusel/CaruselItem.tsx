import { Link } from "react-router-dom";
import { Genres } from "types";

import "./CaruselItem.scss";

interface CaruselItemProps {
  img: string | null;
  name: string;
  rating: number;
  year: number;
  genres: Genres[];
  id: number;
}

const CaruselItem = ({
  id,
  genres,
  img,
  name,
  rating,
  year,
}: CaruselItemProps) => {
  return (
    <div className="swiper-item">
      <Link to={`/film/${id}`}>
        <img
          src={img ? img : ""}
          alt={name}
          className="swiper-item__preview"
          decoding="async"
          // loading="lazy"
        />
        <div className="swiper-item__content">
          <div className="swiper-item__text">
            <div className="swiper-item__title">{name}</div>

            <div className="swiper-item__subtitle">
              <div className="swiper-item__rating">{rating.toFixed(2)}</div>
              <div className="swiper-item__year">{year}</div>
              {genres.map((item) => (
                <div className="swiper-item__genre">{item.name}</div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CaruselItem;
