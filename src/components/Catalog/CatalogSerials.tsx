import { useSelector } from "react-redux";
import { selectSeries } from "store/SeriesSlice/seriesSelector";
import { useEffect, useState } from "react";
import { useAppDispatch } from "store/redux-hooks";
import { fetchAllSeriesData } from "store/SeriesSlice/seriesData";
import { fetchTVSeriesByFilterData } from "store/FilmsByFilter/filmsByFilterData";
import { useLocation } from "react-router-dom";
import Catalog from "./Catalog";
import { selectFilmsByFilter } from "store/FilmsByFilter/filmsByFilterSelector";
import { seriesAction } from "store/SeriesSlice/seriesSlice";

const CatalogSerials = () => {
  // const [fetching, setFetching] = useState(true);
  const dispatch = useAppDispatch();
  const { data, status, page } = useSelector(selectSeries);
  const { search } = useLocation();
  const { serialsFilter, status: filterStatus } =
    useSelector(selectFilmsByFilter);

  useEffect(() => {
    if (!search) {
      // if (fetching) {
      dispatch(fetchAllSeriesData());
      // setFetching(false);
      // dispatch(seriesAction.addPage());
      // }
    }

    const valueSearch = search.slice(1);
    dispatch(fetchTVSeriesByFilterData(valueSearch));
  }, [search]);

  // const scrollHandler = (e: any) => {
  //   if (
  //     e.target.documentElement.scrollHeight -
  //       (e.target.documentElement.scrollTop + window.innerHeight) <
  //     300
  //   ) {
  //     setFetching(true);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("scroll", scrollHandler);

  //   return () => {
  //     document.removeEventListener("scroll", scrollHandler);
  //   };
  // }, []);

  if (serialsFilter.length > 0) {
    return (
      <Catalog title="Сериалы" data={serialsFilter} status={filterStatus} />
    );
  }
  return <Catalog title="Сериалы" data={data} status={status} />;
};

export default CatalogSerials;
