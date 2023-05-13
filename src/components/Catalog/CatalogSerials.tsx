import { useSelector } from "react-redux";
import { selectSeries } from "store/SeriesSlice/seriesSelector";
import Catalog from "./Catalog";

const CatalogSerials = () => {
  const { data } = useSelector(selectSeries);
  return <Catalog title="Сериалы" data={data} />;
};

export default CatalogSerials;
