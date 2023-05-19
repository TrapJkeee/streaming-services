import { Navigation, Pagination } from "swiper";
import CastItem from "./CastItem";
import { SwiperSlide, Swiper } from "swiper/react";
import { Persons } from "types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CastSwiper.scss";

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
            slidesPerView={9}
            spaceBetween={30}
            navigation={true}
            // breakpoints={breakpoints}
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
