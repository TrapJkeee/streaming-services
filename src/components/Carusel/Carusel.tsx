import { Navigation } from "swiper";
import CaruselItem from "./CaruselItem";
import { useSelector } from "react-redux";
import { selectTopMovies } from "store/TopMoviesSlice/topMoviesSelector";
import CaruselSkeleton from "./CaruselSkeleton";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/controller";
import "swiper/css/navigation";

import "./Carusel.scss";
import { useGetTopMoviesQuery } from "store/api";

const breakpoints = {
  577: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  769: {
    slidesPerView: 2,
    spaceBetween: 40,
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
const Carusel = () => {
  // const { data, status } = useSelector(selectTopMovies);

  const { data, isLoading } = useGetTopMoviesQuery();

  if (isLoading) {
    return <CaruselSkeleton />;
  }
  return (
    <section className="carusel">
      <div className="carusel-block">
        <Swiper
          breakpoints={breakpoints}
          centeredSlides={true}
          loop={true}
          navigation={true}
          modules={[Navigation]}
        >
          {data?.docs.map((item) => (
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
