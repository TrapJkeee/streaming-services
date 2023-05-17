import Item from "components/Item/Item";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectMovies } from "store/MoviesSlice/moviesSelector";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { GenreSwiperProps } from "./GenreSwiper";

interface GenreItemProps extends GenreSwiperProps {}

const GenreItem = ({ title, data }: GenreItemProps) => {
  return (
    <>
      <h2 className="genre__type">{title}</h2>

      <div className="genre__swiper">
        <Swiper
          slidesPerView={6}
          spaceBetween={5}
          navigation={true}
          // breakpoints={breakpoints}
          modules={[Navigation]}
        >
          {data.map((item) => (
            <SwiperSlide>
              <Item
                key={item.id}
                id={item.id}
                poster={item.poster.previewUrl}
                movieLength={item.movieLength}
                rating={item.rating.kp}
                title={item.name}
                year={item.year}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default memo(GenreItem);
