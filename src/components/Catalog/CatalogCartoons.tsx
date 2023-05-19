import { useSelector } from "react-redux";
import Catalog from "./Catalog";
import { selectCartoons } from "store/CartoonsSlice/cartoonsSelector";

const CatalogCartoons = () => {
  const { data, status } = useSelector(selectCartoons);
  return <Catalog title="Мультфильмы" data={data} status={status} />;
};

export default CatalogCartoons;
