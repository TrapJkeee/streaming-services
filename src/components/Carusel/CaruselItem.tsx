import { ReactComponent as SoundOff } from "assets/svg/sound-off.svg";
import { ReactComponent as Sound } from "assets/svg/sound.svg";

import "./CaruselItem.scss";
import { Genres } from "types";

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
      <img
        src={!img ? "" : img}
        alt={name}
        className="swiper-item__preview"
        loading="lazy"
        decoding="async"
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

        <button className="swiper-item__icon">
          <SoundOff />
          {/* <Sound /> */}
        </button>
      </div>
    </div>
  );
};

export default CaruselItem;
