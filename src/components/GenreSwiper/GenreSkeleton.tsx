import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const breakpoints = {
  577: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  769: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1025: {
    slidesPerView: 4,
    spaceBetween: 3,
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 3,
  },
  1880: {
    slidesPerView: 6,
    spaceBetween: 3,
  },
};

const GenreSkeleton = () => {
  return (
    <div className="genre__swiper">
      <Swiper
        breakpoints={breakpoints}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="skeleton"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skeleton"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skeleton"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skeleton"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skeleton"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skeleton"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skeleton"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skeleton"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skeleton"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GenreSkeleton;
