import { Container } from "components/Contanier/Container";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPersonData } from "store/PersonSlice/personData";
import { selectPerosn } from "store/PersonSlice/personSelector";
import { useAppDispatch } from "store/redux-hooks";

const Person = () => {
  let idNum: number;
  const { id } = useParams();
  idNum = Number(id);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPersonData(idNum));
  }, []);

  const { data } = useSelector(selectPerosn);
  const parseDate = Date.parse(`${data?.birthday}`);
  console.log(Date.parse(`${data?.birthday}`));
  let birthday = "";

  /*
    Нужно завтра будет сделать дату и доделать страницу персоны
    также сделать чтобы по клику были переходы на персону
    переходы со страницы с информацией в 2-х местах
  */

  // if (data?.birthday) {
  //   const year = parseDate.getFullYear();
  //   const month = `${parseDate?.getMonth() + 1}`.padStart(2, `0`);
  //   const day = `${parseDate.getDate()}`.padStart(2, `0`);
  //   birthday = `${day}.${month}.${year}`;
  // }

  return (
    <section>
      <Container>
        <div className="person">
          <div className="person__content">
            <div className="person__photo">
              <img src={data?.photo} alt={data?.name} />
            </div>
            <div className="person__body">
              <h1 className="person__name-ru">{data?.name}</h1>
              <div className="person__name-en">{data?.enName}</div>
              <div className="person__info">
                <span className="person__left">
                  Карьера:
                  <span className="person__rigth"></span>
                </span>
                <span className="person__left">
                  Дата рождения:
                  <span className="person__rigth">{birthday}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Person;
