import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
const CaruselSkeleton = () => {
  return (
    <section className="carusel">
      <div className="carusel-block">
        <Swiper
          slidesPerView={2}
          // slidesPerGroup={1}
          spaceBetween={50}
          centeredSlides={true}
          loop={true}
          navigation={true}
          // navigation={navigation}
          // onSwiper={onSwiper}
          // breakpoints={breakpoints}
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
