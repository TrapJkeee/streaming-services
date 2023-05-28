import { Container } from "components/Contanier/Container";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPersonData } from "store/PersonSlice/personData";
import { selectPerson } from "store/PersonSlice/personSelector";
import { useAppDispatch } from "store/redux-hooks";

import "./Person.scss";
import PersonInfo from "./PersonInfo";
import PersonMovies from "./PersonMovies";

const Person = () => {
  const { id } = useParams();
  const idNum = Number(id);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPersonData(idNum));
  }, []);

  const { data, status } = useSelector(selectPerson);

  if (status === "loading" || data.length === 0) {
    return <div>asd</div>;
  }
  return (
    <section>
      <Container>
        <div className="person">
          <PersonInfo data={data[0]} />
        </div>
        <PersonMovies data={data[0]} />
      </Container>
    </section>
  );
};

export default Person;
