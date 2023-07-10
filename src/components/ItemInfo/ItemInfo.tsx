import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "store/redux-hooks";

import CastSwiper from "components/CastSwiper/CastSwiper";
import { fetchCurrentFilmData } from "store/CurrentFilmSlise/currentFilmData";
import { selectCurrentFilm } from "store/CurrentFilmSlise/currentFilmSelector";
import { Container } from "components/Contanier/Container";
import { ReactComponent as Loading } from "assets/svg/loading.svg";
import ItemMainInfo from "./ItemMainInfo";
import ItemInfoSimilarMovies from "./ItemInfoSimilarMovies";

import "./ItemInfo.scss";
import { useGetCurrentFilmQuery } from "store/api";

const ItemInfo = () => {
  const dispatch = useAppDispatch();
  let idNum: number;

  const { id } = useParams();
  idNum = Number(id);

  const { data, isLoading } = useGetCurrentFilmQuery(idNum);

  // useEffect(() => {
  //   dispatch(fetchCurrentFilmData(idNum));
  // }, [idNum]);

  // const { data, status } = useSelector(selectCurrentFilm);

  if (isLoading || !data) {
    return (
      <section className="item-info">
        <div className="item-info__loading">
          <div className="item-info__loading-svg">
            <Loading />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="item-info">
      <div className="item-info__background">
        <ItemMainInfo currentFilm={data} />
      </div>
      <Container>
        {data?.description && (
          <div className="item-info__description">{data?.description}</div>
        )}
        {data?.persons && (
          <div className="item-info__cast-info">
            <CastSwiper persons={data?.persons} />
          </div>
        )}

        {data && data.similarMovies.length > 0 && (
          <ItemInfoSimilarMovies similarMovies={data?.similarMovies} />
        )}
      </Container>
    </section>
  );
};

export default ItemInfo;
