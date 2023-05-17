import { useSelector } from "react-redux";
import Catalog from "./Catalog";
import { selectCartoons } from "store/CartoonsSlice/cartoonsSelector";

const CatalogCartoons = () => {
  const { data } = useSelector(selectCartoons);
  // return <Catalog title="Мультфильмы" data={data} />;
};

export default CatalogCartoons;
