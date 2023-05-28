import CatalogSkeleton from "./CatalogSkeleton";
import Item from "components/Item/Item";
import { useSelector } from "react-redux";
import { selectFilmsByFilter } from "store/FilmsByFilter/filmsByFilterSelector";
import { Movies } from "types";

interface CatalogBodyProps {
  data: Movies[];
  status?: string;
}

const CatalogBody = ({ data, status }: CatalogBodyProps) => {
  const { status: filterStatus } = useSelector(selectFilmsByFilter);

  if (status === "loading" || filterStatus === "loading") {
    return <CatalogSkeleton />;
  }
  return (
    <div className="catalog__body">
      {data.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          poster={item.poster?.previewUrl}
          movieLength={item.movieLength}
          rating={item.rating.kp}
          title={item.name}
          year={item.year}
        />
      ))}
    </div>
  );
};

export default CatalogBody;
