import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectCartoons } from "store/CartoonsSlice/cartoonsSelector";
import { useAppDispatch } from "store/redux-hooks";
import { selectFilmsByFilter } from "store/FilmsByFilter/filmsByFilterSelector";
import { fetchCartoonsByFilterData } from "store/FilmsByFilter/filmsByFilterData";
import { useLocation } from "react-router-dom";

import Catalog from "./Catalog";
import { fetchAllCartoonsData } from "store/CartoonsSlice/cartoonsData";

const CatalogCartoons = () => {
  const dispatch = useAppDispatch();
  const { search } = useLocation();

  const { data, status } = useSelector(selectCartoons);
  const { cartoonsFilter, status: filterStatus } =
    useSelector(selectFilmsByFilter);

  useEffect(() => {
    if (!search) {
      dispatch(fetchAllCartoonsData());
    }

    const valueSearch = search.slice(1);

    dispatch(fetchCartoonsByFilterData(valueSearch));
  }, [search]);

  if (cartoonsFilter.length > 0) {
    return (
      <Catalog
        title="Мультфильмы"
        data={cartoonsFilter}
        status={filterStatus}
      />
    );
  }
  return <Catalog title="Мультфильмы" data={data} status={status} />;
};

export default CatalogCartoons;
