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
import { useGetPersonDataQuery } from "store/api";

const Person = () => {
  const { id } = useParams();
  const idNum = Number(id);

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchPersonData(idNum));
  // }, []);

  const { data, isLoading } = useGetPersonDataQuery(idNum);

  console.log(data);
  // const { data, status } = useSelector(selectPerson);

  if (isLoading || !data) {
    return <div>asd</div>;
  }
  return (
    <section>
      <Container>
        <div className="person">
          <PersonInfo data={data} />
        </div>
        <PersonMovies data={data} />
      </Container>
    </section>
  );
};

export default Person;
