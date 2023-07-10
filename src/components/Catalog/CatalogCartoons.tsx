import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectCartoons } from "store/CartoonsSlice/cartoonsSelector";
import { useAppDispatch } from "store/redux-hooks";
import { selectFilmsByFilter } from "store/FilmsByFilter/filmsByFilterSelector";
import { fetchCartoonsByFilterData } from "store/FilmsByFilter/filmsByFilterData";
import { useLocation } from "react-router-dom";

import Catalog from "./Catalog";
import { fetchAllCartoonsData } from "store/CartoonsSlice/cartoonsData";
import { useGetCartoonsByFilterQuery, useGetCartoonsQuery } from "store/api";

const CatalogCartoons = () => {
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const valueSearch = search.slice(1);

  // const { data, status } = useSelector(selectCartoons);
  // const { cartoonsFilter, status: filterStatus } =
  //   useSelector(selectFilmsByFilter);

  const { data, isLoading } = useGetCartoonsQuery();
  const { data: cartoonsFilter, status } =
    useGetCartoonsByFilterQuery(valueSearch);

  const filterLoading = status === "pending" ? true : false;

  // useEffect(() => {
  //   if (!search) {
  //     dispatch(fetchAllCartoonsData());
  //   }

  //   dispatch(fetchCartoonsByFilterData(valueSearch));
  // }, [search]);

  if (cartoonsFilter) {
    return (
      <Catalog
        title="Мультфильмы"
        data={cartoonsFilter?.docs}
        status={filterLoading}
      />
    );
  }
  return <Catalog title="Мультфильмы" data={data?.docs} status={isLoading} />;
};

export default CatalogCartoons;
