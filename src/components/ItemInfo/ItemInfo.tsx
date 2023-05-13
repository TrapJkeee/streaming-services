import { Container } from "components/Contanier/Container";

import { useSelector } from "react-redux";
import { selectMovies } from "store/MoviesSlice/moviesSelector";

import Cast from "components/Cast/Cast";
import "./ItemInfo.scss";
import { useEffect } from "react";
import { useAppDispatch } from "store/redux-hooks";
import { fetchCurrentFilmData } from "store/CurrentFilmSlise/currentFilmData";
import { useParams } from "react-router-dom";
import { selectCurrentFilm } from "store/CurrentFilmSlise/currentFilmSelector";
import ItemMainInfo from "./ItemMainInfo";

const ItemInfo = () => {
  const dispatch = useAppDispatch();
  let idNum: number;

  const { id } = useParams();
  idNum = Number(id);

  useEffect(() => {
    dispatch(fetchCurrentFilmData(idNum));
  }, [idNum]);

  const { data, status } = useSelector(selectCurrentFilm);
  console.log(data[0].persons);
  if (status === "loading") {
    return <div className="item-info__description">Загрузка</div>;
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
        <div className="item-info__cast-info">
          <Cast persons={data[0].persons} />
        </div>

        {/* <h2 className="item-info__facts">А вы знали?</h2> */}
      </Container>
    </section>
  );
};

export default ItemInfo;
