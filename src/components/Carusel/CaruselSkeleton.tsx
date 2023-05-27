import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const breakpoints = {
  577: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  769: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  1025: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
};
const CaruselSkeleton = () => {
  return (
    <section className="carusel">
      <div className="carusel-block">
        <Swiper
          centeredSlides={true}
          loop={true}
          navigation={true}
          breakpoints={breakpoints}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <div className="swiper-item skeleton-swiper"></div>;
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item skeleton-swiper"></div>;
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item skeleton-swiper"></div>;
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item skeleton-swiper"></div>;
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CaruselSkeleton;
