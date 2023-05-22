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

import "./ItemInfo.scss";

const ItemInfo = () => {
  const dispatch = useAppDispatch();
  let idNum: number;

  const { id } = useParams();
  idNum = Number(id);

  useEffect(() => {
    dispatch(fetchCurrentFilmData(idNum));
  }, [idNum]);

  const { data, status } = useSelector(selectCurrentFilm);

  if (data.length === 0 || status === "loading") {
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
        <ItemMainInfo currentFilm={data[0]} />
      </div>
      <Container>
        {data[0].description && (
          <div className="item-info__description">{data[0].description}</div>
        )}
        {data[0].persons && (
          <div className="item-info__cast-info">
            <CastSwiper persons={data[0].persons} />
          </div>
        )}

        {/* <h2 className="item-info__facts">А вы знали?</h2> */}
      </Container>
    </section>
  );
};

export default ItemInfo;
