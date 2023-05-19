import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/controller";
import "swiper/css/navigation";

import "./Carusel.scss";
import { Navigation } from "swiper";
import CaruselItem from "./CaruselItem";
import { useSelector } from "react-redux";
import { selectTopMovies } from "store/TopMoviesSlice/topMoviesSelector";
import { useState } from "react";
import CaruselSkeleton from "./CaruselSkeleton";

const Carusel = () => {
  const { data, status } = useSelector(selectTopMovies);

  if (status === "loading") {
    return <CaruselSkeleton />;
  }
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
          {data.map((item) => (
            <SwiperSlide>
              <CaruselItem
                key={item.id}
                id={item.id}
                img={item.backdrop.url}
                genres={item.genres}
                name={item.name}
                rating={item.rating.kp}
                year={item.year}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carusel;
