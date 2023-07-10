import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSeries } from "store/SeriesSlice/seriesSelector";
import { useAppDispatch } from "store/redux-hooks";

import { fetchAllSeriesData } from "store/SeriesSlice/seriesData";
import { fetchTVSeriesByFilterData } from "store/FilmsByFilter/filmsByFilterData";
import { selectFilmsByFilter } from "store/FilmsByFilter/filmsByFilterSelector";
import Catalog from "./Catalog";
import { useGetSerialsByFilterQuery, useGetSeriesQuery } from "store/api";

const CatalogSerials = () => {
  const dispatch = useAppDispatch();
  // const { data, status, page } = useSelector(selectSeries);
  const { search } = useLocation();
  const valueSearch = search.slice(1);
  // const { serialsFilter, status: filterStatus } =
  //   useSelector(selectFilmsByFilter);

  const { data, isLoading } = useGetSeriesQuery();
  const { data: filterSerials, status } =
    useGetSerialsByFilterQuery(valueSearch);

  const filterLoading = status === "pending" ? true : false;

  // useEffect(() => {
  //   if (!search) {
  //     dispatch(fetchAllSeriesData());
  //   }

  //   dispatch(fetchTVSeriesByFilterData(valueSearch));
  // }, [search]);

  if (filterSerials) {
    return (
      <Catalog
        title="Сериалы"
        data={filterSerials?.docs}
        status={filterLoading}
      />
    );
  }
  return <Catalog title="Сериалы" data={data?.docs} status={isLoading} />;
};

export default CatalogSerials;
