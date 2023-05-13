import Item from "components/Item/Item";
import { Movies } from "types";

interface CatalogBodyProps {
  data: Movies[];
}

const CatalogBody = ({ data }: CatalogBodyProps) => {
  return (
    <div className="catalog__body">
      {data.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          poster={item.poster.previewUrl}
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
