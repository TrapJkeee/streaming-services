import { Navigation, Pagination } from "swiper";
import CastItem from "./CastItem";
import { SwiperSlide, Swiper } from "swiper/react";
import { Persons } from "types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CastSwiper.scss";

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  375: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  425: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  577: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  769: {
    slidesPerView: 4,
    spaceBetween: 15,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 3,
  },
  1200: {
    slidesPerView: 7,
    spaceBetween: 3,
  },
};
interface CartProps {
  persons: Persons[];
}

const CastSwiper = ({ persons }: CartProps) => {
  return (
    <div className="cast">
      <div className="cast__body">
        <h2 className="cast__title">Актёры и создатели</h2>
        <div className="cast__row">
          <Swiper
            navigation={true}
            breakpoints={breakpoints}
            modules={[Navigation]}
          >
            {persons.map((item) => (
              <SwiperSlide>
                <CastItem
                  key={item.id}
                  id={item.id}
                  img={item.photo}
                  job={item.profession}
                  name={item.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CastSwiper;
