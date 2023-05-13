import { Navigation, Pagination } from "swiper";
import "./Cast.scss";
import CastItem from "./CastItem";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Persons } from "types";

interface CartProps {
  persons: Persons[];
}

const Cast = ({ persons }: CartProps) => {
  return (
    <div className="cast">
      <div className="cast__body">
        <h2 className="cast__title">Актёры и создатели</h2>
        <div className="cast__row">
          <Swiper
            slidesPerView={10}
            spaceBetween={15}
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

export default Cast;
