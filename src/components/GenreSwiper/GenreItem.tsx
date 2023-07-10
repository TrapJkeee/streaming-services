import Item from "components/Item/Item";
import { useSelector } from "react-redux";
import { selectMovies } from "store/MoviesSlice/moviesSelector";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Movies, SimilarMovies } from "types";
import { selectGenres } from "store/GenresSlice/genresSelector";
import GenreSkeleton from "./GenreSkeleton";
import {
  useGetComedyFilmsQuery,
  useGetDramaFilmsQuery,
  useGetNewCartoonsQuery,
  useGetNewMoviesQuery,
  useGetThrillerFilmsQuery,
} from "store/api";

const breakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  375: {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  425: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  769: {
    slidesPerView: 3,
    spaceBetween: 3,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 3,
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 3,
  },
  1440: {
    slidesPerView: 5,
    spaceBetween: 3,
  },
  1880: {
    slidesPerView: 6,
    spaceBetween: 3,
  },
};

interface GenreItemProps {
  data: Movies[];
  similarMovies?: SimilarMovies[];
}

const GenreItem = ({ data, similarMovies }: GenreItemProps) => {
  // const { status } = useSelector(selectGenres);

  const { isLoading: moviesLoading } = useGetNewMoviesQuery();
  const { isLoading: cartoonsLoading } = useGetNewCartoonsQuery();
  const { isLoading: comedyLoading } = useGetComedyFilmsQuery();
  const { isLoading: thrillerLoading } = useGetThrillerFilmsQuery();
  const { isLoading: dramaLoading } = useGetDramaFilmsQuery();

  if (
    moviesLoading ||
    cartoonsLoading ||
    comedyLoading ||
    thrillerLoading ||
    dramaLoading
  ) {
    return <GenreSkeleton />;
  }

  if (similarMovies) {
    return (
      <div className="genre__swiper">
        <Swiper
          navigation={true}
          breakpoints={breakpoints}
          modules={[Navigation]}
        >
          {similarMovies.map((item) => (
            <SwiperSlide>
              <Item
                key={item.id}
                id={item.id}
                poster={item.poster?.previewUrl}
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
        navigation={true}
        breakpoints={breakpoints}
        modules={[Navigation]}
      >
        {data.map((item) => (
          <SwiperSlide>
            <Item
              key={item.id}
              id={item.id}
              poster={item.poster?.previewUrl}
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

export default GenreItem;
