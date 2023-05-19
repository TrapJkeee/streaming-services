import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
const GenreSkeleton = () => {
  return (
    <div className="genre__swiper">
      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        navigation={true}
        // breakpoints={breakpoints}
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
