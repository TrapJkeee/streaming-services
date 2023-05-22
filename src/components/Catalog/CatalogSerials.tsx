import { useSelector } from "react-redux";
import { selectSeries } from "store/SeriesSlice/seriesSelector";
import { useEffect } from "react";
import { useAppDispatch } from "store/redux-hooks";
import { fetchAllSeriesData } from "store/SeriesSlice/seriesData";
import { fetchTVSeriesByFilterData } from "store/FilmsByFilter/filmsByFilterData";
import { useLocation } from "react-router-dom";
import Catalog from "./Catalog";
import { selectFilmsByFilter } from "store/FilmsByFilter/filmsByFilterSelector";

const CatalogSerials = () => {
  const dispatch = useAppDispatch();
  const { data, status } = useSelector(selectSeries);
  const { search } = useLocation();
  const { serialsFilter, status: filterStatus } =
    useSelector(selectFilmsByFilter);

  useEffect(() => {
    if (!search) {
      dispatch(fetchAllSeriesData());
    }

    const valueSearch = search.slice(1);

    dispatch(fetchTVSeriesByFilterData(valueSearch));
  }, [search]);

  if (serialsFilter.length > 0) {
    return (
      <Catalog title="Сериалы" data={serialsFilter} status={filterStatus} />
    );
  }
  return <Catalog title="Сериалы" data={data} status={status} />;
};

export default CatalogSerials;
