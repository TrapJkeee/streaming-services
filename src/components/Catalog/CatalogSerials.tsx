import { useSelector } from "react-redux";
import { selectSeries } from "store/SeriesSlice/seriesSelector";
import Catalog from "./Catalog";
import { useEffect } from "react";
import { useAppDispatch } from "store/redux-hooks";
import { fetchAllSeriesData } from "store/SeriesSlice/seriesData";

const CatalogSerials = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllSeriesData());
  }, []);

  const { data, status } = useSelector(selectSeries);
  return <Catalog title="Сериалы" data={data} status={status} />;
};

export default CatalogSerials;
