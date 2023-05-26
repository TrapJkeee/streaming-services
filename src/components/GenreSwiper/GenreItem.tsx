import Item from "components/Item/Item";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectMovies } from "store/MoviesSlice/moviesSelector";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Movies, SimilarMovies } from "types";
import { selectGenres } from "store/GenresSlice/genresSelector";
import GenreSkeleton from "./GenreSkeleton";

interface GenreItemProps {
  data: Movies[] | [];
  similarMovies?: SimilarMovies[];
}

const GenreItem = ({ data, similarMovies }: GenreItemProps) => {
  const { status } = useSelector(selectGenres);

  if (status === "loading") {
    return <GenreSkeleton />;
  }

  if (similarMovies) {
    return (
      <div className="genre__swiper">
        <Swiper
          slidesPerView={6}
          spaceBetween={3}
          navigation={true}
          // breakpoints={breakpoints}
          modules={[Navigation]}
        >
          {similarMovies.map((item) => (
            <SwiperSlide>
              <Item
                key={item.id}
                id={item.id}
                poster={item.poster.previewUrl}
                title={item.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  return (
    <div className="genre__swiper">
      <Swiper
        slidesPerView={6}
        spaceBetween={3}
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
  );
};

export default memo(GenreItem);
