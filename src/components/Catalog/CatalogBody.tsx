import Item from "components/Item/Item";
import { Movies } from "types";
import CatalogSkeleton from "./CatalogSkeleton";
import { ReactComponent as Loading } from "assets/svg/loading.svg";

interface CatalogBodyProps {
  data: Movies[];
  status: string;
}

const CatalogBody = ({ data, status }: CatalogBodyProps) => {
  if (status === "loading" && data.length === 0) {
    return <CatalogSkeleton />;
  }

  return (
    <>
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
      {status === "loading" && (
        <div className="catalog__loading">
          <div className="catalog__loading-svg">
            <Loading />
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogBody;
